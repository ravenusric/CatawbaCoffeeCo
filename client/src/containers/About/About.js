import React from "react";
import "./About.css";

const About = () => (
  <div className="about">
    <div className="aboutUs">
      <h1 className="aboutH1">About the Owner</h1>
      <img
        alt="owner"
        className="owner"
        src={require("../../images/CCirene.jpeg")}
        title="Irene, the owner, and barista Garrett" 
      />
      <p>

          What started out as a dream hatched over a cup of coffee and a homemade
        cake, and turned into a reality when Catawba Coffee came to be in 2014. When
        Irene, the owner, came to Mount Holly it was originally for her to
        manage another independent shop. As time went by she met some of the
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
        asked how they came up with the name of their shop and the answer is and
        will always be the Catawba River. Needless to say, the challenge of
        being business owners was accepted and they have never looked back.
      </p>
      <br />
      <p id= "last">

          So, If you're in the area be sure to stop by for a cup and a smile. We'd

        love to meet you!
      </p>
    </div>
  </div>
);

export default About;
