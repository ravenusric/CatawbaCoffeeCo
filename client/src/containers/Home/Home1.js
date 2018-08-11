import React from "react";
import "./Home.css"

const styles = {
  divStyle: {
    background: "green",
    justifyContent: "flex-end",
  
  }
};

const Home = () => (
  // <div className="Homepage">
  <div className="wrapper">
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Catawba Coffee Co</h1>
        <p className="text-center">Where Friendship Is Just A Cup Away</p>
        <hr className="text-center" />
      </div>
    </div>


    <div className="footer">
      <div className="row">
      <div className="col-2"></div>  {/* Spacer*/}

        <div id="addr"className="col-8">
          <p>Address: 117 N Main St, Mt Holly, NC 28120</p>
          <p>
            Hours: Sunday Closed Monday 7AM–8PM Tuesday 7AM–8PM Wednesday 7AM–8PM
            Thursday 7AM–8PM Friday 7AM–9PM Saturday 8AM–8PM
            </p>
          <p>Phone: (704) 820-6556</p>
        </div> {/* addr*/}

        <div id="media" className="col-2">
          <a href="https://www.facebook.com/catawbacoffeeco/">
            <img className="img-responsive1" src={require("../../images/fb.png")} alt="Facebook" width="35" height="35" />
          </a>
          <a href="https://www.yelp.com/biz/catawba-coffee-co-mount-holly">
            <img className="img-responsive2" src={require("../../images/Yelp.png")} alt="Yelp" width="35" height="35" /></a>
          <a href="https://www.instagram.com/catawbacoffeeco/">
            <img className="img-responsive3" src={require("../../images/Instagram.png")} alt="Instagram" width="35" height="35" /></a>
        </div> {/* media end*/}
      </div>
    </div>

  </div>
  // </div>

);

export default Home;
