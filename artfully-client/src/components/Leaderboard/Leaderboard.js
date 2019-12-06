import React from 'react';
import './Leaderboard.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import CardPictures from '../CardPictures/CardPictures';
import Buttons from '../Buttons/Buttons';



class Leaderboard extends React.Component {

  state = {
    pictures: []
  }


  componentDidMount() {
    const url = `http://localhost:8080/leaderboard`;
    axios.get(url).then((response) => {
      this.setState({
        pictures: response.data
      });
    });
  }

  clickToBid = (e) => {
    e.preventDefault();
    console.log(e.target.attributes.id.value);
    const pictureId = e.target.attributes.id.value;

    axios.put(`http://localhost:8080/leaderboard/${pictureId}`).then(response => {
      console.log(response.data.bid)
      this.setState({
        pictures: this.state.pictures.map((picture) => {
          if (picture.id === pictureId) {
            return { ...picture, bid: response.data.bid }
          } else {
            return { ...picture }
          }
        })
      })
    }).catch(err => {
      console.error('Post error', err);
    })
  }
  
  displayLeaders = () => {
    return this.state.pictures.map((picture) => {
      return <div className="leaderboard__picture" key={picture.id + picture.title}><CardPictures {...picture} class={"card-pic__img1"} onclick={this.clickToBid} type="Current Bid" number={picture.bid} /></div>
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
            <Buttons text="POST" />
          </Link>
          <Link to="/gallery" className="leaderboard__vote">
            <Buttons text="VOTE" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Leaderboard;