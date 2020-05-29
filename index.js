import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './data/schema';
import resolver from './data/resolver';
const app = express();

app.get('/', (req,res) => {
    res.send('Grapgql is amazing');
})

const root = resolver;

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(8080, () => console.log('Running server on port 8080'))