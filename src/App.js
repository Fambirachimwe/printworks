import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Home } from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import AddJob from "./Components/AddJob/AddJob";


const App = () => {

  const [toggle, setToggle] = useState(false);




  return (
    <div className="App" >

      <Router>

        <Switch>

          


          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/">

            {
              localStorage.getItem("token") ? (<Home toggle={toggle} setToggle={setToggle} />) : (<Redirect to="/login" />)
            }

          </Route>

         


        </Switch>



      </Router>

    </div>
  );
}

export default App;
