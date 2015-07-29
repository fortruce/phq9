import React from 'react';
import Recommendations from './Recommendations';

export default class Phq9Score extends React.Component {
  render() {
    // determine if a recommendation is necessary
    const recommendation = this.props.params.score >= 10 && this.props.params.score <= 27;

    // if no recommendation is necessary default to this copy
    let body = <div>
      <p>The questionnaire does not indicate that you are sufferent from
        significant depression. However, we recommend you come back and take the
        quiz occasionally to stay aware.
      </p>
    </div>;

    // if a recommendation is necessary render the recommendations component
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