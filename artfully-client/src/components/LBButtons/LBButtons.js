import React from 'react';
import './LBButtons.scss';


class LBButtons extends React.Component {

  render() { 
    return (
      <button className="button">
        <span className="button__text">{this.props.text}</span>
      </button>
    );
  }
}

export default LBButtons;