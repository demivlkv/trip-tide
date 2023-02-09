import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $location: String, $description: String) {
    addUser(username: $username, email: $email, password: $password, location: $location, description: $description) {
      token
      user {
        _id
        username
        email
        location
        description
        avatar
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($input: UpdateUserInput!, $id: ID!) {
    updateUser(input: $input, userId: $id) {
      token
      user {
        _id
        avatar
        location
        description
      }
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
        avatar
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($id: ID!) {
    removeFriend(friendId: $id) {
      _id
      username
      friendCount
      friends {
        _id
        username
        avatar
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postTitle: String!, $postText: String!) {
    addPost(postTitle: $postTitle, postText: $postText) {
      _id
      postTitle
      postText
      createdAt
      username
      commentCount
      comments {
        _id
      }
      author {
        _id
        avatar
      }
      likeCount
      likes {
        _id
        username
        createdAt
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
        author {
          _id
          avatar
        }
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      _id
      likes {
        _id
        username
      }
      likeCount
    }
  }
`;