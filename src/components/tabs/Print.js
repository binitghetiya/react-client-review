import React from "react";
import PrintButton from "./PrintButton";

export default class SelectClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleMode: true,
      id: "singlePage"
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
      selectedEmails,
      selectedReview
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
    if (!selectedEmails) {
      return <div>Please add email first</div>;
    }
    const { id } = this.state;
    return (
      <div className="printOnlyClass">
        <PrintButton id={"singlePage"} label={"Download Review"} />
        <div
          id={id}
          className="bg-white shadow-1 center pa4"
        >
          <div className="f3 mb2">{selectedClient}</div>
          <div>
            Date : {selectedDate.toISOString().substring(0, 10)}
          </div>
          <div className="cf w-100 mt4">
            <div className="fl w-30 bg-washed-blue vh-5">Email: </div>
            <div className="fl w-50 bg-washed-blue vh-5"><b>{selectedEmails}</b></div>
          </div>
          <div className="cf w-100">
            <div className="fl w-30 bg-washed-blue vh-5">Review: </div>
            <div className="fl w-50 bg-washed-blue vh-5"><b>{selectedReview} / 10</b></div>
          </div>
          <div className="cf w-100">
            <div className="fl w-30 bg-washed-blue vh-10">Comment: </div>
            <div className="fl w-50 bg-washed-blue vh-10"><b>{selectedComment}</b></div>
          </div>
        </div>
      </div>
    );
  }
}
