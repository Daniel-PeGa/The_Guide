const db = require('../config/connection');
const { Church, Group, SmallGroup, User } = require('../models');

const churchData = require('./churchData.json');
const groupData = require('../groupData.json');
const smallGroupsData = require('../smallGroupsData.json');
const userData = require('../userData.json');

db.once('open', async () => {
    await Church.deleteMany({});
    await Group.deleteMany({});
    await SmallGroup.deleteMany({});
    await User.deleteMany({});

    const churches = await Church.insertMany(churchData);
    const groups = await Group.insertMany(groupData);
    const smallGroups = await SmallGroup.insertMany(smallGroupsData);
    const users = await User.insertMany(userData);

    for () {

    }

    console.log('all done!');
    process.exit(0);
});