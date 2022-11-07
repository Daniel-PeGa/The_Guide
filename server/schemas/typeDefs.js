const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Group {
    _id: ID
    name: String
    location: String
    short_description: String
    description: TEXT
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
    mission: TEXT
    users: [User]
}

type SmallGroup {
    _id: ID
    name: String
    location: String
    short_description: String
    description: TEXT
    time: String
    day: String
    users: [User]
}

type Query {
    groups: [Group]
    users: [User]
    churches: [Church]
    smallGroups: [SmallGroup]
}

type Mutation {
    addGroup(name: String!, location: String!, short_description: String!, description: TEXT!, time: String!, day: String!): Group
    addChurch(name: String!, location: String!, denomination: String!, mission:TEXT!, time: String!, day: String!): Church
    addSmallGroup(name: String!, location: String!, short_description: String!, description: TEXT!, time: String!, day: String!): SmallGroup
    updateUser(id: ID!): User
}

`;

module.exports = typeDefs;