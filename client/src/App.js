import React from "react";
// Here, we used teh 'as' keyword to rename BrowserRouter, because we didn't want to use it with that name. We renamed it Router. We got BrowserRouter from react-router-dom. We're basically saying, 'import BrowserRouter as Router and also Route. So '<Router>' down below just IS 'Router' here in import. THis is just a style thing. You can rename your named imports using the keyword 'as'.
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTab from "./components/NavTabs/NavTab";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Blog from "./containers/Blog/Blog";
import Submissions from "./containers/Submissions/Submissions";
import Events from "./containers/Events/Events";
import Menu from "./containers/Menu/Menu";

const App = () => (

  <Router>
    <div>
      <NavTab />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Submissions} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/menu" component={Menu} />
    </div>
  </Router>
);

export default App;

