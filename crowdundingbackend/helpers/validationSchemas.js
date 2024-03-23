const joi = require('@hapi/joi')

const authSchema = joi.object({
   username: joi.string()
      .alphanum()
      .min(5)
      .max(30)
      .required()
      .messages({
         "string.base": `"username" should be a type of 'text'`,
         "string.empty": `"username" cannot be an empty field`,
         "string.min": `"username" Should have at least 5 charecters`,
         "any.required": `"username" is a required.`,
      }),
   password: joi.string()
      .min(8)
      .max(30)
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required()
      .messages({
         "string.empty": `"Password" cannot be an empty field`,
         "string.min": `"Password" Should have at least 8 charecters`,
         "string.pattern.base": ' Your {{#label}}  fails to match the required pattern: Only Letters and Numbers are allowed',
         "any.required":'{{#label}} is a required.',
      })

})

const projectBasicsSchema = joi.object({
   title: joi.string()
      .min(8)
      .max(200)
      .required()
      .messages({
         "string.empty": 'The Project {{#label}}  Cannot be empty',
         "string.min": '{{#label}} Should have at least 8 charecters',
         "any.required":'{{#label}} is a required.',
      }),
   image: joi.string()
      .required()
      .messages({

         "string.empty": 'The  {{#label}} image field  cannot be empty',
         "any.required":'{{#label}} is a required.',
      }),
   location: joi.string().required(),
   history: joi.string()
      .min(50)
      .max(1000)
      .required()
      .messages({
         "string.empty": ' {{#label}}  Cannot be empty',
         "string.min": '{{#label}} Should have at least 200 charecters',
         "any.required":'{{#label}} is a required.',
      }),
   description: joi.string()
      .min(50)
      .max(150)
      .required()
      .messages({
         "string.empty": ' {{#label}}  Cannot be empty',
         "string.min": '{{#label}} Should have at least 5 charecters',
         "any.required":'{{#label}} is a required.',
      }),
   tag: joi.string().min(5)
      .max(200)
      .required()
      .messages({
         "string.empty": ' {{#label}}  Cannot be empty',
         "string.min": '{{#label}} Should have at least 5 charecters',
         "any.required":'{{#label}} is a required.',
      }),
   duration: joi.number()
      .required()
      .messages({
         "string.empty": ' {{#label}}  Cannot be empty',
         "any.required":'{{#label}} is a required.',
      }),
  
   video: joi.string().min(5)
      .max(100)
      .required()
      .messages({
         "string.empty": ' {{#label}}  Cannot be empty',
         "string.min": '{{#label}} Should have at least 30 charecters',
         "any.required":'{{#label}} is a required.',
      }),
      UserId: joi.number().required(), CategoryId: joi.number().required(),  
})

const projectRewardSchema = joi.object({
   title: joi.string()
   .min(10)
   .max(100)
   .required()
   .messages({
      "string.empty": 'The Reward {{#label}}  Cannot be empty',
      "string.min": '{{#label}} Should have at least 10 charecters',
      "any.required":'{{#label}} is a required.',
   }),
   price: joi.number()
   .required(),
   retail_price: joi.number()
   .required(),
   item: joi.string()
   .required()
   .messages({
      "string.empty": ' {{#label}}  Cannot be empty',
      "any.required":'{{#label}} is a required.',
   }),
   image:joi.string().required(),
   description: joi.string()
   .min(30)
   .max(150)
   .required()
   .messages({
      "string.empty": ' {{#label}}  Cannot be empty',
      "string.min": '{{#label}} Should have at least 30 charecters',
      "any.required":'{{#label}} is a required.',
   }),
   quantity: joi.number()
   .required()
   .messages({
      "string.empty": ' {{#label}}  Cannot be empty',
      "any.required":'{{#label}} is a required.',
   }),
   send_date: joi.date()
      .min("now")
      .message('"date" cannot be earlier than today')
      .required(),
})

const projectContentSchema = joi.object({
   description: joi.string()
   .min(30)
   .required()
    .messages({
      "string.min": '{{#label}} should be at least 25 charecters',
      "string.empty" : ' {{#label}}  Cannot be empty',
      "any.required":'{{#label}} is a required.',
   }),
    asset_name: joi.string()
   .min(8)
   .max(60)
   .required()
   .messages({
      "string.min": '{{#label}} should be at least 25 charecters',
      "string.empty": ' {{#label}}  Cannot be empty',
      "any.required":'{{#label}} is a required.',
   }),
   asset: joi.array().required()
})

const projectTeamSchema = joi.object({
   fistname: 
      joi.string()
      .required(), 
   lastname: 
      joi.string()
      .required(),
   phone_number: 
      joi.number()
      .required(),
   dob: 
      joi.date()
      .required(),
   country:
      joi.string()
      .required(),
   email:
      joi.string()
      .email(), 
   support_email: 
      joi.string()
      .email(), 
   avatar: 
      joi.string()
      .required(),
   address:
      joi.string()
      .required(), 
   bank_number:
      joi.string()
      .required(), 
   biography: 
      joi.string()
      .required(),
})

const projectFundingSchema = joi.object({
   funding_type: 
      joi.string().required(), 
   goal: 
      joi.number().required(), 
   bank_number: 
      joi.string().required(), 
   account_number: 
      joi.string().required()
})

module.exports = {
   authSchema,
   projectBasicsSchema,
   projectRewardSchema,
   projectContentSchema,
   projectTeamSchema,
   projectFundingSchema,
}