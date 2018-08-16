import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Submissions.css";
import Axios from "../../../node_modules/axios";

class Submissions extends Component {
  state = {
    Submissions: [],
    firstName: "",
    lastName: "",
    email: "",
    text: "",
    wantsEmail: true
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
    const { firstName, lastName, email, text } = this.state;
    const form = Axios.post("/api/submissions", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      text: text
    })
    console.log(form)
    console.log("Submit Clicked");
    if (this.state.firstName && this.state.lastName && this.state.email) {
      API.saveSubmissions({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        text: this.state.text
      })
        .then(res => {
          console.log(res)
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
      <div className="contact1">
        <Row className="mainRow">
          <Col size="md-6" className="subH">
            <br />
            <br />
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

              {/* <label>
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
              </label> */}

              <br />
              <FormBtn
                className="subBtn"
                // disabled={!(this.state.name && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
</div>
    );
  }
}

export default Submissions;
