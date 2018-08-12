import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Submissions.css";

class Submissions extends Component {
  state = {
    Submissions: [],
    firstName: "",
    lastName: "",
    email: "",
    text: "",
    wantsEmail: true,
    
  };

  handleInputChange = event => {
    console.log(event.target.name, event.target.value);
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleCheckbox = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log("Submit Clicked");
    if (this.state.firstName && this.state.lastName && this.state.email) {
      API.saveSubmissions({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        text: this.state.text
      })
        .then(res => {
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            text: ""
          });
          console.log("Data Submitted Successfully");
        })
        .catch(err => console.log(err));
    }
  };

  

  render() {
    return (
      <div className="container1">
        <Row className="mainRow">
          <Col size="md-6" className="subH">
            
            {/* <div className="mainDIV"> */}
            {/* <div className="subDiv"> */}
              <div className="subH">
                <h2 className="h2Contact">Contact Us!</h2>
              </div>
              <hr />
            <form className="form1">
                <Input
                  className="subInput1"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  name="firstName"
                  placeholder="First Name (required)"
                />
                <Input
                  className="subInput2"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  placeholder="Last Name (required)"
                />
                <Input
                  className="subInput3"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email (required)"
                />
                <TextArea
                  className="subTextarea"
                  value={this.state.text}
                  onChange={this.handleInputChange}
                  name="text"
                  placeholder="(Optional Catering, Feedback, Questions, etc.)"
                />

                <label>
                  <div className="checkbox">
                    <Input
                      name="wantsEmail"
                      type="checkbox"
                      value={this.state.signUp}
                      checked={this.state.checked}
                      className="subBox"
                      onChange={this.handleCheckbox}
                    />
                    Check the box to sign <br />
                    up for emails!
                  </div>
                </label>

                <br />
                <FormBtn
                  className="subBtn"
                  // disabled={!(this.state.name && this.state.email)}
                  onClick={this.handleFormSubmit}
                >
                  Submit
                </FormBtn>
              </form>
              {/* </div> */}
            {/* </div> */}
          </Col>
        </Row>
<Row>
  <div id="form1"></div>
<Col size="md-6">
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
</Col>
</Row>
</div>
    );
  }
}

export default Submissions;
