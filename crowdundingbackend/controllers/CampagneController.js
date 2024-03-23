const {campagne} = require('../models')
const nodemailer = require('nodemailer')

exports.createCampange = async (res, req) => {
    const {start_date, duration , end_date, ProjectId} = req.body

    try {
        const campagnes = await campagne.create({ 
            start_date,
            end_date,
            duration,
            ProjectId
        })
        return res.status(201).send({campagnes})
    } catch (error) {
        return res.status(404).send({message:`${error}`})
    }
}


exports.updateCampagne = async (req, res) => {
    const {start_date, duration , end_date, ProjectId} = req.body
    const {id} = req.params
    let campagnes = await campagne.findByPk(id)
    try {
        campagnes = Object.assign({}, campagnes.dataValues,{
          start_date: start_date || campagnes.start_date,
          end_date: end_date || campagnes.end_date,
          duration: duration || campagnes.duration,
          ProjectId: ProjectId || campagnes.ProjectId,
        })
        await campagne.update(campagnes, {where:{id}})
        return res.status(201).send({campagnes})
    } catch (error) {
        return res.status(201).send({message:`${error}`})
    }
}

exports.deleteCampagne = async (req, res) => {
    const {id} = req.params
     const campagnes = await campagne.findOne({where:{id}})
     if (!campagnes) {
         return res.status(404).send({message:"Campagne not found"})
     }
     try {
         campagnes.destroy()
         return res.status(200).send({message:"Campagne level deleted"})
     } catch (error) {
         return res.status(500).send({error})
     }
}

exports.getCampagneByProject = async (req, res) => {
    const {ProjectId} = req.body
    try {
        const campagnes = await campagne.findAll({where:{ProjectId: ProjectId}})
        return res.status(200).send({campagnes})
    } catch (error) {
        return res.status(50-0).send({message:`${error}`})        
    }
}

exports.getAllCampagne = async (req, res) => {
    try {
        const campagnes = await campagne.findAll()
        if (!campagnes) {
            return res.status(404).send({message:"No Camagne found"})
        }
        return res.status(200).send({campagnes})
    } catch (error) {
        return res.status(500).send({message:`${error}`})        
    }
}

exports.sendRequestMail = async (req, res) => {
  /**
 * Envoi du code otp 
 * 
 * @Visibility private
 * 
  @param {} res 
  @param {} email 
  @param {} type 
 * @returns 
 */
const sendOTP = async(res, login, type) => {
    const user = await db.Utilisateurs.findOne({
        where: {
            [db.Op.or]: [
                { email: login },
                { tel: login }
            ]
        }
    })
    if (empty(user)) {
        return res.fail(res.translate('utilisateur_innexistant'), 404)
    }

    let otp = helpers.otp.findOne(u => (u.email == user.email || u.tel == user.tel), type)
    if (empty(otp)) {
        otp = {
            tel: user.tel,
            email: user.email,
            mdp: user.mdp,
            code: helpers.utils.generateKey()
        }
        helpers.otp.saveSync(otp, type)
    }

    helpers.mailer().to(user.email).subject(type == 'opt' ? 'Code de verification' : 'Réinitialisation du mot de passe').send(type, { code: otp.code })
    
    return res.success(res.translate('code_envoyer'))
}
}