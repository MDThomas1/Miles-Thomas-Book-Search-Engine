const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    bookId: Int!
    authors: [String]!
    description: String!
    title: String!
    image: String
    link: String
}

type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
}

type Query {
    me: Profile
}

type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBook(bookId: Int!): User
    removeBook(bookId: Int!): User
}

type Auth {
    token: ID!
    user: User
}
`

module.exports = typeDefs