import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/UserDashboard/Order/Order';
import Service from './components/UserDashboard/Service/Service';
import Review from './components/UserDashboard/Review/Review';
import NotFound from './components/NotFound/NotFound';
import AdminService from './components/AdminDashboard/AdminService/AdminService';
import AddService from './components/AdminDashboard/AddService/AddService';
import MakeAdmin from './components/AdminDashboard/MakeAdmin/MakeAdmin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/UserDashboard">
          <Order></Order>
        </PrivateRoute>
        {/* <Route path="/design">
          <Order></Order>
        </Route> */}
        <PrivateRoute path="/service">
          <Service></Service>
        </PrivateRoute>
        <PrivateRoute path="/review">
          <Review></Review>
        </PrivateRoute>
        <Route path="/adminDashboard">
          <AdminService></AdminService>
        </Route>
        <Route path="/adminAdd">
          <AddService></AddService>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
