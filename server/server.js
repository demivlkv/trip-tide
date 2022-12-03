const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');

const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const PORT = process.env.PORT || 3001;

const app = express();

// create a new Apollo server & pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

// integrate Apollo server with the Express application as middleware
server.start().then(() => server.applyMiddleware({ app }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// import mongoose connection
db.once('open', () => {
  app.listen(PORT, () => console.log(`🌎 Now listening on port ${PORT}`));
});