import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Qlist from "./quiz/Qlist";
import Score from "./quiz/Score";
import Results from "./quiz/Results";
import Home from "./quiz/Home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: "All the following are examples of adinkra symbols except",
          choices: [
            {
              id: "a",
              text: "Akoma",
            },
            {
              id: "b",
              text: "Duafe",
            },
            {
              id: "c",
              text: "Brafie",
            },
          ],
          correct: "c",
        },
        {
          id: 2,
          text: "Adinkra are visual symbols with historical and philosophical significance.",
          choices: [
            {
              id: "a",
              text: "True",
            },
            {
              id: "b",
              text: "False",
            },
            {
              id: "c",
              text: "None",
            },
          ],
          correct: "a",
        },
        {
          id: 3,
          text: "------------symbol signifies patience and tolerance.",
          choices: [
            {
              id: "a",
              text: "Adwo",
            },
            {
              id: "b",
              text: "Akoma",
            },
            {
              id: "c",
              text: "Adinkra",
            },
          ],
          correct: "b",
        },
        {
          id: 4,
          text: "The adinkra symbols are found on objects like pots , furniture , casual wears etc..",
          choices: [
            {
              id: "a",
              text: "True",
            },
            {
              id: "b",
              text: "False",
            },
            {
              id: "c",
              text: "None of the above",
            },
          ],
          correct: "a",
        },
        {
          id: 5,
          text: "Which of the following people brought about the adinkra symbols",
          choices: [
            {
              id: "a",
              text: "Ashantes",
            },
            {
              id: "b",
              text: "Ewes",
            },
            {
              id: "c",
              text: "Fantes",
            },
          ],
          correct: "a",
        },
        {
          id: 6,
          text: "The adinkra symbols are found on objects like pots , furniture , casual wears etc..",
          choices: [
            {
              id: "a",
              text: "True",
            },
            {
              id: "b",
              text: "False",
            },
            {
              id: "c",
              text: "None of the above",
            },
          ],
          correct: "a",
        },
        {
          id: 7,
          text: " The symbol ''wosofo Dua Pa A'' signifies .....",
          choices: [
            {
              id: "a",
              text: "Power and abundance",
            },
            {
              id: "b",
              text: "Support for good causes",
            },
            {
              id: "c",
              text: "Strenght and Might.",
            },
          ],
          correct: "b",
        },
        {
          id: 8,
          text: "The twists and turns in the journey of life is represented by ----------- symbol",
          choices: [
            {
              id: "a",

              text: "Nteasee",
            },
            {
              id: "b",
              text: "Nkyinkyim",
            },
            {
              id: "c",
              text: "Adani",
            },
          ],
          correct: "b",
        },
        {
          id: 9,
          text: "Which of the following is not an example of adinkra symbol",
          choices: [
            {
              id: "a",

              text: "Adwo",
            },
            {
              id: "b",
              text: "Nyame dua",
            },
            {
              id: "c",
              text: "Kronkon",
            },
          ],
          correct: "c",
        },
        {
          id: 10,
          text: "A symbol  of justice is the --------------",
          choices: [
            {
              id: "a",
              text: "Spow",
            },
            {
              id: "b",
              text: "Aban",
            },
            {
              id: "c",
              text: "Mako",
            },
          ],
          correct: "a",
        },
        {
          id: 11,
          text: "What is the name of the symbol that has a noun .",
          choices: [
            {
              id: "a",
              text: "Gye Nyame",
            },
            {
              id: "b",
              text: "Osram ne Nsoromma",
            },
            {
              id: "c",
              text: "Mframadan",
            },
          ],
          correct: "b",
        },
        {
          id: 12,
          text: "The wooden comb symbol is called -----------",
          choices: [
            {
              id: "a",
              text: "Bese saka",
            },
            {
              id: "b",
              text: "Akoben",
            },
            {
              id: "c",
              text: "Duafe",
            },
          ],
          correct: "c",
        },
        {
          id: 13,
          text: "A symbol of God's presence and protection is the ------------symbol ",
          choices: [
            {
              id: "a",
              text: "Nyame Dua",
            },
            {
              id: "b",
              text: "Abe Dua",
            },
            {
              id: "c",
              text: "Akoben",
            },
          ],
          correct: "a",
        },
        {
          id: 14,
          text: "The ------------symbol has a crocrodile embedded in it",
          choices: [
            {
              id: "a",
              text: "Aboa bi",
            },
            {
              id: "b",
              text: "Mpuannum",
            },
            {
              id: "c",
              text: "Denkyem",
            },
          ],
          correct: "c",
        },
      ],
      score: 0,
      current: 1,
    };
  }

  handleGameClick() {
    this.setState({ hasStarted: false });
  }

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
  }

  render() {
    if (this.state.current > this.state.questions.length) {
      var scorebox = "";
      var results = <Results {...this.state} />;
    } else {
      scorebox = <Score {...this.state} />;
    }

    return (
      <div>
        <Router>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game" exact>
            {scorebox}
            <Qlist {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
            {results}
          </Route>{" "}
        </Router>
      </div>
    );
  }
}
