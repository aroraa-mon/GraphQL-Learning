import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req,res) => {
    res.send('Grapgql is amazing');
})

class Friend {
    constructor(id, {firstname, lastname, gender, language}){
        this.id = id;
        this.firstname = firstname,
        this.lastname = lastname,
        this.gender = gender,
        this.language = language
    }
}

const FriendDb = {};

const root = { 
    friend: () => {
        return {
            "id": 114,
            "firstname": "Rahul",
            "lastname": "Gupta",
            "gender": "Male",
            "language": "Hindi",
            "emails": "abc.com"
        }
    },
    createFriend: ({input})  =>  {
        let id = "a1b2b3";
        FriendDb[id] = input;
        return new Friend(id, input);
    }

};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port 8080'))