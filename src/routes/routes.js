/**
 * Global file for all routes
 */

import Home from '../pages/home';
import Login from '../pages/login';
import Products from '../pages/products';
import Pricing from '../pages/pricing';
import Resources from '../pages/resources';
import RequestDemo from '../pages/requestDemo';

export const appRoutes = [
  {
    id: 'SOME_UNIQUE_STRING',
    path: '/',
    protected: true, // if true then login required to access the route
    component: Home,
  },
  {
    id: 'ANOTHER_UNIQUE_STRING',
    path: '/login',
    protected: false, // if true then login required to access the route
    component: Login,
  },
  {
    id: 'ANOTHER_UNIQUE_STRING',
    path: '/products',
    protected: false, // if true then login required to access the route
    component: Products,
  },
  {
    id: 'ANOTHER_UNIQUE_STRING',
    path: '/pricing',
    protected: false, // if true then login required to access the route
    component: Pricing,
  },
  {
    id: 'ANOTHER_UNIQUE_STRING',
    path: '/resources',
    protected: false, // if true then login required to access the route
    component: Resources,
  },
  {
    id: 'ANOTHER_UNIQUE_STRING',
    path: '/request-a-demo',
    protected: false, // if true then login required to access the route
    component: RequestDemo,
  },
];
