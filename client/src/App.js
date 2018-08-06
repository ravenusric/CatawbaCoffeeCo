import React from "react";
// Here, we used teh 'as' keyword to rename BrowserRouter, because we didn't want to use it with that name. We renamed it Router. We got BrowserRouter from react-router-dom. We're basically saying, 'import BrowserRouter as Router and also Route. So '<Router>' down below just IS 'Router' here in import. THis is just a style thing. You can rename your named imports using the keyword 'as'.
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTab from "./components/NavTab";
import Home from "./components/containers/Home/Home";
import About from "./components/containers/About/About";
import Blog from "./components/containers/Blog/Blog";
import Contact from "./components/containers/Contact/Contact";
import Events from "./components/containers/Events/Events";
import Form from "./components/containers/Form/Form";
import Menu from "./components/containers/Menu/Menu";


const App = () => (

  <Router>
    <div>
      <NavTab />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/form" component={Form} />
      <Route path="/menu" component={Menu} />
    </div>
  </Router>
);

export default App;

