import React, { PropTypes } from 'react';
import doctors from '../doctors';

class Recommendation extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  render() {
    return (
      <div style={{
            display: 'flex',
            margin: '40px auto',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            maxWidth: '80%',
           }}>
        <div style={{
            flex: '0 0 80px'
          }}>
          <img style={{
            width: 'auto',
            height: '80px',
            borderRadius: '8px'
          }} src={this.props.picture} alt={this.props.name} />
        </div>
        <div style={{
          flex: '1 1 200px',
          margin: '0px 20px'
        }}>
          <h3 style={{ margin: '10px 0' }}>{ this.props.name }</h3>
          <p>{this.props.description}</p>
        </div>
        <div style={{
          flex: '0 0 auto'
        }}>
          <button style={{ marginTop: '30px' }}
            className='btn btn-warning'
            onClick={() => this.context.router.transitionTo('/contact/' + this.props.id)}>
            Contact
          </button>
        </div>
      </div>
    );
  }
}

export default class Recommendations extends React.Component {
  render() {
    return (
      <div>
        { doctors.map((d, i) => {
          return <Recommendation {...d} id={i} />
        })}
      </div>
    );
  }
}