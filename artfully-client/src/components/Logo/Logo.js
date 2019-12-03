import React from 'react';
import './Logo.scss';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';



class Logo extends React.Component {

  render() { 
    return (
      <Link to="/" >
        <img className="logo" src={logo} alt=""/>
      </Link>
    );
  }
}

export default Logo;