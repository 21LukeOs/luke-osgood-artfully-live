import React from 'react';
import './UploadArt.scss';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import Buttons from '../Buttons/Buttons';



class UploadArt extends React.Component {


  render() { 
    return (
      <div className="post">
        <div className="post__logo">
          <Logo />
        </div>
        <div className="post__title">
          <PageTitle text="Post Your Photograph" />
        </div>
        <div className="post__post-pic">

        </div>
        <div className="post__nav">
          <Link to="/leaderboard" className="post__leaderboard">
            <Buttons text="LEADERBOARD" />
          </Link>
          <Link to="/gallery" className="leaderboard__vote">
            <Buttons text="VOTE" />
          </Link>
        </div>
      </div>
    );
  }
}

export default UploadArt;