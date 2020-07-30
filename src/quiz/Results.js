import React, { Component } from "react";

export default class Result extends Component {
  render() {
    var percent = Math.round((this.props.score / this.props.questions.length) * 100);
    if (percent > 90) {
      var message = (
        <div className="col-12">
          <img src={require("../symbols/congrat.jpg")} className="card-img-top tropy img-thumbnail" alt="..." />
          <div className="card-body">
            <p className="card-text text-dark font-weight-bolder">Congratulations!</p>
          </div>
        </div>
      );
    } else if (percent > 60) {
      message = (
        <div className="col-12">
          <img src={require("../symbols/congrat.jpg")} className="card-img-top tropy img-thumbnail" alt="..." />
          <div className="card-body">
            <p className="card-text text-dark font-weight-bolder">You Could Have Done Better!</p>
          </div>
        </div>
      );
    } else {
      message = (
        <div className="col-12">
          <img src={require("../symbols/fail.jpg")} className="card-img-top tropy img-thumbnail" alt="..." />
          <div className="card-body">
            <p className="card-text text-dark font-weight-bolder">Failure!</p>
          </div>
        </div>
      );
    }

    return (
      <div className="card container result justify-content-center text-center p-5 bg">
        <div className="row">
          <div className="col-12 col-md-12">
            <h1 className="text-dark">
              {percent}% {message}
            </h1>
            <h4 className="card-text p-2">
              You got {this.props.score} out of {this.props.questions.length} correct
            </h4>

            <h2 className="btn ">
              <a className="btn-success btn-lg" href="/game">
                Take Again
              </a>
            </h2>
            <h2 className="btn ">
              <a className="btn-success btn-lg" href="/">
                Home{" "}
              </a>
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
