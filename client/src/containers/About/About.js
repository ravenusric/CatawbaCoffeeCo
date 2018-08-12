import React from "react";
import "./About.css"

// const styles = {
//   divStyle: {
//       background: "green",
//       justifyContent: "flex-end",
//   }
// };
const About = () => (
 
 <div className ="about">
   
    
    <div className="aboutUs">
    <h1 className="aboutH1">About Us</h1>
    <p>
    What started out as a dream, hatched over a cup of coffee and a homemade cake turned int a reality when Catawba Coffee  came to be in 2014. 
I came to Mount Holly to manage another independent shop.  Here I met some of the most wonderful people. Many who knew each other and some who just happened by   ( mostly by accident) no matter how you got here or where you came from you became a regular. You'd always find the most eclectic group of folks sitting around and telling stories. All over a cup of coffee. When the opportunity came to buy the shop it was almost immediately a Yes.   Fear and doubt were quickly pushed aside when the  leaving of  this town and the family that we became a part of was imminent.  The challenge was accepted and we never looked back. So, If you're in the area be sure to stop in  for a cup and a smile. We'd love to meet you.
</p>
</div>
    <div className="footer">
      <div className="row">
      <div className="col-2">
      </div>

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
  
);

export default About;
