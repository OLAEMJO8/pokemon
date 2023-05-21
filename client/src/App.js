import React from "react";
import "./App.css";
import { Route, Switch,BrowserRouter } from "react-router-dom";
import Form from "./views/create-form/create";
import Detail from "./views/detail/detail";
import Home from "./views/home/home";
import LandingPage from "./views/landing/landing";

function App() {
  return (
   <BrowserRouter>
   <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/pokemon/:id" component={Detail} />
        <Route exact path="/post" component={Form} />      
      </Switch>
    </div>
   </BrowserRouter>
  );
}

export default App;
