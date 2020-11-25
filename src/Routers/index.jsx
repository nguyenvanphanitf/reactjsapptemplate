import React from 'react';

const Sign = React.lazy(() => import('../view/Sign'));
const Logout = React.lazy(() => import('../view/Logout'));
const Page404 = React.lazy(() => import('../view/Page404'));
const Register = React.lazy(() => import('../view/Register'));

const Home = React.lazy(() => import('../view/Home'));


const Routes = [

    { path: '/login', name: 'Sign', exact: true, layout: Sign, },
    { path: '/logout', name: 'Logout', exact: true, layout: Logout },
    { path: '/register', name: 'Register', exact: true, layout: Register },
    
    { path: '/', name: 'Home', exact: true, layout: Home, component: Home },
    { path: '*', name: 'Page404',  layout: Page404 },
    
];

export default Routes;
