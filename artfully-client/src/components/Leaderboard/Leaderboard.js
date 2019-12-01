import React from 'react';
import './Leaderboard.scss';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import pic4 from '../../assets/images/seaside-highway-night.jpg';
import pic5 from '../../assets/images/thunder-lightning.jpg';
import pic6 from '../../assets/images/winter-highway.jpg';
import LBPictures from '../LBPictures/LBPictures';




class Leaderboard extends React.Component {

  state = {
   pictures: [
      {
        id: "3094857",
        title: "Seaside Highway Night",
        artist: "Sir Winston",
        uploader: "blah",
        image: pic4
      },
      {
        id: "7965763",
        title: "Thunder and Lightning",
        artist: "Sir Winston",
        uploader: "blah",
        image: pic5
      },
      {
        id: "0987346",
        title: "Winter Highway",
        artist: "Sir Winston",
        uploader: "blah",
        image: pic6
      }
    ]
  }

  
  displayLeaders = () => {
    return this.state.pictures.map((picture) => {
      return <LBPictures {...picture} key={picture.id} />
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
      </div>
    );
  }
}

export default Leaderboard;