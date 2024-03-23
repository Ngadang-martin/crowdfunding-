const { Category } = require('../models')

// TODO search for humans for illustrations  and un draw 

exports.createCategory = async (req, res) => {
    const { category, description , image } = req.body
    if (!category || !description || !image) {
        return res.send({
            "message":"All Fields are required"
        })
    }
    try {
        const cat = await Category.create({
            category,
            description,
            image
        })
        return res.send(cat)
    } catch (error) {
        return res.send({
            "message":`Error ${error}`
        })
    }
}

exports.getAllCategory = async (req, res) => {
   try {
       const cat = await Category.findAll()

       if (!cat) {
           return res.send({
               "message":"No category found "
           })
       }
       
       return res.send(cat)
   } catch (error) {
    return res.send({
        "message":`Error ${error}`
    })
   }
}

exports.getACategory = async (req, res) => {
    const {id} = req.body

    if (!id) {
        return res.send({
            "message":"No category found please specify the category id "
        })
    }
    try {
        const cat = await Category.findOne({
            where:{
                id
            }
        })

        if (!cat) {
            return res.send({
                "message":`No data found for id ${id}`
            })
        }

        return res.send(cat)
    } catch (error) {
        return res.send({
            "message":`Error ${error}`
        })
    }
}

exports.updateCategory = async (req, res) => {
    const {id} = req.params 
    const { category, description , image } = req.body
    const cat = await Category.findOne({
        where:{
            id
        }
    })
    if (!cat) {
        return res.send({
            "message":"No category found please specify the category id "
        }) 
    }
    try {
        if (category) {
            cat.category = category
        }
        if (description) {
            cat.description = description
        }
        if (image) {
            cat.image = image
        }
        cat.save()
        return res.send({
            "message":`The category with succesfully updated`
        })
    } catch (error) {
        return res.send({
            "message":`Error ${error}`
        })
    }
}

exports.deleteCategory = async (req, res) => {
    const {id} = req.params

    const cat = await Category.findOne({
        where:{
            id
        }
    })

    if (!cat) {
        return res.send({
            "message":"No category found please specify the category id "
        })
    }
    try {
        await cat.destroy()
        return res.send(`Category deleted succesfully`)
    } catch (error) {
        return res.send({
            "message":`Error ${error}`
        })
    }
}