import React from "react";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.results);
  }

  componentDidMount() {
    fetch("https://opentdb.com/api.php?amount=10&category=10&difficulty=easy")
      .then((data) => data.json())
      .then(({ results }) => this.setState({ results: results }));
  }

  render() {
    return (
      <div>
        <h3>Quiz app</h3>
        <button onClick={this.handleClick}>display</button>
        <ul>
          {this.state.results.map((question) => (
            <div>
              <li
                key={question.question}
                dangerouslySetInnerHTML={{ __html: question.question }}
              ></li>
              <ul>
                <li key={question.correct_answer}>{question.correct_answer}</li>
                {question.incorrect_answers.map((answer) => (
                  <li key={answer}>{answer}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Quiz;
