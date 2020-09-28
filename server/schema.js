const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    quakes: [Quake]!
    quake(id: ID!): Quake
    me: User
  }

  type Quake {
    id: ID!
    location: String
    magnitude: Float
    when: String
    time: String
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    records: [Quake]!
  }

  type Mutation {
    saveRecord(record: ID!): RecordUpdateResponse!
    deleteRecord(record: ID!): RecordUpdateResponse!
    login(email: String): String # login token
  }

  type RecordUpdateResponse {
  success: Boolean!
  message: String
  records: [Quake]
}
`;

module.exports = typeDefs;
