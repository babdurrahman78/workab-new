import React from 'react';
import 'animate.css'
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { AdminPrivateRoute } from './routes/admin/AdminRoutes';
import { LandingLayout } from './views/layouts/landing/LandingLayout';
import { Login } from './views/pages/auth/login/Login';
import { UserPrivateRoute } from './routes/user/UserRoutes';
import { Error403 } from './views/pages/error/error403/Error403';
import { Error404 } from './views/pages/error/error404/Error404';

axios.defaults.baseURL = "http://decoy.sakataguna-dev.com/";
axios.defaults.headers.post['Content-Type'] = 'appilaction/json';
axios.defaults.headers.post['Accept'] = 'appilaction/json';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config: any) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ LandingLayout }/>
        
        <Route path="/403" component={ Error403 }/>
        <Route path="/404" component={ Error404 }/>
        
        <Route path="/login">
          { localStorage.getItem("token") ? <Redirect to="/"/> : <Login /> } 
        </Route>

        <AdminPrivateRoute path="/admin" name="Admin"/>
        <UserPrivateRoute path="/user" name="User"/>
      </Switch>
    </Router>
  );
}

export default App;
