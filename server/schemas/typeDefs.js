const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        posts: [Post]
        friends: [User]
        savedPlaces: [Place]
    }

    type Post {
        _id: ID
        postText: String
        createdAt: String
        username: String
        commentCount: Int
        comments: [Comment]
    }

    type Comment {
        _id: ID
        commentBody: String
        username: String
        createdAt: String
        place_id: String
    }

    type Place {
        placeId: String
        placeName: String
        description: String
        rating: String
        tags: String
        thumbnail_url: String
    }

    input PlaceInput {
        placeId: String
        placeName: String
        description: String
        rating: String
        tags: String
        thumbnail_url: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(_id: ID!): Post
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(postText: String!, comment_id: String!): Post
        addComment(postId: ID!, commentBody: String!): Post
        addFriend(friendId: ID!): User
        savePlace(input: PlaceInput!): User
        removePlace(placeId: String!): User
    }
`;

module.exports = typeDefs;