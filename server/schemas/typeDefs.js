const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Group {
    _id: ID
    groupName: String
    location: String
    short_description: String
    description: String
    time: String
    day: String
    users: [User]
}

type User {
    _id: ID
    username: String
    email: String
    friends: [User]
    churches: [Church]
    smallGroups: [SmallGroup]
    groups: [Group]
}

type Church {
    _id: ID
    churchName: String
    location: String
    denomination: String
    mission: String
    churchId: String
    users: [User]
}

type SmallGroup {
    _id: ID
    smGroupName: String
    location: String
    short_description: String
    description: String
    time: String
    day: String
    users: [User]
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    groups: [Group]
    churches: [Church]
    smallGroups: [SmallGroup]
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
    addGroup(groupName: String!, location: String!, short_description: String!, description: String!, time: String!, day: String!): Group
    addChurch(churchName: String!, location: String!, denomination: String!, mission:String!, churchId: String!, time: String!, day: String!): Church
    addSmallGroup(smGroupName: String!, location: String!, short_description: String!, description: String!, time: String!, day: String!): SmallGroup
    updateUser(id: ID!): User
    updateGroup(groupName: String!, location: String!, short_description: String!, description: String!, time: String!, day: String!): Group
    updateChurch(mission:String!, time: String!, day: String!): Church
    updateSmallGroup(smGroupName: String!, location: String!, short_description: String!, description: String!, time: String!, day: String!): SmallGroup
}

`;

module.exports = typeDefs;