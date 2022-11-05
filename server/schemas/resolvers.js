const { Group, User, Church, SmallGroup } = require('../models');

const resolvers = {
    Query: {
        groups: async () => {
            return await Group.find({});
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
            return await Church.find({});
        },
        smallGroups: async () => {
            return await SmallGroup.find({});
        }
    }
};
 
module.exports = resolvers;
