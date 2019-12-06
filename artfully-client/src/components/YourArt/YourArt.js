import React from 'react';
import './YourArt.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import CardPictures from '../CardPictures/CardPictures';
import Buttons from '../Buttons/Buttons';

class Gallery extends React.Component {

  state = {
    pictures: []
  }


  componentDidMount() {
    const url = `http://localhost:8080/yourArt`;
    axios.get(url).then((response) => {
      this.setState({
        pictures: response.data
      });
    });
  }
  
  displayGallery = () => {
    return this.state.pictures.map((picture) => {
      return <div className="your-art__picture" key={picture.id + picture.id}><CardPictures {...picture} class={"card-pic__img2"} type="Closing Bid" number={`: $${picture.bid}`} /></div>
    })
  }

  render() { 
    return (
      <div className="your-art">
        <div className="your-art__logo">
          <Logo />
        </div>
        <div className="your-art__title">
          <PageTitle text="Your Art" />
        </div>
        <div className="your-art__pictures">
          {this.displayGallery()}
        </div>
        <div className="your-art__nav">
          <Link to="/leaderboard" className="your-art__leaderboard">
            <Buttons text="LEADERBOARD" />
          </Link>
        </div>
      </div>
    )
  }
}

export default Gallery;