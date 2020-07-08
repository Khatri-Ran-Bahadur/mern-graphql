const {ApolloServer} =require('apollo-server')
require('dotenv').config();


//Graphql Server
//Types query /Mutation /subscription

const typeDefs=`
	type Query{
		totalPosts:Int!
	}
`


//resolver

const resolvers={
	Query:{
		totalPosts:()=>42 
	}
}


//Graphql Server
const apolloServer=new ApolloServer({
	typeDefs,
	resolvers
})

apolloServer.listen(8000, function() {
	console.log(`server is ready at http://localhost:8000`);
})