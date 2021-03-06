import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import BoardPage from './containers/BoardPage.jsx';
import SingleNotePage from './containers/SingleNotePage.jsx';
import Auth from './modules/Auth.js';

const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [
    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, BoardPage);
        } else {
          callback(null, HomePage);
        }
      }
    },
    {
      path: '/note/:id',
      component: SingleNotePage
    },
    {
      path: '/login',
      component: LoginPage
    },

    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();
        replace('/');
      }
    }
  ]
};

export default routes;
