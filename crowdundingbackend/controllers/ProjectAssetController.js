const {Project_asset, photos} = require('../models')
var base64Img = require('base64-img');
const { projectContentSchema } = require('../helpers/validationSchemas')
exports.createProjectAsset = async (req, res) => {
    const { asset = [], description, asset_name} = req.body
    const {id }= req.params
    const link = []
    try {
        const valide = await projectContentSchema.validateAsync(req.body)
        let data = {
        description: valide.description,
        asset_name: valide.asset_name,
        ProjectId:id
    }
    const assetData = await Project_asset.create(data)
    if (valide.asset.length) {
        for (let i = 0; i < valide.asset.length; i++) {
            var element =  base64Img.imgSync(valide.asset[i], 'images/projectContent', `projectContent_${Date.now()}`) 
            var parts = element.split(/(\/|\\)/g)
            var imagename = `http://localhost:8080/images/projectContent/${parts[parts.length -1]}`
            link.push(imagename)
        }
    }else{
        return res.json({
            status: 400,
            message: "Assets not Found "
        })
    }      
    const saveImages = await photos.bulkCreate(link.map(image => {
        return {
            image,
            ProjectAssetId: assetData.id
        }
    }))
    return res.json({saveImages, assetData})
    } catch (error) {
          if (error.isJoi === true)
            error.status = 422
        return res.json({
            status: 400,
            message: error.message
        });
    }
    
}
exports.updateProjectAsset = async (req, res) => {
    const {asset,description, asset_name, ProjectId} = req.body
    
    const {id} = req.params

    let assets = await Project_asset.findByPk(id)
    if (!assets) {
        return res.status(404).send({message:"Project Asset Not Found"})
    }
    try {
        assets = Object.assign({}, assets.dataValues,{
          asset: asset || assets.asset,
          description: description || assets.description,
          asset_name: asset_name || assets.asset_name,
          ProjectId: ProjectId || assets.ProjectId
        })
        await Project_asset.update(assets, {where:{id}})
        return res.status(201).send({assets})
    } catch (error) {
        return res.status(201).send({message:`${error}`})
    }
}

exports.deleteProjectAsset = async (req, res) => {
    const {id} = req.params
     const assets = await Project_asset.findOne({where:{id}})
     if (!assets) {
         return res.status(404).send({message:"Project asset not found"})
     }
     try {
         assets.destroy()
         return res.status(200).send({message:"Peoject assest deleted"})
     } catch (error) {
         return res.status(500).send({error})
     }
}

exports.getProjectAsset = async (req, res) => {
    const {id} = req.params
    if (!id) {
        return res.status(404).send({message:"Project Id Not Found"})
    }
    try {
        const assets = await Project_asset.findAll({
            where:{ProjectId:id},
             include: [{model:photos}]})
        return res.json(assets)
    } catch (error) {
        return res.json({message: error.message})        
    }
} 
