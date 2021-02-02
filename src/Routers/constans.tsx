import { NotFound } from '../pages/404';
import { Restaurants } from '../pages/client/restaurants';
import { Search } from '../pages/client/search';
import { Category } from '../pages/client/category';
import { ConfirmEmail } from '../pages/user/confirm-email';
import { EditProfile } from '../pages/user/edit-profile';
import { Restaurant } from '../pages/client/restaurant';
import { MyRestaurants } from '../pages/owner/my-restaurants';
import { MyRestaurant } from '../pages/owner/my-restaurant';
import { AddRestaurants } from '../pages/owner/add-restaurants';
import { AddDish } from '../pages/owner/add-dish';
import { Order } from '../pages/order';
import { Dashboard } from '../pages/driver/dashboard';
import { Route, RouteProps } from 'react-router-dom';



interface ImyRoute extends RouteProps{
}
const allClientRoutes:ImyRoute[] = [
  {
    path: '/',
    component:()=> <Restaurant/>
  },
  {
    path: '/search',
    component: ()=><Search />
  },
  {
    path: '/category/:slug',
    component: ()=><Category />
  },
  {
    path: '/restaurants/:id',
    component: ()=><Restaurant />
  }
];

const allCommonRoutes:ImyRoute[] = [
  { path: '/confirm', component:()=> <ConfirmEmail /> },
  { path: '/edit-profile', component:()=> <EditProfile /> },
  { path: '/orders/:id', component:()=> <Order /> }
];

const allRestaurantRoutes:ImyRoute[] = [
  { path: '/', component:()=> <MyRestaurants /> },
  { path: '/add-restaurant', component:()=> <AddRestaurants /> },
  { path: '/restaurants/:id', component:()=> <MyRestaurant /> },
  { path: '/restaurants/:restaurantId/add-dish', component:()=> <AddDish /> }
];

const allDriverRoutes:ImyRoute[]  = [{ path: '/', component: ()=><Dashboard /> }];

 export const clientRoute = allClientRoutes.map((route,index) => (
  <Route exact  path={route.path} key={`index-${route}`} component={route.component}/>));

 export const restaurantRoutes = allRestaurantRoutes.map((route,index) => (
  <Route exact  path={route.path} key={`${index}-${route}`} component={route.component}/>));

 export const driverRoutes = allDriverRoutes.map((route,index) => (
  <Route exact  path={route.path} key={`${index}-${route}`} component={route.component}/>));

 export const commonRoutes = allCommonRoutes.map((route,index) => (
  <Route exact  path={route.path} key={`${index}-${route}`} component={route.component}/>));
