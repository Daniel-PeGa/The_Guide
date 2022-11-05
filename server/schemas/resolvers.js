const { Group, User, Church, SmallGroup } = require('../models');

const resolvers = {
    Query: {
        groups: async () => {
            return await Group.find({}).ppopulate({
                path: '',
                ppopulate: ''
            });
        },
        users: async () => {
            return await User.find({}).ppopulate({
                path: '',
                ppopulate: ''
            });
        },
        churches: async () => {
            return await Church.find({}).ppopulate({
                path: '',
                ppopulate: ''
            });
        },
        smallGroups: async () => {
            return await SmallGroup.find({}).ppopulate({
                path: '',
                ppopulate: ''
            });
        }
    }
};

module.exports = resolvers;
