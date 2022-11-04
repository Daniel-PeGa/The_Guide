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
    group: [Group]
    church: [Church]
    smallGroup: [SmallGroup]
}

`;

module.exports = typeDefs;