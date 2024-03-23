const helper = require('../helpers/jwt')
const jwt = require('jsonwebtoken')
const {Users} = require('../models')

exports.checkToken = async (req, res, next) => {
    if (!req.headers['authorization']) {
       return res.status(498).json({
           status: 498,
           message: 'No Authorization Provided'
        }) 
    }
    const paylaod = await helper.decode(req.headers['authorization'])
    if (!paylaod) {
       return res.status(401).json({
           status: 401,
           message: 'UNAUTHORIZED OR Expired AUTHORIZATION'
        }) 
    }
    const account = await Users.findOne({
        where:{
            id: paylaod.id
        }
    })
    if (!account) {
        return res.json({message: 'UNAUTHORIZED Account Not Found'})  
    } 
  
    req.user = account
     
    next()
    
}










// exports.checkToken = async (req, res, next) => {
//     const decodeToken = (token) => {
//         return jwt.verify(token,(err, decoded) => {
//             if (err) {
//                 return undefined;
//             }
//             return decoded;
//         });
//     }
//     if (!req.headers.authorization) {
//         return res.status(401).send({ 
//             message: 'UNAUTHORIZED'
//         })
//     }
//     const token = req.headers.authorization.split('')[1];
//     if (!token) {
//         return res.status(401).send({ 
//             message: 'UNAUTHORIZED'
//         })
//     }
//     const decodedToken = decodeToken(token);
//     if (!decodedToken) {
//         return res.status(401).send({ 
//             message: 'UNAUTHORIZED'
//         })
//     }

//     console.log(decodedToken);

//     next()
// }

// const authorize = (req, res, next) => {
//     if (!req.headers.authorization) {
//         return res.status(401).send({message: 'UNAUTHORIZED'});
//     }
//     const token = req.headers.authorization.split(' ')[1];
//     if (!token) {
//         return res.status(401).send({message: 'UNAUTHORIZED'});
//     }
//     const decodedToken = decodeToken(token);
//     if (!decodedToken) {
//         return res.status(401).send({message: 'UNAUTHORIZED'});
//     }
//     req.userId = decodedToken.subject;
//     next();
// };