const { Sub_category } = require('../models')

exports.createSubcategory = async (req , res ) => {
    const {category , description , CategoryId} = req.body 
    if (!category || !description) {
        return res.send({
            "message":" Both field are required"
        })    
    }
    try {
        const subcat = await Sub_category.create({
            category,
            description,
            CategoryId
        }) 
        return res.send(subcat)
    } catch (error) {
        return res.status(400).send({
            "message":`Error ${error}`
        });
    }    
}

exports.subcategory = async (req, res) => {
    const  {CategoryId} = req.body

    try {
        const subcat = await Sub_category.findAll({
            where:{
                CategoryId
            }
        })
        if (!subcat) {
            return res.send({
                "message":`Empy data for this id ${id}`
            })
        }
        return res.send(subcat)
    } catch (error) {
        return res.status(400).send({
            "message":`Error ${error}`
        });
    }
}

exports.updateSubCategory = async (req , res ) => {
    const {category, description , CategoryId} = req.body
    const {id} = req.params

    try {
        const subcat = await Sub_category.findOne({
            where:{
                id
            }
        })
        if (category) {
            subcat.category = category
        }
        if (description) {
            subcat.description = description
        }
        if (CategoryId) {
            subcat.CategoryId = CategoryId
        }
        subcat.save();
        return res.send({
            "message":"Sub Category was updated succesfully"
        })
    } catch (error) {
        return res.status(400).send({
            "message":`Error ${error}`
        });
    }
}

exports.deleteSubCategory = async (req , res ) => {
    const {id} = req.params

    const subcat = await Sub_category.findOne({
        where:{
            id
        }
    })
    if (!subcat) {
        return res.send({
            "message":"Sub Category was not found"
        })
    }
    try {
      await  subcat.destroy()
      return res.send(`Sub Category deleted succesfully`)
    } catch (error) {
        return res.status(400).send({
            "message":`Error ${error}`
        });
    }
}