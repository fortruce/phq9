import React from 'react';
import Recommendations from './Recommendations';

// Translate the score from the numerical form to the corresponding severity level.
function translateScore(num) {
  if (num >= 0 && num <= 4)
    return 'none';
  else if (num >= 5 && num <= 9)
    return 'mild';
  else if (num >= 10 && num <= 14)
    return 'moderate';
  else if (num >= 15 && num <= 19)
    return 'moderately_severe';
  else if (num >= 20 && num <= 27)
    return 'severe';
  else
    return 'unknown';
}

export default class Phq9Score extends React.Component {
  render() {
    // determine if a recommendation is necessary
    const recommendation = this.props.params.score >= 10 && this.props.params.score <= 27;
    let body = <div>
      <p>The questionnaire does not indicate that you are sufferent from
        significant depression. However, we recommend you come back and take the
        quiz occasionally to stay aware.
      </p>
    </div>;
    if (recommendation) {
      body = <div>
        <p>The questionnaire indicates that you might be suffering significant depression.
        We urge you to contact one of the professionals below.</p>
        <Recommendations />
      </div>
    }

    return (
      <div>
        <h2>Thank you for completing the Patient Health Questionnaire.</h2>
        { body }
      </div>
    );
  }
}