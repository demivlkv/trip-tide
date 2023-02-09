const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        location: String
        description: String
        avatar: String!
        friendCount: Int
        posts: [Post]
        friends: [User]
        savedPlaces: [Place]
    }

    type Post {
        _id: ID!
        postTitle: String
        postText: String!
        createdAt: String
        username: String
        comments: [Comment]
        commentCount: Int
        likes: [Like]!
        likeCount: Int!
        author: [User]!
    }

    type Comment {
        _id: ID!
        commentBody: String!
        username: String!
        createdAt: String
        place_id: String
        author: [User]!
    }

    type Like {
        _id: ID!
        username: String!
        createdAt: String
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

    input UpdateUserInput {
        username: String
        email: String
        password: String
        location: String
        avatar: String
        description: String
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
        addUser(username: String!, email: String!, password: String!, location: String, description: String): Auth
        updateUser(input: UpdateUserInput!, userId: ID!): Auth
        addPost(postTitle: String!, postText: String!): Post!
        deletePost(postId: ID!): String!
        addComment(postId: ID!, commentBody: String!): Post!
        deleteComment(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!): Post!
        addFriend(friendId: ID!): User!
        removeFriend(friendId: ID!): User!
        savePlace(input: PlaceInput!): User
        removePlace(placeId: String!): User
    }
`;

module.exports = typeDefs;