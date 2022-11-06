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

`;

module.exports = typeDefs;