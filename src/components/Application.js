import React from 'react';

export default class Application extends React.Component {
  render() {
    return (
      <div>
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          height: '60px',
          width: '100%',
          zIndex: '20',
          backgroundColor: '#749CCC'
        }}>
          <a href="/">
            <img style={{
              width: 'auto',
              height: '80px',
              position: 'absolute',
              top: '-20px',
              left: '-70px'
            }} src="//static1.squarespace.com/static/55134432e4b098324cabacdc/t/55134464e4b0cbd7d9b2ca05/1436799559367/?format=1500w" alt="Quartet Health" />
          </a>
        </div>
        <div className="container"
            style={{
              marginTop: '60px',
              marginBottom: '40px'
            }}>
          { this.props.children }
        </div>
      </div>
    );
  }
}