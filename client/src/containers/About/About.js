import React from "react";
import "./About.css";

// const styles = {
//   divStyle: {
//       background: "green",
//       justifyContent: "flex-end",
//   }
// };
const About = () => (
  <div className="about">
    <div className="aboutUs">
      <h1 className="aboutH1">About the Owner</h1>
      <p>
        What started out as a dream, hatched over a cup of coffee and a homemade
        cake turned into a reality when Catawba Coffee came to be in 2014. When
        Irene, the owner, came to Mount Holly it was originally for her to
        manage another independent shop. As the time went by she met some of the
        most wonderful people! Many who knew each other and some who just
        happened by (mostly by accident) no matter how you got here or where you
        came from you'll become a regular. There's always the most eclectic
        group of folks sitting around and telling stories, all over a cup of
        coffee.
      </p>
      <br />
      <p>
        When the opportunity came to Irene and her husband Joe to buy the shop
        it was an almost immediate a yes. The fear and doubt were quickly pushed
        aside when the thought of having to leave Mount Holly and the family
        that they'd became a part of was no longer imminent. Often times they're
        asked why the name of the coffee shop and their answer is and will
        always be the Catawba River. The challenge of "business owner" was
        accepted and they never looked back.
      </p>
      <br />
      <p>
        So, If you're in the area be sure to stop in for a cup and a smile. We'd
        love to meet you!
      </p>
    </div>

    <img
      alt="owner"
      className="owner"
      src={require("../../images/CCireneBW.jpeg")}
    />
  </div>
);

export default About;
