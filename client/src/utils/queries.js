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
                user {
                    _id
                    avatar
                }
            }
            user {
                _id
                avatar
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
              avatar {
                _id
                avatar
              }
            }
            likeCount
            likes {
                _id
                username
            }
            user {
                _id
                avatar
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
            avatar
            friendCount
            friends {
                _id
                username
                location
                description
                avatar
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
                    user {
                        _id
                        avatar
                    }
                }
                likeCount
                likes {
                    _id
                    username
                }
                user {
                    _id
                    avatar
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
            avatar
            friendCount
            friends {
                _id
                username
                location
                description
                avatar
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
                    user {
                        _id
                        avatar
                    }
                }
                likeCount
                likes{
                    _id
                    createdAt
                    username
                }
                user {
                    _id
                    avatar
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
            avatar
            friendCount
            friends {
                _id
                username
                avatar
            }
        }
    }
`;