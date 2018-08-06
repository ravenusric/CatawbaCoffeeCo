import React from "react";
import "./Home.css"

const Home = () => (
  <div>
    <div className="container">
      <div className="jumbotron">
        <h1 className="text-center">Catawba Coffee Co</h1>
        <p className="text-center">Where Friendship Is Just A Cup Away</p>
        <hr className="text-center" />
        <a className="btn btn-danger btn-lg" href="info.html" role="button">
          Enter
        </a>
      </div>
    </div>

    <div className="footer">
      <img src="" alt="catawbaLogo" />
      <p>Address: 117 N Main St, Mt Holly, NC 28120</p>
      <p>
        Hours: Sunday Closed Monday 7AM–8PM Tuesday 7AM–8PM Wednesday 7AM–8PM
        Thursday 7AM–8PM Friday 7AM–9PM Saturday 8AM–8PM
      </p>
      <p>Phone: (704) 820-6556</p>
    </div>

  </div>
);

export default Home;
