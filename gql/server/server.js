require("dotenv").config();
const express = require('express');
const {ApolloServer} =require('apollo-server-express')
const {fileLoader, mergeTypes,mergeResolvers}=require('merge-graphql-schemas')
const http =require('http');
const path=require('path');

const app = express();

//Graphql Server
//Types query /Mutation /subscription

const typeDefs= mergeTypes(fileLoader(path.join(__dirname,'./typeDefs')));

//resolver
const resolvers= mergeResolvers(fileLoader(path.join(__dirname,'./resolvers')));




//Graphql Server
const apolloServer=new ApolloServer({
	typeDefs,
	resolvers
})

//Apply Middleware method connects ApolloServer to a specific http framework ie. express

apolloServer.applyMiddleware({
	app
})

const httpserver=http.createServer(app)

app.get('/rest', function(req, res) {
	res.json({
		data: 'you hit rest endpoint'
	})
})

app.listen(8000, function() {
	console.log(`server is ready at http://localhost:8000`);
	console.log(`grapphql server is ready at http://localhost:8000 ${apolloServer.graphqlPath}`);
})