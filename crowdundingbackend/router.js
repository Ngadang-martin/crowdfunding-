const express = require('express')
const controller = require('./controllers')
const middlewares = require('./middlewares/index')



// const multer = require('multer')
// const path   = require('path')

// const storage = multer.diskStorage({
//     destination:'./images',
//     filename:(req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({
//     storage: storage
// })

//In this folder is found all the routes of the API

exports.routes = (() => {
    const router = express.Router()
    // Account management routes 
    router.route("/signup").post(controller.Auth.signup)
    router.route('/updateAccount/:id').post(middlewares.checkToken,controller.Auth.updateAccount)
    router.route('/signin').post(controller.Auth.signIn)


    //Sub category routes 
    router.route('/subCategory').post(controller.SubCategory.createSubcategory)
    router.route('/subCategory').get(controller.SubCategory.subcategory)
    router.route('/updateSubCategory/:id').post(controller.SubCategory.updateSubCategory)
    router.route('/deleteSubCategory/:id').post(controller.SubCategory.deleteSubCategory)

    //Categories route
    router.route('/category').post(middlewares.checkToken, controller.Category.createCategory)
    router.route('/category').get(controller.Category.getAllCategory)
    router.route('/singleCategory/:id').get(controller.Category.getACategory)
    router.route('/updateCategory/:id').post(controller.Category.updateCategory)
    router.route('/deleteCategory/:id').post(controller.Category.deleteCategory)

    //Users router
    router.route('/users/:id').post(middlewares.checkToken,controller.User.createUser)
    router.route('/users').get(controller.User.getAllUsers)
    router.route('/singleUser/:id').get(middlewares.checkToken,controller.User.getSingleUser)

    //projects routes
    router.route('/project').post(middlewares.checkToken,controller.Project.createProject) 
    router.route('/projectList').get(controller.Project.listProject) 
    router.route('/updateProject/:id').post(middlewares.checkToken,controller.Project.updateProject)
    router.route('/getAllProject').get( controller.Project.getAllProjects)
    router.route('/getSingleProject/:id').get( controller.Project.getSingelProject)
    router.route('/deleteProduct/:id').delete(middlewares.checkToken, controller.Project.deleteProject)
    router.route('/getUserProject/:id').get(middlewares.checkToken,controller.Project.getUserProject)
    router.route('/getFundingAndProject').get(controller.Project.getFundingAndProject)
    router.route('/checkValideProject/:id').get(controller.Project.checkValideProject)
    router.route('/validateProject/:id').post(controller.Project.validateProject)
    router.route('/SingleGetFundingAndProject/:id').get(controller.Project.SingleGetFundingAndProject)
    router.route('/getProjectDemands').get(controller.Project.getProjectDemands)
    router.route('/createProjects').post(controller.Project.createUserProject) 
    router.route('/getUserCampaign/:id').get(controller.Project.getUserCampaign)
    //Reward routes 
    router.route('/reward').post(middlewares.checkToken,controller.Reward.createReward) 
    router.route('/updateReward/:id').post(middlewares.checkToken,controller.Reward.updateReward)
    router.route('/getAllReward').get(middlewares.checkToken, controller.Reward.getAllReward)
    router.route('/getSingleReward/:id').get(middlewares.checkToken, controller.Reward.getSingleReward)
    router.route('/deleteReward/:id').delete(middlewares.checkToken, controller.Reward.deleteReward)
    router.route('/projectReward/:id').get(controller.Reward.getProjectReward)

    //reward level routes
    router.route('/rewardLevel').post(middlewares.checkToken,controller.RewardLevel.createRewardLevel)
    router.route('/updateRewardLevel/:id').post(middlewares.checkToken,controller.RewardLevel.updateRewardLevel) 
    router.route('/getRewardLevel').get(middlewares.checkToken, controller.RewardLevel.getRewardLevel)
    router.route('/deleteRewardLevel/:id').delete(middlewares.checkToken, controller.RewardLevel.deleteRewardLevel)

    //project assest
    router.route('/projectAsset/:id').post(controller.ProjectAsset.createProjectAsset)
    router.route('/projectAsset/:id').get(controller.ProjectAsset.getProjectAsset)
    router.route('/deleteProjectAsset/:id').get(middlewares.checkToken,controller.ProjectAsset.deleteProjectAsset)
    router.route('/updateProjectAsset/:id').post(middlewares.checkToken,controller.ProjectAsset.updateProjectAsset)

    //project funding routes 
    router.route('/projectfunding/:id').post(middlewares.checkToken,controller.ProjectFunding.addProjectFunding)
    router.route('/getProjectFunding/:id').get(middlewares.checkToken, controller.ProjectFunding.getProjectFunding)
    // router.route(`/finance`).post(controller.Project.financeProject)
    router.route('/finance/:Userid').get(controller.Project.getUserFinacement)
    router.route('/finance').post(middlewares.checkToken,controller.Project.finaceProject)

    //sendmail
    router.route('/sendmail').post(controller.Campagne.sendRequestMail)

    //stat 
    router.route('/stats/:id').get(controller.Project.stats)

 
    return router
})()