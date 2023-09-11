const Person = require('../models/person.model');

class UserService {

    // create a new user
    createUser = (async (user) => {
        
        let userCheck = await user.find({ 'user_id': user.user_id });
        if (userCheck.lenght > 0) {
            return { status: 409, message: "User already exists", success: false, data: {} }
        } else {
            let createdUser = await user.create(user);
            return { status: 201, message: "User created successfully", success: true, data: createdUser };
        }
    });

    // get user by userId
    getUserByUserId = (async (userId) => {
        return await User.findOne({ 'user_id': userId, 'deleted': false })
            .select('-__v ');
    });

    //update a user using the userId
    updateUser = (async (userId, update) => {
        return await User.findOneAndUpdate({ '_id': userId, 'deleted': false }, update, { new: true })
            .select('-__v ');
    });

    //delete a user using the userId
    deleteUser = (async (userId) => {
        return await User.findOneAndDelete({ '_id': userId, 'deleted': false }, { 'deleted': true }, { new: true })
            .select('-__v ');
    });
}

module.exports = new UserService();
