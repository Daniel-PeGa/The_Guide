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
}

type User {
    _id: ID
    name: String
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
}

type SmallGroup {
    _id: ID
    name: String
    location: String
    short_description: String
    description: TEXT
    time: String
    day: String
}

type Query {
    groups: [Group]
    churches: [Church]
    smallGroups: [SmallGroup]
}

`;

module.exports = typeDefs;