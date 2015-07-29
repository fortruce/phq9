import React, { PropTypes } from 'react';
import Question from './Question';
import { connect } from 'react-redux';

const questions = [
  'Little interest or pleasure in doing things?',
  'Feeling down, depressed, or hopeless?',
  'Trouble falling or staying asleep, or sleeping too much?',
  'Feeling tired or having little energy?',
  'Poor appetite or overeating?',
  'Feeling bad about yourself - or that you are a failure or have let yourself or your family down?',
  'Trouble concentrating on things, such as reading the newspaper or watching television?',
  'Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?',
  'Thoughts that you would be better off dead, or of hurting yourself in some way?'
];

// Check the answers for the sentinel value to indicate if all questions are answered.
function allQuestionsAnswered(answers) {
  return answers.indexOf(-1) === -1;
}

export default class Phq9 extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequird
  }

  constructor(props) {
    super(props)

    this.state = {
      // -1 is a sentinel value to indicate that the question hasn't been
      // answered yet. The array of answers is a parallel array to the questions.
      answers: questions.map(() => -1)
    }
  }

  render() {
    const show = this.state.answers.indexOf(-1);
    const completed = allQuestionsAnswered(this.state.answers);
    return (
      <div className="row">
        <div className="col col-sm-12 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3">
          <h2>Patient Health Questionnaire</h2>
          <h3>Over the last two weeks, how often have you been
          bothered by any of the following problems?</h3>

          <div className="row">
            <div className="col col-xs-12 col-sm-10 col-sm-offset-1">
              { /* For each question return a Question Component with a callback that will
                  adjust the corresponding answer in the answers array. */}
              { questions.map((q, i) => (
                <Question q={q}
                          key={i}
                          show={show === i}
                          selected={this.state.answers[i]}
                          onSelect={(select) => {
                            let answers = [...this.state.answers];
                            answers[i] = parseInt(select.target.options[select.target.selectedIndex].value, 10);
                            this.setState({ answers });
                          }} /> )) }
            </div>
          </div>
          <div className="row">
            <button onClick={() => this.setState({ answers: questions.map(() => -1) })}
                    className="btn btn-danger col col-xs-3">
              Reset
            </button>

            { /* Ensure that all questions have been answered before allowing submission
                and redirecting to the score results page. */ }
            <button className={"btn btn-success col col-xs-3 col-xs-offset-6" + (completed ? '' : ' disabled')}
                    onClick={() => {
              if (completed) {
                let score = this.state.answers.reduce((a,b) => a+b);
                this.context.router.transitionTo('/quiz/phq9/score/' + score);
              }
            }}>Submit</button>
          </div>
        </div>
      </div>
    );
  }
}