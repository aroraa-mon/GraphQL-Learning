import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Friend {
        id: ID
        firstname: String
        lastname: String
        gender: Gender
        language: String
        age: Int
        emails: String
        contacts: [Contact]
    }

    type Contact {
        firstname: String
        lastname: String
    }
    
    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getFriend(id: ID): Friend
        getOneFriend(id: ID!): Friend
    }

    input FriendInput {
        id: ID
        firstname: String!
        lastname: String
        gender: Gender
        language: String
        age: Int
        emails: String
        contacts: [ContactInput]
    }

    input ContactInput {
        firstname: String
        lastname: String
    }

    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): String
    }
`)

export default schema