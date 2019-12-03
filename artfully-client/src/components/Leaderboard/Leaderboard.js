import React from 'react';
import './Leaderboard.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import CardPictures from '../CardPictures/CardPictures';
import LBButtons from '../LBButtons/LBButtons';



class Leaderboard extends React.Component {

  state = {
    pictures: []
  }


  componentDidMount() {
    const url = `http://localhost:8080/`;
    axios.get(url).then((response) => {
      this.setState({
        pictures: response.data
      });
    });
  }
  
  displayLeaders = () => {
    return this.state.pictures.map((picture) => {
      return <div className="leaderboard__picture"><CardPictures {...picture} key={picture.id + picture.title} class={"card-pic__img1"} /></div>
    })
  }

  render() { 
    return (
      <div className="leaderboard">
        <div className="leaderboard__logo">
          <Logo />
        </div>
        <div className="leaderboard__title">
          <PageTitle text="Leaderboard" />
        </div>
        <div className="leaderboard__pictures">
          {this.displayLeaders()}
        </div>
        <div className="leaderboard__nav">
          <Link to="/post" className="leaderboard__post">
            <LBButtons text="POST" />
          </Link>
          <Link to="/gallery" className="leaderboard__vote">
            <LBButtons text="VOTE" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Leaderboard;