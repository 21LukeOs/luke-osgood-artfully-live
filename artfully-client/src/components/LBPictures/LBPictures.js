import React from 'react';
import './LBPictures.scss';


class LBPictures extends React.Component {

  render() { 
    return (
      <div className="ldr-brd-pic">
        <img className="ldr-brd-pic__img" src={this.props.image} alt=""/>
        <h2 className="ldr-brd-pic__title">{this.props.title}</h2>
        <h3 className="ldr-brd-pic__artist">{this.props.artist}</h3>
      </div>
    );
  }
}

export default LBPictures;