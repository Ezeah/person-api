const joi = require("joi");

class UserSchema {
    createUser = joi.object({
        user_id: joi.string()
            .min(24)
            .required(),

        name: joi.string()
            .min(3)
            .max(100)
            .required(),

        email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),

        password: joi.string()
            .min(5)
            .max(100)
            .required(),    
    });

    updateUser = joi.object({
        user_id: joi.string()
            .min(24)
            .required(),

        name: joi.string()
            .min(3)
            .max(100)
            .required(),

        email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),

        password: joi.string()
            .min(5)
            .max(100)
            .required(),    
    });

    userId = joi.object({
        userId: joi.string()
            .min(24)
            .required()
    });

    name = joi.object({
        name: joi.string()
            .min(3)
            .max(100)
            .required(),
    });        

    email = joi.object({
        email: joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required(),
    });

    newPassword = joi.object({
        new_password: joi.string()
            .min(5)
            .max(100)
            .required()
    });
}

module.exports = new UserSchema();