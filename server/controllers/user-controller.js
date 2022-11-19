const { User } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    // find single user by ID or username
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id: params.id}, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: 'Cannot find user'});
        }
        res.json(foundUser);
    },
    // new user
    async createUser({ body }, res) {
        const user = await User.create(body);
        if (!user) {
            return res.status(400).json({ message: 'somethings wrong here'});
        }
        const token = signToken(user);
        res.json({ token, user });
    },
    // login and send to client/src/components.LoginForm.js
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
        if (!user) {
            return res.status(400).json({ message: 'user couldnt be found'});
        }
        // password check
        const correctPw = await user.isCorrectPassword(body.password);
        if (!correctPw) {
            return res.status(400).json({ message: 'passwords wrong'});
        }
        const token = signToken(user);
        res.json({ token, user });
    },
};