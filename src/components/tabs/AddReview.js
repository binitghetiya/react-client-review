import React from "react";
import { Form, FormGroup, Label, Button, Row, Col, Input } from "reactstrap";
import { MdStar } from "react-icons/md";
import classnames from "classnames";

export default class SelectClient extends React.Component {
  onNext = () => {
    const { selectedComment: comment } = this.props;
    if (!comment) {
      alert("Please add some comments");
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
    const {
      selectedDate,
      selectedClient,
      selectedComment,
      selectedReview,
      toggleComment,
      toggleReview
    } = this.props;
    if (!selectedClient) {
      return <div>Please select Client first</div>;
    }
    if (!selectedDate) {
      return <div>Please select Date first</div>;
    }
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let description = "Very Poor";
    if (selectedReview >= 5) {
      description = "Poor";
    }
    if (selectedReview >= 7) {
      description = "Good";
    }
    if (selectedReview > 7) {
      description = "Excellent";
    }
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleText">
              Review: {selectedReview}/{arr.length} ({description})
            </Label>
            <br />
            {arr.map(i => {
              return (
                <MdStar
                  className={classnames({
                    lightGray: selectedReview < i
                  })}
                  key={i}
                  onClick={() => {
                    toggleReview(i);
                  }}
                />
              );
            })}
            <br />
            <br />

            <Label for="exampleText">Comments</Label>
            <Input
              type="textarea"
              name="text"
              value={selectedComment}
              id="exampleText"
              onChange={e => {
                toggleComment(e.target.value);
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
            <Button className="next" onClick={this.onNext}>Next</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
