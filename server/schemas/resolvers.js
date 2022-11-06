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


    }
};
 
module.exports = resolvers;
