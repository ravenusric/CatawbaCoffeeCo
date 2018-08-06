import React from "react";
// Here, we used teh 'as' keyword to rename BrowserRouter, because we didn't want to use it with that name. We renamed it Router. We got BrowserRouter from react-router-dom. We're basically saying, 'import BrowserRouter as Router and also Route. So '<Router>' down below just IS 'Router' here in import. THis is just a style thing. You can rename your named imports using the keyword 'as'.
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/containers/Home";
import About from "./components/containers/About";
import Blog from "./components/containers/Blog";
import Contact from "./components/containers/Contact";
import Contact from "./components/containers/Events";
import Contact from "./components/containers/Form";
import Contact from "./components/containers/Menu";


const App = () => (

  <Router>
    <div>
      <NavTabs />
      
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      {/* The reason contact has no 'exact' is because we want to render the link inside it that says 'learn more' which will take us to '/contact/learn'; if we didn't do that, it would look for exclusively '/contact'. */}
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default App;

