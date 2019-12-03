import React from 'react';
import './Landing.scss';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import LBButtons from '../LBButtons/LBButtons';
import CardPictures from '../CardPictures/CardPictures'
import blackImg from '../../assets/images/black-img.png';




class Landing extends React.Component {

  state = {
    pictures: [
      {
        title: "no-name",
        artist: "no-name",
        image: blackImg
      }
    ]
  }

  render() { 
    return (
      <div className="landing">
        <div className="landing__logo">
          <Logo />
        </div>
        <div className="landing__title">
          <PageTitle text="Welcome to A . L ." />
        </div>
        <div className="landing__sub-wrap">
          <h2 className="landing__sub-title">Instructions</h2>
        </div>
        <div className="landing__tut"> 
          <h2 className="landing__bid-vote">To Bid, Click ></h2>
          <div className="landing__img-card"><CardPictures {...this.state.pictures[0]} class={"card-pic__img1"} /></div>
          <h2 className="landing__bid-vote">To Vote, Click ></h2>
          <div className="landing__img-card"><CardPictures {...this.state.pictures[0]} class={"card-pic__img"} /></div>
        </div>
        <div className="landing__nav">
          <Link to="/leaderboard" className="landing__leaderboard">
            <LBButtons text="LEADERBOARD" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;