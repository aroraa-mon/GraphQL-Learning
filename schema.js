import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstname: String
        lastname: String
        gender: String
        language: String
        emails: String
    }
    
    type Query {
        getFriend(id: ID): Friend
    }

    input FriendInput {
        id: ID
        firstname: String!
        lastname: String!
        gender: String!
        language: String!
        emails: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
    }
`)

export default schema