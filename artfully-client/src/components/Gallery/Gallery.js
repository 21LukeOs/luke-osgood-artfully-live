import React from 'react';
import './Gallery.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import CardPictures from '../CardPictures/CardPictures';
import LBButtons from '../LBButtons/LBButtons';

class Gallery extends React.Component {

  state = {
    pictures: []
  }


  componentDidMount() {
    const url = `http://localhost:8080/gallery`;
    axios.get(url).then((response) => {
      this.setState({
        pictures: response.data
      });
    });
  }
  
  displayGallery = () => {
    return this.state.pictures.map((picture) => {
      return <div className="gallery__picture"><CardPictures {...picture} key={picture.id + picture.title} class={"card-pic__img"} /></div>
    })
  }

  render() { 
    return (
      <div className="gallery">
        <div className="gallery__logo">
          <Logo />
        </div>
        <div className="gallery__title">
          <PageTitle text="Gallery" />
        </div>
        <div className="gallery__pictures">
          {this.displayGallery()}
        </div>
        <div className="gallery__nav">
          <Link to="/leaderboard" className="gallery__leaderboard">
            <LBButtons text="LEADERBOARD" />
          </Link>
        </div>
      </div>
    )
  }
}

export default Gallery;