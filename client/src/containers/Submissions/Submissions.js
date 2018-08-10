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
              {/* <h2>Contact Us!</h2> */}
            </div>
            <hr />
            <form className="form1">
              <Input
                className="subInput1"
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
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
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="text"
                placeholder="(Optional) Catering, Feedback, Questions, etc..."
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
                disabled={!(this.state.name && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
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
      </Container>

    );
  }
}

export default Submissions;
