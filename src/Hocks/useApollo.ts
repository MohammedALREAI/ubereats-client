import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  makeVar
} from '@apollo/client';
export const isLoginVar = makeVar<boolean>(false);
export const authTokenVar = makeVar<string|null>(null);


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

// url is the
const link = createHttpLink({
  uri: process.env.SERVER_URL
});

export const client = new ApolloClient({
  cache,
  link
});
