import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container
} from "reactstrap";
import classnames from "classnames";
import SelectClient from "./tabs/SelectClient";
import SelectDate from "./tabs/SelectDate";
import AddReview from "./tabs/AddReview";

import "./MainForm.css";

const clientList = ["Datacenters", "Microsoft", "Google", "Facebook"];

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
      client: "",
      date: new Date(),
      review: 7,
      comment: ""
    };
  }

  toggleClient = client => {
    this.setState({
      client
    });
  };

  toggleReview = review => {
    this.setState({
      review
    });
  };

  toggleComment = comment => {
    this.setState({
      comment
    });
  };

  toggleDate = date => {
    this.setState({
      date
    });
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    console.log(this.props, this.state);
    const { client, date, review, comment } = this.state;
    return (
      <Container>
        <div className="mrTop50" />
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <h3>Give Review</h3>
          </Col>
        </Row>
        <div className="mrTop10" />
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Client
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Date
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Review/Comment
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "4"
                  })}
                  onClick={() => {
                    this.toggle("4");
                  }}
                >
                  Email
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <div className="mrTop20" />
                <SelectClient
                  match={this.props.match}
                  nextTab="2"
                  toggleTab={this.toggle}
                  toggleClient={this.toggleClient}
                  clientList={clientList}
                  selectedClient={client}
                />
              </TabPane>
              <TabPane tabId="2">
                <div className="mrTop20" />
                <SelectDate
                  match={this.props.match}
                  nextTab="3"
                  prevTab="1"
                  toggleTab={this.toggle}
                  toggleDate={this.toggleDate}
                  selectedDate={date}
                  selectedClient={client}
                />
              </TabPane>
              <TabPane tabId="3">
                <div className="mrTop20" />
                <AddReview
                  match={this.props.match}
                  nextTab="4"
                  prevTab="2"
                  toggleTab={this.toggle}
                  toggleReview={this.toggleReview}
                  toggleComment={this.toggleComment}
                  selectedDate={date}
                  selectedClient={client}
                  selectedReview={review}
                  selectedComment={comment}
                />
              </TabPane>
              <TabPane tabId="4">
                <div className="mrTop20" />
                <h1>adasd</h1>
              </TabPane>
            </TabContent>
          </Col>
          <Col />
        </Row>
      </Container>
    );
  }
}