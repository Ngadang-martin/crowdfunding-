const { Users } = require('../models')
const validator = require('validator')
var base64Img = require('base64-img');
const { projectTeamSchema } = require('../helpers/validationSchemas')

exports.createUser = async (req, res) => {
    const { fistname, lastname, username, phone_number, dob, country, email, support_email, avatar, address, bank_number, biography } = req.body
    const { id } = req.params
    try {
        const valide = await projectTeamSchema.validateAsync(req.body)
        let user = await Users.findByPk(id)
        var filepath = base64Img.imgSync(avatar, 'images/users', `avatar_${Date.now()}${user.username}`);
        if (!user) {
            return res.status(404).send({ message: 'User not found' })
        }
        user = Object.assign({}, user.dataValues, {
            fistname: fistname || user.fistname,
            lastname: lastname || user.lastname,
            username: username || user.username,
            phone_number: phone_number || user.phone_number,
            dob: dob || user.dob,
            country: country || user.country,
            email: email || user.email,
            support_email: support_email || user.support_email,
            address: address || user.address,
            avatar: `http://localhost:8080/${filepath.replace(/\\/g, "/")}` || user.avatar,
            bank_number: bank_number || user.bank_number,
            biography: biography || user.biography,
        })
        await Users.update(user, { where: { id } })
        return res.status(201).send({ user })
    } catch (error) {
        if (error.isJoi === true)
            error.status = 422
        return res.json({
            status: 400,
            message: error.message
        });
    }
}




exports.getAllUsers = async (req, res) => {
    try {
        const users = await Users.findAll()
        // if (users.isEmpty()) {
        //     return res.send({
        //         "message":"No users data found"
        //     })
        // }
        return res.send(users)
    } catch (error) {
        return res.send({
            "message": `Error ${error}`
        })
    }
}

exports.getSingleUser = async (req, res) => {
    const { id } = req.params
    console.log(id);

    try {
        const user = await Users.findOne({
            where: {
                id
            }
        })
        if (!user) {
            return res.send({
                "message": `No data for the id ${id}`
            })
        }
        return res.send(user)
    } catch (error) {
        return res.send({
            "message": `Error ${error}`
        })
    }
}