import { gql } from '@apollo/client';

export const QUERY_POSTS = gql`
    query posts($username: String) {
        posts(username: $username) {
            _id
            postTitle
            postText
            createdAt
            username
            commentCount
            comments {
                _id
                createdAt
                username
                commentBody
            }
            likeCount
            likes {
                _id
                username
            }
        }
    }
`;

export const QUERY_POST = gql`
    query post($id: ID!) {
        post(_id: $id) {
            _id
            postTitle
            postText
            createdAt
            username
            commentCount
            comments {
              _id
              createdAt
              username
              commentBody
            }
            likeCount
            likes {
                _id
                username
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            location
            description
            friendCount
            friends {
                _id
                username
                location
                description
            }
            posts {
                _id
                postTitle
                postText
                createdAt
                commentCount
                comments {
                    _id
                    createdAt
                    commentBody
                    username
                }
                likeCount
                likes {
                    _id
                    username
                }
            }
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            location
            description
            friendCount
            friends {
                _id
                username
                location
                description
            }
            posts {
                _id
                postTitle
                postText
                createdAt
                commentCount
                comments {
                    _id
                    createdAt
                    commentBody
                    username
                }
                likeCount
                likes{
                    _id
                    createdAt
                    username
                }
            }
        }
    }
`;

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            email
            location
            description
            friendCount
            friends {
                _id
                username
            }
        }
    }
`;