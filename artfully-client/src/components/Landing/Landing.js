import React from 'react';
import './Landing.scss';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import Buttons from '../Buttons/Buttons';
import CardPictures from '../CardPictures/CardPictures'
import blackImg from '../../assets/images/black-img.png';
import arrow from '../../assets/images/arrow-right.svg';




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
        <p className="landing__para">Upload photographs (Post) to be included in the gallery (Vote). Vote on your favourite photograph to help get them to the leaderboard (Leaderboard) where you can bid on the top 3 overall favourites.</p>
        <div className="landing__tut"> 
          <h2 className="landing__bid-vote">To Bid, Click</h2><img className="landing__bid-vote-img" src={arrow} alt=""/>
          <div className="landing__img-card"><CardPictures {...this.state.pictures[0]} class={"card-pic__img1"} /></div>
          <h2 className="landing__bid-vote">To Vote, Click</h2><img className="landing__bid-vote-img" src={arrow} alt=""/>
          <div className="landing__img-card"><CardPictures {...this.state.pictures[0]} class={"card-pic__img"} /></div>
        </div>
        <div className="landing__nav">
          <Link to="/leaderboard" className="landing__leaderboard">
            <Buttons text="LEADERBOARD" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;