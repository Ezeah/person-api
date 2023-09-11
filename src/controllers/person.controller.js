const UserService = require('../services/person.service');

class UserController {
    getStatus = (async (req, res) => {
        res.status(200).send({ message: 'Resource fetched successfully', succcess: true });
    });

    // create a user
    createUser = (async (req, res) => {
        const data = await UserService.createUser(req.body);

        // return response
        res.status(data.status)
            .send({ success: data.success, message: data.message, data: data.data })
    });

    // get user By userId
    getUserByUserId = (async (req, res) => {
        const data = await UserService.getUserByUserId(req.params.userId);
        if (data) {
            res.status(200)
                .send({ message: 'Resource fetched successfully', success: true, data });
        } else {
            res.status(404)
                .send({ message: "User not found", success: false })
        }
    });

    // update user
    updateUser = (async (req, res) => {
        const data = await UserService.updateUser(req.params.userId, req.body);
        if (data) {
            res.status(200)
                .send({ message: 'Resource updated successfully', success: true, data });
        } else {
            res.status(404)
                .send({ message: "User not found", success: false })
        }
    });

    // delete user
    deleteUser = (async (req, res) => {
        const data = await UserService.deleteUser(req.params.userId, req.body);
        if (data) {
            res.status(200)
                .send({ message: 'Resource deleted successfully', success: true, data });
        } else {
            res.status(404)
                .send({ message: "User not found", success: false })
        }
    });


}

module.exports = new UserController();