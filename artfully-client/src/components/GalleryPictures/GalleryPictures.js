import React from 'react';
import './GalleryPictures.scss';


class LBPictures extends React.Component {

  render() { 
    return (
      <div className="gallery-pic">
        <img className="gallery-pic__img" src={this.props.image} alt=""/>
        <h2 className="gallery-pic__title">{this.props.title}</h2>
        <h3 className="gallery-pic__artist">{this.props.artist}</h3>
      </div>
    );
  }
}

export default LBPictures;