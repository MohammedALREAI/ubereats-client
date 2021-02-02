import { gql, useQuery, useReactiveVar } from '@apollo/client';
import React from 'react';
import { isLoginVar } from '../Hocks/useApollo';
import { PrivateRoute } from '../Routers/private';
import { PublicRouter } from '../Routers/public';

function App() {

  const isLogin = useReactiveVar(isLoginVar);

  return isLogin ? <PrivateRoute /> : <PublicRouter />;
}

export default App;
