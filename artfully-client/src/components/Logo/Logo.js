import React from 'react';
import './Logo.scss';
import logo from '../../assets/images/logo.png';



class Logo extends React.Component {

  render() { 
    return (
      <img className="logo" src={logo} alt=""/>
    );
  }
}

export default Logo;