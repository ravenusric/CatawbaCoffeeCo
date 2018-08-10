import React from "react";
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

