import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Submissions extends Component {
  state = {
    Submissions: [],
    name: "",
    email: "",
    text: ""
  };

  componentDidMount() {
    this.loadSubmissions();
  }

  myClick(){
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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Give us your feedback!</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="name (required)"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="text"
                placeholder="text (Optional)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit Information
              </FormBtn>
            </form>
          </Col>
        </Row>
<Row>
<Col size="md-6">
<div className="footer">
<p>Address: 117 N Main St, Mt Holly, NC 28120</p>
<p>
  Hours: Sunday Closed Monday 7AM–8PM Tuesday 7AM–8PM Wednesday 7AM–8PM
  Thursday 7AM–8PM Friday 7AM–9PM Saturday 8AM–8PM
</p>
<p>Phone: (704) 820-6556</p>
</div>
</Col>
</Row>
      </Container>
    );
  }
}

export default Submissions;
