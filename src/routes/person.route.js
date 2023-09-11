const express = require('express');
const UserController = require('../controllers/person.controller');
const UserSchema = require('../schemas/person.schema');
const UserRouter = express.Router();

const { validateBody } = require('../validators/body.validator');
const { validateParams } = require('../validators/param.validator');

// create a user
UserRouter.post("/", [validateBody(UserSchema.createUser)], UserController.createUser);

// get a user info with user_id
UserRouter.get("/:user_id", [validateParams(UserSchema.userId)], UserController.getUserByUserId);

// update user info
UserRouter.put("/:user_id", [validateParams(UserSchema.userId), validateBody(UserSchema.updateUser)], UserController.updateUser);

// update user info
UserRouter.patch("/:user_id", [validateParams(UserSchema.userId), validateBody(UserSchema.updateUser)], UserController.updateUser);

// delete user
UserRouter.delete("/:user_id", [validateParams(UserSchema.userId)], UserController.deleteUser);

module.exports = UserRouter;