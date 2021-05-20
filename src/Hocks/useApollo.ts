import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  makeVar,
  split
} from '@apollo/client';
import { setContext } from "@apollo/client/link/context";
export const isLoginVar = makeVar<boolean>(false);
export const authTokenVar = makeVar<string|null>(null);
  import {WebSocketLink} from'@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = createHttpLink({
  uri: process.env.SERVER_URL
});

const authLink=setContext((_,{headers})=>{
  return{
    headers:{
      ...headers,
      "x-jwt":authTokenVar() || ""
    }
  }

});



  const wsLink=new WebSocketLink({
    url:process.env.WSLINK,
    options:{
      reconnect:true,
      "x-jwt":authTokenVar() || ""
    }
  })



  const splitLink=split(({query})=>{
const definition=getMainDefinition(query);
return  (definition.kind==='OperationDefinition' && definition.operation==="subscription")

    
  },wsLink,authLink.concat(httpLink))
  const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
        isLogin: {
          read() {
            return false;
          }
        },
        token:{
          read(){
            return ''

          }
        }
      }
    }
  }
});


export const client = new ApolloClient({
  cache,
  link:splitLink
});
