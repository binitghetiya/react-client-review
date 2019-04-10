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
    if (!selectedEmails) {
      return <div>Please add email first</div>;
    }
    const { id, singleMode } = this.state;
    return (
      <div className="printOnlyClass">
        <PrintButton id={"singlePage"} label={"Print single page"} />
        <div
          id={id}
          className="bg-white shadow-1 center pa4"
          style={{ width: "210mm", height: singleMode ? "297mm" : "" }}
        >
          <div className="f2 mb2">Hello</div>
          <div>
            You can add any valid html markup to this page, as long as it
            doesn't overflows
          </div>

          <div className="cf w-100 mt4">
            <div className="fl w-50 bg-washed-blue vh-25 pa3">Floats</div>
            <div className="fl w-50 bg-washed-red vh-25 pa3">Floats</div>
          </div>

          <div className="f3 mt4">Lists</div>
          <ul>
            <li>Benjamin Franklin</li>
            <li>Thomas Alva Edison</li>
          </ul>

          <div className="f3 mt4 mb2">Even images</div>
          <div className="tc" />
        </div>
      </div>
    );
  }
}
