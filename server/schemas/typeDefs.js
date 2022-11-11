const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Group {
    _id: ID
    name: String
    location: String
    short_description: String
    description: String
    time: String
    day: String
    users: [User]
}

type User {
    _id: ID
    name: String
    email: String
    churches: [Church]
    smallGroups: [SmallGroup]
    groups: [Group]
}

type Church {
    _id: ID
    name: String
    location: String
    denomination: String
    mission: String
    users: [User]
}

type SmallGroup {
    _id: ID
    ussername: String
    location: String
    short_description: String
    description: String
    time: String
    day: String
    users: [User]
}

type Query {
    me: User
    groups: [Group]
    users: [User]
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
    addGroup(name: String!, location: String!, short_description: String!, description: String!, time: String!, day: String!): Group
    addChurch(name: String!, location: String!, denomination: String!, mission:String!, time: String!, day: String!): Church
    addSmallGroup(name: String!, location: String!, short_description: String!, description: String!, time: String!, day: String!): SmallGroup
    updateUser(id: ID!): User
    updateGroup(name: String!, location: String!, short_description: String!, description: String!, time: String!, day: String!): Group
    updateChurch(mission:String!, time: String!, day: String!): Church
    updateSmallGroup(name: String!, location: String!, short_description: String!, description: String!, time: String!, day: String!): SmallGroup
}

`;

module.exports = typeDefs;