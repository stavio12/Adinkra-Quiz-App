import React, { Component } from "react";

export default class Score extends Component {
  render() {
    return (
      <div className="card text-center score bg">
        <div className="card-header">
          {" "}
          <h1>
            Question {this.props.current} out of {this.props.questions.length}
          </h1>
          <h3 className="float-none float-md-right text-md-center">
            <strong> Score: {this.props.score}</strong>{" "}
          </h3>
        </div>
      </div>
    );
  }
}
