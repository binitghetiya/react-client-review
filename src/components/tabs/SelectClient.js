import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

export default class SelectClient extends React.Component {
  onNext = () => {
    const { selectedClient: client } = this.props;
    if (!client) {
      alert("Please select client first");
      return false;
    }
    const { toggleTab, nextTab } = this.props;
    toggleTab(nextTab);
  };

  render() {
    const { toggleClient, clientList, selectedClient } = this.props;
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleSelect">Clients</Label>
            <Input
              type="select"
              name="select"
              id="exampleSelect"
              onChange={e => toggleClient(e.target.value)}
              defaultValue={selectedClient}
            >
              <option value=""> Please select </option>
              {clientList.map(i => (
                <option value={i} key={i}>
                  {i}
                </option>
              ))}
            </Input>
          </FormGroup>
        </Form>
        <Row>
          <Col />
          <Col />
          <Col />
          <Col>
            <Button onClick={this.onNext}>Next</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
