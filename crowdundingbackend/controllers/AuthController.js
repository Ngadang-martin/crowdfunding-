const { Users ,User_role ,Role} = require('../models')
const jwt = require('../helpers/jwt.js')
const bcrypt = require('bcrypt')
const saltRounds = 5;
const {authSchema} = require('../helpers/validationSchemas')

exports.signup = async (req, res) => {
    let { username, password, roles } = req.body
  
    try {
        var result = await authSchema.validateAsync({ username, password})
       
        let accountExist = await Users.findOne({
            where: {
                username: result.username
            }
        })
        if (accountExist) {
            return res.json({
                status: 400,
                message: `An account with username ${username} is already taken`
            });
        }
        const hash = bcrypt.hashSync(result.password, saltRounds);
        const user = await Users.create({ username: result.username, password: hash })

        if (!roles || !(roles instanceof Array) || !roles.length) {
            roles =[2, 3,4]
        }
        await User_role.bulkCreate(roles.map(roleId => {
            return {
                roleId: roleId,
                userId: user.id,
            }
        }))
      
        return res.status(200).json({
            status: 201,
            message:"Account Created Successfully"
        })
    } catch (error) {
        if(error.isJoi === true) 
            error.status = 422   
        return res.json({
            status: 400,
            message:error.message
        });
    }
}

exports.updateAccount = async (req, res) => {
    const { username, password } = req.body
    const { id } = req.params

    let user = await Users.findByPk(id)
    if (!user) {
        return res.status(404).send({
            message: `No user exist with id ${id} `
        });
    }
    try {
        hash = bcrypt.hashSync(password, saltRounds);
        user = Object.assign({}, user.dataValues, {
            username: username || user.username,
            password: password || user.password
        })
        await Users.update(user, { where: { id } })
        return res.status(201).send({ user })
    } catch (error) {
        return res.status(400).send({
            "message": `Error ${error.message}`
        });
    }
}
exports.signIn = async (req, res) => {
  let { username, password } = req.body
    // const account = await Users.findOne({
    if (!username || !password) {
        return res.json({
            status: 400,
            message: `All fields are required before submition!`
        });
    }
    await Users.findOne({
        where: {
            username
        },
        include: [{ 
            model: Role
        }]
    })
        .then(userFound => {
            if (userFound) {
                bcrypt.compare(password, userFound.password, (errorbycrpt, succescrypt) => {
                    if (succescrypt) {
                        let access_token = jwt.createToken(userFound, '1h')
                        let refresh_token = jwt.createToken(userFound, '2h')
                        return res.json({ 
                            status: 200, id: userFound.id, access_token, refresh_token, 
                            roles: userFound.Roles.map(role => {
                                return {
                                    id: role.id, role: role.role
                                }
                            }) 
                        })
                    } else {
                        return res.json({
                            status: 400,
                            message: " incorect Username or Password"
                        })
                    }
                })
            } else {
                return res.json({
                     status: 400, 
                     message: "User not found!! Please try create an account"
                 })
          }
        })
        .catch(error => {
            return res.send({
                message: error
            })
        })
}