import React, { Component } from "react";
import Question from "./Question";

export default class Qlist extends Component {
  render() {
    return (
      <div className="questions">
        {/* eslint-disable-next-line  */}
        {this.props.questions.map((question) => {
          if (question.id === this.props.current) {
            return <Question question={question} key={question.id} {...this.props} />;
          }
        })}
      </div>
    );
  }
}
