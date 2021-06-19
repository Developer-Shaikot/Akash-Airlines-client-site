import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Admin from './components/Admin/Admin';
import Testimonials from './components/Testimonials/Testimonials';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Deals from './components/Deals/Deals';



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
       <Route exact path="/services">
        
         <Project></Project>
       </Route>
       <PrivateRoute exact path="/order/:id">
        <Order></Order>
       </PrivateRoute>
       <Route path="/deals">
      
          <Deals></Deals>
        </Route>
       <Route exact path="/reviews">
      
          <Testimonials></Testimonials>
       </Route>
       <Route exact path="/login">
        <Login></Login>
       </Route>
     </Switch>
   </Router>
 </UserContext.Provider>
  );
}

export default App;
