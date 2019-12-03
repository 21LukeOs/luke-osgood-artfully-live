import React from 'react';
import './Gallery.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import GalleryPictures from '../GalleryPictures/GalleryPictures';
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
      return <GalleryPictures {...picture} key={picture.id + picture.title} />
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
          <Link to="/" className="gallery__leaderboard">
            <LBButtons text="LEADERBOARD" />
          </Link>
        </div>
      </div>
    )
  }
}

export default Gallery;