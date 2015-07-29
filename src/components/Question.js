import React from 'react';

const options = [
  '---',
  'Not at all',
  'Several days',
  'More than half the days',
  'Nearly every day'
];

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: true
    }
  }
  render() {
    const show = this.state.hide && !this.props.show;
    return (
      <div style={{
        margin: '20px 0'
      }}>
        <p onClick={() => {
          this.setState({hide: !this.state.hide})
        }}>
          { show ? '\u25BA ' : '\u25BC ' }
          { this.props.q }
          { this.props.selected !== -1 ? ' \u2705' : '' }
        </p>
        <select style={{
          display: show ? 'none' : 'block',
          margin: '0 0 0 20px',
          border: 'none',
          padding: '5px',
          overflow: 'auto',
          height: '135px',
          outline: 'none',
          width: '200px'
        }}
                size={5}
                value={this.props.selected}
                onChange={ (select) => {
                  this.setState({ hide: true });
                  this.props.onSelect(select);
                }}>
          { options.map((opt, i) => {
            return <option value={i-1}
                           style={{
                            margin: '5px 0',
                            border: '1px solid #0e0e0e',
                            borderRadius: '5px'
                           }}>
                           { opt }
                    </option>
          }) }
        </select>
      </div>
    );
  }
}