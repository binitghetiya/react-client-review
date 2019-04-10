import React from "react";
import { Form, FormGroup, Label, Button, Row, Col, Input } from "reactstrap";

export default class SelectClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  onNext = () => {
    const { toggleEmails } = this.props;
    const { email } = this.state;
    if (!email) {
      alert("Please add some emails");
      return false;
    }
    if (this.validateEmail(email)) {
      toggleEmails(email);
      const { toggleTab, nextTab } = this.props;
      toggleTab(nextTab);
    } else {
      alert("Please make sure email is correct");
      return false;
    }
  };

  validateEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  onPrev = () => {
    const { toggleTab, prevTab } = this.props;
    toggleTab(prevTab);
  };

  handleChange = (value, formattedValue) => {
    const { toggleDate } = this.props;
    toggleDate(value);
  };

  render() {
    const {
      selectedDate,
      selectedClient,
      selectedComment,
      selectedEmails
    } = this.props;
    if (!selectedClient) {
      return <div>Please select Client first</div>;
    }
    if (!selectedDate) {
      return <div>Please select Date first</div>;
    }
    if (!selectedComment) {
      return <div>Please add review first</div>;
    }
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleText">
              Add Emails to send an email (seperated by ,)
            </Label>
            <Input
              type="email"
              name="text"
              id="exampleText"
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </FormGroup>
        </Form>
        <Row>
          <Col>
            <Button onClick={this.onPrev}>Prev</Button>
          </Col>
          <Col />
          <Col>
            <Button className="next" onClick={this.onNext}>
              Next
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}
