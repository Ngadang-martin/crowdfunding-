const { ProjectFunding } = require('../models')
const { projectFundingSchema } = require('../helpers/validationSchemas')

exports.addProjectFunding = async (req, res) => {
    const { funding_type, goal, bank_number, account_number } = req.body
    const { ProjectId } = req.params

    try {
        const valide = await projectFundingSchema.validateAsync({funding_type, goal, bank_number, account_number})
        await ProjectFunding.create({
            funding_type: valide.funding_type,
            goal: valide.goal,
            bank_number: valide.bank_number,
            account_number: valide.account_number,
            ProjectId: ProjectId,
        })
        return res.json({
            status: 201,
            message: "Resource created succesfully"
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

exports.getProjectFunding = async (req, res) => {
    const { id } = req.params

    try {
        const funding = await ProjectFunding.findOne({ where: { ProjectId: id } })
        return res.json(funding)
    } catch (error) {
        return res.json({
            error: error,
        })
    }
}