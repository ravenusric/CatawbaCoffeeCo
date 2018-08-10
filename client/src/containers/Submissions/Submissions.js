import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import "./Submissions.css";

class Submissions extends Component {
  state = {
    Submissions: [],
    name: "",
    email: "",
    text: "",
    wantsEmail: true
  };

  componentDidMount() {
    this.loadSubmissions();
  }

  myClick() {
    console.log(this.myClick);
  }

  loadSubmissions = () => {
    API.getSubmissions()
      .then(res =>
        this.setState({ Submissions: res.data, name: "", email: "", text: "" })
      )
      .catch(err => console.log(err));
  };

  deleteSubmissions = id => {
    API.deleteSubmission(id)
      .then(res => this.loadSubmissions())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
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
    if (this.state.name && this.state.email) {
      API.saveSubmissions({
        name: this.state.name,
        email: this.state.email,
        text: this.state.text
      })
        .then(res => this.loadSubmissions())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container className="container1">
        <Row className="mainRow">
          <Col size="md-6" className="subH">
            <br />
            <br />
            <div className="subH">
              <h2>Contact Us!</h2>
            </div>
            <hr />
            <form className="form1">
              <Input
                className="subInput1"
                value={this.state.firstName}
                onChange={this.handleInputChange}
                name="firtName"
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
              <FormBtn className="subBtn"
                // disabled={!(this.state.name && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>

    );
  }
}

export default Submissions;
