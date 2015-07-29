PHQ9 Questionnaire
==================

## Usage

To run the application clone it locally, install the dependencies, and then
start the webpack dev server.

```
git clone http://github.com/fortruce/phq9.git
npm install
npm start
```

Then, browser to `http://localhost:3000` to see the application.

## Design

The application was built on top of React and react-router. I initially set up
routes for the *quiz* and the *scoring*.

The *quiz* route is responsible for presenting the user with the Phq9 quiz
itself and then redirecting to the correct *scoring* route upon submission.

The *scoring* route determines whether the user scored high enough to warrant
doctor recommendations and displays recommendations or a brief thank you message.

## The Quiz

The entirety of the quiz lies withing `Phq9.js` and `Question.js`. With such a
simple problem, I decided to store the quiz data in the state of the Phq9 component;
however, I would normally store such data in a Flux based store.

The `Question` component is a pure component used to render each question and
encapsulate the show/hide of the options.

To streamling the quiz taking process on smaller devices, I opted to initially
hide the options for each question. The options only show for the next unanswered
question, but they can be toggled easily by clicking on a question. The purpose
was to keep the clutter down to a minimum.

### Submission

When the user has answered all of the questions, the submission button will become
enabled. The user is not allowed to submit until all questions are answered. The
submission trigger adds up the score and redirects to the *scoring* route.

## Scoring & Recommendations

If a recommendation is necessary due to the score being high enough, the *scoring*
route shows the `Recommendations`. The Recommendations simply renders
a `Recommendation` component for each doctor available with a picture, name, and brief
description. Each Recommendation also has a 'contact' button to allow the user to
contact the specific doctor. The contact button simply redirects to a `contact`
page that thanks the user for contacting that doctor.