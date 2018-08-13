import React from "react";
import "./Gallery.css"

const Gallery = () => (
  <div className="blog">

    <h1>Photo Gallery</h1>

    <div className="footer">
      <div className="row">
      <div className="col-2">
      </div>

        <div id="addr"className="col-8">
          <p>Address: 117 N Main St, Mt Holly, NC 28120</p>
          <p>
            Hours: Sunday Closed Monday 7AM–8PM | Tuesday 7AM–8PM | Wednesday 7AM–8PM
           | Thursday 7AM–8PM | Friday 7AM–9PM | Saturday 8AM–8PM  || Phone: (704) 820-6556</p>
        </div> {/* addr*/}

        <div id="media" className="col-2">
          <a href="https://www.facebook.com/catawbacoffeeco/" target="_blank">
            <img className="img-responsive1" src={require("../../images/fb.png")} alt="Facebook" width="35" height="35" />
          </a>
          <a href="https://www.yelp.com/biz/catawba-coffee-co-mount-holly" target="_blank">
            <img className="img-responsive2" src={require("../../images/Yelp.png")} alt="Yelp" width="35" height="35" /></a>
          <a href="https://www.instagram.com/catawbacoffeeco/" target="_blank">
            <img className="img-responsive3" src={require("../../images/Instagram.png")} alt="Instagram" width="35" height="35" /></a>
        </div> {/* media end*/}
      </div>
    </div>
  </div>
);

export default Gallery;
