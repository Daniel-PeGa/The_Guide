const { Group, User, Church, SmallGroup } = require('../models');

const resolvers = {
    Query: {
        groups: async () => {
            return await Group.find({}).populate({
                path: 'users',
                populate: 'name'
            });
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
        churches: async () => {
            return await Church.find({}).populate({
                path: 'users',
                populate: 'name'
            };
        },
        smallGroups: async () => {
            return await SmallGroup.find({}).populate({
                path: 'users',
                populate: 'name'
            });
        }
    }
};
 
module.exports = resolvers;
