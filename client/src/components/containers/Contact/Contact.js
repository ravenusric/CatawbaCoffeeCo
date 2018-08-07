import React from "react";
import "./Contact.css";

const Contact = props => (
  <div>
    <h3>Interested catering?</h3>
    <h5>Contact us for more information.</h5>
<hr/>
    {/* <span class="border-top-0"> */}
    <form>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control" id="contactFN"
            placeholder="First name"
          />
        </div>
        <div className="col">
          <input type="text" className="form-control" id="contactLN" placeholder="Last name" />
        </div>
      </div>
  
  <div className="form-group">
    <label for="exampleFormControlInput1" id="userContact">Email address</label>
    <input type="email" className="form-control" id="contactEmail" placeholder="name@example.com"/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1" id="contactShare">Share your event details below...</label>
    <textarea className="form-control" id="contactDetails" placeholder="occassion, date, menu preferences, etc..." rows="3"></textarea>
  </div>
  
  <button type="submit" className="btn btn-dark" id="contactBTN">Submit</button>
</form>
  </div>
// </span>
  // </div>
);

export default Contact;
