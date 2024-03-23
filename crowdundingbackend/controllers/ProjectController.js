const {
  Projects,
  ProjectFunding,
  reward,
  Category,
  Users,
  campagne,
  photos,
  Project_asset,
  Funding
} = require("../models");
var base64Img = require("base64-img");
const date = require("date-and-time");
const { projectBasicsSchema } = require("../helpers/validationSchemas");
const { getPagination, getPagingData } = require("../utils/index.js");
const helper = require("../helpers/mailer.js");
const { Sequelize, sequelize } = require("../models");

exports.createUserProject = async (req, res) => {
  const { basic, rewards, funding, team, content, UserId } = req.body;
  try {
    const result = await sequelize.transaction(async (t) => {
      var basicImage = base64Img.imgSync(
        basic.image,
        "images/projects",
        `projectimg_${Date.now()}`
      );
      const project = await Projects.create(
        {
          title: basic.title,
          image: `http://localhost:8080/${basicImage.replace(/\\/g, "/")}`,
          tag: basic.tag,
          location: basic.location,
          description: basic.description,
          history: basic.history,
          video: basic.video,
          duration: basic.duration,
          UserId: UserId,
          CategoryId: basic.CategoryId
        },
        { transaction: t }
      );

      let user = await Users.findByPk(UserId);
      var teamImage = base64Img.imgSync(
        team.avatar,
        "images/users",
        `avatar_${Date.now()}${user.username}`
      );
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      if (project) {
        console.log(rewards.length);
        for (let i = 0; i < rewards.length; i++) {
          var rewardImage = base64Img.imgSync(
            rewards[i].image,
            "images/rewards",
            `projectimg_${Date.now()}`
          );
          await reward.create(
            {
              title: rewards[i].title,
              price: rewards[i].price,
              visibility: rewards[i].visibility,
              retail_price: rewards[i].retail_price,
              item: rewards[i].item,
              image: `http://localhost:8080/${rewardImage.replace(/\\/g, "/")}`,
              description: rewards[i].description,
              quantity: rewards[i].quantity,
              send_date: rewards[i].send_date,
              ProjectId: project.id
            },
            { transaction: t }
          );
        }
        console.log("team", team);
        user = Object.assign({}, user.dataValues, {
          fistname: team.fistname || user.fistname,
          lastname: team.lastname || user.lastname,
          username: team.username || user.username,
          phone_number: team.phone_number || user.phone_number,
          dob: team.dob || user.dob,
          country: team.country || user.country,
          email: team.email || user.email,
          support_email: team.support_email || user.support_email,
          address: team.address || user.address,
          avatar:
            `http://localhost:8080/${teamImage.replace(/\\/g, "/")}` ||
            user.avatar,
          bank_number: team.bank_number || user.bank_number,
          biography: team.biography || user.biography
        });
        await Users.update(user, { where: { id: UserId } }, { transaction: t });
        fund = await ProjectFunding.create(
          {
            funding_type: funding.funding_type,
            goal: funding.goal,
            bank_number: funding.bank_number,
            account_number: funding.account_number,
            ProjectId: project.id
          },
          { transaction: t }
        );
        const link = [];
        let data = {
          description: content.description,
          asset_name: content.asset_name,
          ProjectId: project.id
        };
        const assetData = await Project_asset.create(data, { transaction: t });
        if (content.asset.length) {
          for (let i = 0; i < content.asset.length; i++) {
            var element = base64Img.imgSync(
              content.asset[i],
              "images/projectContent",
              `projectContent_${Date.now()}`
            );
            var parts = element.split(/(\/|\\)/g);
            var imagename = `http://localhost:8080/images/projectContent/${
              parts[parts.length - 1]
            }`;
            link.push(imagename);
          }
        } else {
          return res.json({
            status: 400,
            message: "Assets not Found "
          });
        }
        saveImages = await photos.bulkCreate(
          link.map((image) => {
            return {
              image,
              ProjectAssetId: assetData.id
            };
          }),
          { transaction: t }
        );
      }
    });
    if (!result) {
      return res.json({
       
        status: 404,
      message: "Fail saving project please check your inputs"
      });
    }
    return res.json({
      status: 201,
      message: "Your project was saved Successfully"
    });
  } catch (error) {
    console.log(error.message);
    return res.json(error.message);
  }
};

exports.createProject = async (req, res) => {
  const {
    UserId,
    CategoryId,
    tag,
    duration,
    title,
    image,
    location,
    description,
    history,
    video
  } = req.body;
  try {
    const valide = await projectBasicsSchema.validateAsync(req.body);
    var filepath = base64Img.imgSync(
      image,
      "images/projects",
      `projectimg_${Date.now()}`
    );
    const project = await Projects.create({
      title: valide.title,
      image: `http://localhost:8080/${filepath.replace(/\\/g, "/")}`,
      tag: valide.tag,
      location: valide.location,
      description: valide.description,
      history: valide.history,
      video: valide.video,
      duration: valide.duration,
      UserId: valide.UserId,
      CategoryId: valide.CategoryId
    });
    return res.status(201).send({
      status: 201,
      message: `Project Basics with title ${title} Created Succefuly  `,
      project
    });
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    return res.json({
      status: 400,
      message: error.message
    });
  }
};

exports.updateProject = async (req, res) => {
  const {
    CategoryId,
    title,
    sub_title,
    image,
    location,
    description,
    history,
    video
  } = req.body;

  const { id } = req.params;
  try {
    let project = await Projects.findByPk(id);

    if (!project) {
      return res.status(404).send({ message: "Projects Not Found" });
    }
    project = Object.assign({}, project.dataValues, {
      CategoryId: CategoryId || project.CategoryId,
      title: title || project.title,
      sub_title: sub_title || project.sub_title,
      image: image || project.image,
      location: location || project.location,
      description: description || project.description,
      history: history || project.history,
      video: video || project.video
    });
    await Projects.update(project, { where: { id } });
    return res.status(201).send({ project });
  } catch (error) {
    return res.send({ error: `${error}` });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const project = await Projects.findAll();
    if (!project) {
      return res.status(404).send({ message: "Ne project Found" });
    }

    return res.status(200).send(project);
  } catch (error) {
    return res.send({ error: `${error}` });
  }
};

exports.getSingelProject = async (req, res) => {
  const { id } = req.params;
  console.log("jhggh");
  try {
    const project = await Projects.findOne({
      where: {
        id
      }, include: [{model: campagne}]
    });
    if (!project) {
      return res.status(404).json({ message: "Project Not Found" });
    }
    return res.status(200).json(project);
  } catch (error) {
    return res.json(error);
  }
};

// exports.getProjectBYCategory = async (req, res) => {

// }

exports.deleteProject = async (req, res) => {
  const { id } = req.params;

  const project = await Projects.findOne({ where: { id } });
  try {
    if (!project) {
      return res.status(404).send({ message: "Project Not Found" });
    }
    project.destroy();
    return res.status(200).send({ message: "Project Deleted Succesfully" });
  } catch (error) {
    return res.status(500).send({ message: `${error}` });
  }
};

exports.getUserProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.findAll({
      where: {
        UserId: id
      }
    });
    if (!project) {
      return res.status(404).json({
        status: 404,
        message: "No project found! Please add a project and try again"
      });
    }
    return res.status(200).json(project);
  } catch (error) {
    return res.json({
      error: error
    });
  }
};

exports.getFundingAndProject = async (req, res) => {
  try {
    let funding = await Projects.findAll({
      where: { isvalide: true },
      include: [
        { model: ProjectFunding },
        { model: reward },
        { model: Category },
        { model: Users },
        {model: campagne , 
          include: {model: Funding }
        },
      ]
    })

    funding = funding.map(elt => elt.dataValues).map(elt => {
      elt.campagne = elt.campagne.dataValues
      elt.somme = 0
      elt.nbrFinancement = 0

      elt.campagne.Fundings.forEach(f => {
        elt.somme += parseFloat(f.amount)
        elt.nbrFinancement++
      })
      
      return elt
    }) 


    return res.json(funding);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

exports.listProject = async (req, res) => {
  const { page, size } = req.query;
  console.log(req.query);
  let where = { isvalide: true },
    limit = null,
    offset = null;

  const pagin = getPagination(page, size);
  console.log(pagin);
  limit = pagin.limit;
  offset = pagin.offset;
  let { rows, count } = await Projects.findAndCountAll({
    where,
    limit,
    offset
  });
  console.log(rows);
  rows = rows.map((elt) => elt.dataValues);
  let project = [];
  for (let i = 0; i < rows.length; i++) {
    let nullExist = false;
    rows[i].projectFunding = await ProjectFunding.findOne({
      where: { ProjectId: rows[i].id }
    });
    if (rows[i].projectFunding == null) {
      nullExist = true;
    }
    rows[i].reward = await reward.findOne({ where: { ProjectId: rows[i].id } });
    if (rows[i].reward == null) {
      nullExist = true;
    }
    rows[i].Category = await Category.findOne({
      where: { id: rows[i].CategoryId }
    });
    if (rows[i].Category == null) {
      nullExist = true;
    }
    rows[i].user = await Users.findOne({ where: { id: rows[i].UserId } });
    if (rows[i].user == null) {
      nullExist = true;
    }
    if (nullExist == false) {
      project.push(rows[i]);
    }
  }
  return res.json(getPagingData({ count, project }, page, limit));
};

exports.SingleGetFundingAndProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.findOne({
      where: { id },
      include: [
        { model: ProjectFunding },
        { model: reward },
        { model: Category },
        { model: Users },
        { model: campagne, 
         include: {model: Funding }
        },
      ]
    });
    return res.json(project);
  } catch (error) {
    return res.json(error);
  }
};

exports.checkValideProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.findOne({
      where: { id },
      include: [
        { model: ProjectFunding },
        { model: reward },
        { model: Category },
        { model: Users }
      ]
    });
    if (!project) {
      return res.json({
        status: 400,
        message: "Please add a project Basics"
      });
    }
    if (
      project.ProjectFunding === null &&
      !project.rewards.length &&
      project.Users === null
    ) {
      return res.json({
        status: 400,
        message: "Please complete project Funding, Reward and Team first"
      });
    }
    if (project.ProjectFunding === null) {
      return res.json({
        status: 400,
        message: "Please complete project Funding first"
      });
    }
    if (!project.rewards.length) {
      return res.json({
        status: 400,
        message: "Please complete project Reward first"
      });
    }
    if (project.Users === null) {
      return res.json({
        status: 400,
        message: "Please complete project Team first"
      });
    }
    if (project.issent === true) {
      return res.json({
        status: 200,
        message:
          "This project is already sent. You will be contacted by an Admin for approval"
      });
    }
    let params = {
      title: project.title,
      description: project.description,
      username: project.User.username
    };
    const test = await Projects.update({ issent: true }, { where: { id } });
    helper()
      .to("wilfriedngadang@gmail.com")
      .subject(`Request for project $ Approval`)
      .send("projectValidation", params);
    return res.json({
      status: 200,
      message:
        "The action went trough succefully. Await Admin response to validate your Project"
    });
  } catch (e) {
    return res.json(e.message);
  }
};

exports.validateProject = async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.findOne({
      where: { id },
      include: [{ model: Category }, { model: Users }]
    });
    await Projects.update({ isvalide: true }, { where: { id } });
    const now = new Date();
    const end_date = date.addDays(now, +project.duration);
    const duration = date.subtract(now, end_date).toDays();
    let params = {
      title: project.title
    };
    console.log(now, end_date, now);
   const camp = await campagne.create({
      start_date: now,
      duration: duration,
      end_date: end_date,
      ProjectId: project.id
    });
    helper()
      .to(project.User.email)
      .subject("Project Approval")
      .send("projectValidation", params);
    return res.json({
      status: 200,
      message: "The project was succefully appoved",
      endDate: end_date,
      start_date: now,
      dur: duration,
      camp: camp
    });
  } catch (error) {
    return res.json(error.message);
  }
};

exports.getProjectDemands = async (req, res) => {
  try {
    const toValidate = await Projects.findAll({
      where: { issent: true, isvalide: false },
      include: [{ model: Users }]
    });
    return res.json(toValidate);
  } catch (error) {
    return res.json(error.message);
  }
};

exports.getUserCampaign = async (req, res) => {
    const {id} = req.params;
    console.log(parseInt(id));
    try {
        let result = (await Projects.findAll({where: {UserId: id, isvalide: true},
          include: [ {model: campagne, include: [
            {model: Funding}
          ]
          }, {model: ProjectFunding} ]})).map(elt => elt.dataValues)
        if (!result) {
            return res.json({status:404, message: "No Camagne found"})
        }

        result = result.map(elt => {
          elt.campagne = elt.campagne.dataValues
          somme = 0
          elt.campagne.Fundings.forEach(f => {
            somme += parseFloat(f.amount)
          })
          elt.campagne.somme = somme

          return elt
        }) 

        return res.json(result);
    } catch (error) {
        return res.json(error.message);
    }
}


exports.stats = async (req, res) => {
  const {id} = req.params
  try {
    let { count } = await Projects.findAndCountAll({where: {UserId: id}})
    let campagne = await Projects.findAndCountAll({where: {UserId: id, issent: true, isvalide: true}})
    return res.json({count, campagne: campagne.count})
  } catch (error) {
    return res.json(error.message)
  }
}
//TODO: finish financement 

exports.finaceProject = async (req, res) => {
   const {amount , rewardId, id, UserId} = req.body
   const date = Date.now()
   try {

    const project = await Projects.findOne({
      where: {
        id
      }, include: [{model: campagne}]
    });
    if (!project) {
      return res.status(404).json({ status:404, message: "Resource Not Found" });
    }
    console.log(project.campagne.id)
    
     const funding = await Funding.create({
       amount,
       date,
       rewardId,
       campagneId: project.campagne.id,
       UserId
     })
     if (!funding) {
       return res.json({status: 402, message: "payment Failed"})
     }
    
     return res.json({status: 200, message: "Payment successfull"})
     
   } catch (error) {
     return res.sjon(error.messsage)
   }
}

exports.getUserFinacement = async (req, res) => {
  const {Userid } = req.params
  const global = []
  const temp = []
  try {
    const projets = await Projects.findAll({
      where: {UserId: Userid, issent: true, isvalide: true},
      include: [
        {
          model: reward, 
          include: [
            {
              model: Funding, include: [{ model: Users}]
            }
          ]
        }
      ]
    })
  //  for(let i = 0 ; i < projets.length ; i++){
  //    let count = projets[i].rewards.Fundings
  //    temp.push(count)
  //  }
  //  for(let i = 0 ; i < temp.length ; i++){
  //   let count = temp[i].length
  //   global.push(count)
  // }
    return res.json({projets, global})
  } catch (error) {
    return res.json(error.message)
  }
}

exports.getfunderFinancemant = async (req, res) => {
  const {id} = req.params
  try {

    const financement = await Funding.findAll({
      where: {UserId: id}, 
      include: [{model: rewards,
     include: [{model: Projects}]
    }]})
    return res.json(financement)
  } catch (error) {
    return res.json(financement)    
  }
}