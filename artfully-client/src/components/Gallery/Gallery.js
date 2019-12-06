import React from 'react';
import './Gallery.scss';
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
    const url = `http://localhost:8080/gallery`;
    axios.get(url).then((response) => {
      this.setState({
        pictures: response.data
      });
    });
  }

  clickToVote = (e) => {
    e.preventDefault();
    const pictureId = e.target.attributes.id.value;

    axios.put(`http://localhost:8080/gallery/${pictureId}`).then(response => {
      this.setState({
        pictures: this.state.pictures.map((picture) => {
          if (picture.id === pictureId) {
            return { ...picture, votes: response.data.votes }
          } else {
            return { ...picture }
          }
        })
      })      
    }).catch(err => {
      console.error('Post error', err);
    })
  }
  
  displayGallery = () => {
    return this.state.pictures.map((picture) => {
      return <div className="gallery__picture" key={picture.id + picture.id}><CardPictures {...picture} class={"card-pic__img"} type="Votes" number={`: ${picture.votes}`} onclick={this.clickToVote} /></div>
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
            <Buttons text="LEADERBOARD" />
          </Link>
        </div>
      </div>
    )
  }
}

export default Gallery;