const {reward_level} = require('../models')


exports.createRewardLevel = async (req, res) => {
    const {level, rewardId} = req.body
    try {
        const levels = await reward_level.create({
            level,
            rewardId
        })

        return res.status(201).send(levels)
    } catch (error) {
        return res.status(500).send({error})
    }
}

exports.updateRewardLevel = async (req, res) => {
    const {level} = req.body
    const {id} = req.params

    let levels = await reward_level.findByPk(id)
    try {
        levels = Object.assign({}, levels.dataValues,{
          level: level || levels.level
        })
        await reward_level.update(levels, {where:{id}})
        return res.status(201).send({levels})
    } catch (error) {
        return res.status(201).send({message:`${error}`})
    }
}

exports.deleteRewardLevel = async (req, res) => {
    const {id} = req.params
     const levels = await reward_level.findOne({where:{id}})
     if (!levels) {
         return res.status(404).send({message:"Reward level not found"})
     }
     try {
         levels.destroy()
         return res.status(200).send({message:"Reward level deleted"})
     } catch (error) {
         return res.status(500).send({error})
     }
}

exports.getRewardLevel = async (req, res) => {
    const {rewardId} = req.body
    try {
        const levels = await reward_level.findAll({where:{rewardId: rewardId}})
        return res.status(200).send({levels})
    } catch (error) {
        return res.status(500).send({message:`${error}`})        
    }
}

