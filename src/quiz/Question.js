import React, { Component } from "react";

export default class Question extends Component {
  onChange(e) {
    e.preventDefault();

    const { setCurrent, setScore, question } = this.props;

    let selected = e.target.value;

    if (selected === question.correct) {
      setScore(this.props.score + 1);
    }

    setCurrent(this.props.current + 1);
  }

  render() {
    const { question } = this.props;

    return (
      <div className="card  text-center mt-2 bg">
        <div className="card-body">
          <h3 className="card-title">{question.text}</h3>
          <ul className="card-text list-group list-group-horizontal-md justify-content-center py-3">
            {this.props.question.choices.map((choice) => {
              return (
                <li className="list-group-item font-weight-bold bg" key={choice.id}>
                  <input type="radio" onChange={this.onChange.bind(this)} name={question.id} value={choice.id} />
                  {choice.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
