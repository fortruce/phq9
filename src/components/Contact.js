import React from 'react';
import doctors from '../doctors';

export default class Contact extends React.Component {
  render() {
    const { name, picture } = doctors[this.props.params.doctor];
    return (
      <div>
        <img style={{
          display: 'block',
          margin: '0 auto'
        }} src={picture} />
        <h2>Thank you for contacting {name}!</h2>
      </div>
    );
  }
}