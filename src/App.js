import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import NotFound from './Components/NotFoundPage/NotFound';


const App = () => {

  

  return (
    <div className="App" >

      <Router>

        <Switch>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/">
            {
              localStorage.getItem("token") ? 
              (<Home />) :
              (<Redirect to="/login" />)
            }
          </Route>

          <Route exact path="*" >
              <NotFound />
          </Route>

        </Switch>



      </Router>

    </div>
  );
}

export default App;
