import React from "react";
import "./Blog.css"

const styles = {
  divStyle: {
      background: "green",
      justifyContent: "flex-end",
  }
};

const Blog = () => (
  <div class="blog">
    <h1>Blog Page</h1>
    <p>
      Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque
      turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat.
      Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum
      nunc, sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi justo
      laoreet risus, luctus luctus mi lacus sit amet libero. Class aptent taciti sociosqu ad litora
      torquent per conubia nostra, per inceptos himenaeos. Mauris pretium condimentum tellus eget
      lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec placerat
      accumsan mi, ut congue neque placerat eu. Donec nec ipsum in velit pellentesque vehicula sit
      amet at augue. Maecenas aliquam bibendum congue. Pellentesque semper, lectus non ullamcorper
      iaculis, est ligula suscipit velit, sed bibendum turpis dui in sapien.
    </p>
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

export default Blog;
