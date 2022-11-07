const { Group, User, Church, SmallGroup } = require('../models');

const resolvers = {
    Query: {

        groups: async () => {
            return await Group.find({}).populate({
                path: 'users',
                populate: 'name'
            });
        },
        group: async (parent, args) => {
            return await Group.findById(args.id).populate('users');
        },

        users: async () => {
            return await User.find({}).populate({
                path: 'churches',
                populate: 'name'
            }).populate({
                path: 'smallGroups',
                populate: 'name'
            }).populate({
                path: 'groups',
                populate: 'name'
            });
        },
        user: async (parent, args) => {
            return await User.findById(args.id).populate('churches', 'smallGroups', 'groups');
        },

        churches: async () => {
            return await Church.find({}).populate({
                path: 'users',
                populate: 'name'
            });
        },
        church: async (parent, args) => {
            return await Church.findById(args.id).populate('users');
        },

        smallGroups: async () => {
            return await SmallGroup.find({}).populate({
                path: 'users',
                populate: 'name'
            })
        },
        smallGroup: async (paarent, args) => {
            return await SmallGroup.findById(args.id).populate('users');
        }
    },

    Mutation: {
        addGroup: async (parent, { name, location, short_description, description, time, day }) => {
            return await Group.create({ name, location, short_description, description, time, day });
        },
        addChurch: async (parent, { name, location, denomination, mission, time, day }) => {
            return await Church.create({ name, location, denomination, mission, time, day });
        },
        addSmallGroup: async (parent, { name, location, short_description, description, time, day }) => {
            return await SmallGroup.create({ name, location, short_description, description, time, day });
        },
        updateUser: async (parent, { id }) => {
            return await findOneAndUpdate(
                { _id: id }

                { new: true }
            );
        }
    }
};
 
module.exports = resolvers;
