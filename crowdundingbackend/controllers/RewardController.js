const { reward } = require('../models')
var base64Img = require('base64-img');
const { projectRewardSchema } = require('../helpers/validationSchemas')

exports.createReward = async (req, res) => {
    const { title, price, item, retail_price, image, description, quantity, send_date, ProjectId } = req.body
    const visibility = null
    console.log(typeof description);

    try {
        const valide =  await projectRewardSchema.validateAsync({ title, price, item, retail_price, image, description, quantity, send_date })
         var filepath = base64Img.imgSync(valide.image, 'images/rewards', `rewardimg_${Date.now()}`);
         await reward.create({
            title: valide.title,
            price: valide.price,
            visibility: visibility,
            retail_price: valide.retail_price,
            item:valide.item,
            image: `http://localhost:8080/${filepath.replace(/\\/g, "/")}`,
            description: valide.description,
            quantity:valide.quantity,
            send_date:valide.send_date,
            ProjectId
        })
        return res.json({ 
            status: 201,
            message: `The reward with title ${title} was succesfully created`
         })
    } catch (error) {
         if (error.isJoi === true)
            error.status = 422
        return res.json({
            status: 400,
            message: error.message
        });
    }
}

exports.updateReward = async (req, res) => {

    const {item,price, retail_price, title,  editingImage, description, quantity, send_date } = req.body

    let photo = null
    if (editingImage && editingImage != '') {
        var filepath = base64Img.imgSync(editingImage, 'images/rewards', `rewardimg_${Date.now()}`);
        photo = `http://localhost:8080/${filepath.replace(/\\/g, "/")}`
    }
    
    const { id } = req.params
    try {
        let rewards = await reward.findByPk(id)

        if (!rewards) {
            return res.status(404).send({ message: "rewards Not Found" })
        }
        rewards = Object.assign({}, reward.dataValues, {
            title: title || rewards.title,
            image:  photo != null ? photo : rewards.image,
            item: item || rewards.item,
            price: price || rewards.price,
            retail_price: retail_price || rewards.retail_price,
            description: description || rewards.description,
            quantity: quantity || rewards.quantity,
            send_date: send_date || rewards.send_date,
        })
        await reward.update(rewards, { where: { id } })
        return res.json({ 
            status: 201,
            message: `The reward with title ${title} was succesfully Updated`
         })
    } catch (error) {
        return res.send({ "error": `${error}` })
    }
}

exports.getAllReward = async (req, res) => {
    try {
        const rewards = await reward.findAll()
        if (!rewards) {
            return res.status(404).send({ message: "Ne reward Found" })
        }

        return res.status(200).send({ rewards })
    } catch (error) {
        return res.send({ "error": `${error}` })
    }
}

exports.getSingleReward = async (req, res) => {
    const { id } = req.params
    try {
        const rewards = await reward.findOne({
            where: {
                id
            }
        })
        if (!rewards) {
            return res.json({ status: 404, message: "reward Not Found" })
        }
        return res.json(rewards )
    } catch (error) {
        return res.json(error.message)
    }
}

exports.deleteReward = async (req, res) => {
    const { id } = req.params

    const rewards = await reward.findOne({ where: { id } })
    try {
        if (!rewards) {
            return res.status(404).send({ message: "reward Not Found" })
        }
        rewards.destroy();
        return res.status(200).send({ message: "reward Deleted Succesfully" })
    } catch (error) {
        return res.status(500).send({ message: `${error}` })
    }
}

exports.getProjectReward = async (req, res) => {
    const { id } = req.params
    try {
    const rewards = await reward.findAll({ where: { ProjectId: id } }) 
    if (!rewards) {
        return res.json({
            status: 200,
            message: "No reward found for this project"
        })
    }
    return res.json(rewards)
    } catch (error) {
        res.json({error: error})
    }
}
