import React from "react";
import { Form, FormGroup, Label, Button, Row, Col } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class SelectClient extends React.Component {
  onNext = () => {
    const { selectedDate: date } = this.props;
    if (!date) {
      alert("Please select date first");
      return false;
    }
    const { toggleTab, nextTab } = this.props;
    toggleTab(nextTab);
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
    const { selectedDate, selectedClient } = this.props;
    if (!selectedClient) {
      return <div>Please select Client first</div>;
    }
    return (
      <div>
        <Form>
          <FormGroup>
            <Label className="m10" for="exampleSelect">
              Select Date:
            </Label> 
            <DatePicker
              popperPlacement="botom-start"
              selected={selectedDate}
              onChange={this.handleChange}
              showYearDropdown
              dateFormatCalendar="MMMM"
              scrollableYearDropdown
              yearDropdownItemNumber={15}
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
