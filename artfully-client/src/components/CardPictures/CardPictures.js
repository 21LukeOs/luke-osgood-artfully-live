import React from 'react';
import './CardPictures.scss';


class CardPictures extends React.Component {

  render() { 
    return (
      <div className="card-pic">
        <h3 className="card-pic__vote-bid">{this.props.type}: {this.props.number}</h3>        
        <img className={this.props.class} src={this.props.image} alt="" id={this.props.id} onClick={this.props.onclick} />
        <h2 className="card-pic__title">{this.props.title}</h2>
        <h3 className="card-pic__artist">{this.props.artist}</h3>
      </div>
    );
  }
}

export default CardPictures;