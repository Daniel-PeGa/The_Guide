const { Group, User, Church, SmallGroup } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth')

const resolvers = {
    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                return userData;
            }
            throw new AuthenticationError('Not logged in')
        }

        groups: async () => {
            return await Group.find({}).populate({
                path: 'users',
                populate: 'username'
            });
        },
        group: async (parent, args) => {
            return await Group.findById(args.id).populate('users');
        },

        users: async () => {
            return await User.find({}).populate({
                path: 'churches',
                populate: 'churchName'
            }).populate({
                path: 'smallGroups',
                populate: 'smGroupName'
            }).populate({
                path: 'groups',
                populate: 'groupName'
            });
        },
        user: async (parent, args) => {
            return await User.findById(args.id).populate('churches', 'smallGroups', 'groups');
        },

        churches: async () => {
            return await Church.find({}).populate({
                path: 'users',
                populate: 'username'
            });
        },
        church: async (parent, args) => {
            return await Church.findById(args.id).populate('users');
        },

        smallGroups: async () => {
            return await SmallGroup.find({}).populate({
                path: 'users',
                populate: 'username'
            })
        },
        smallGroup: async (paarent, args) => {
            return await SmallGroup.findById(args.id).populate('users');
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('theres no user with this email')
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('incorrect password')
            }
            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        addGroup: async (parent, { groupName, location, short_description, description, time, day }) => {
            return await Group.create({ groupName, location, short_description, description, time, day });
        },
        addChurch: async (parent, { churchName, location, denomination, mission, time, day }) => {
            return await Church.create({ churchName, location, denomination, mission, churchId, time, day });
        },
        addSmallGroup: async (parent, { smGroupName, location, short_description, description, time, day }) => {
            return await SmallGroup.create({ smGroupName, location, short_description, description, time, day });
        },
        updateUser: async (parent, { id }) => {
            return await findOneAndUpdate(
                { _id: id }

                { new: true }
            );
        },
        updateGroup: async (parent, { groupName, location, short_description, description, time, day }) => {
            // I Dont even knkow if this is right, gotta check back!
        },
        updateChurch: async (parent, { mission, time, day }) => {
            // I Dont even knkow if this is right, gotta check back!
        },
        updateSmallGroup: async (parent, { smGroupName, location, short_description, description, time, day }) => {
            // I Dont even knkow if this is right, gotta check back!
        }
    }
};
 
module.exports = resolvers;
