import * as React from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import { Header } from '../components/header';
import { useRole } from '../Hocks/useRole';
import {clientRoute,
restaurantRoutes,
driverRoutes,
commonRoutes}from'./constans'

import {NotFound} from '../pages/404'
import { UserRole } from '../generated/graphql';



export const PrivateRoute = () => {
  const role =useRole()

  return(
    <Router>
      <Header/>
      <Switch>
        {role === UserRole.Client && clientRoute}
        {role === UserRole.Owner &&restaurantRoutes}
        {role === UserRole.Delivery &&driverRoutes}
        {commonRoutes}
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )



};
