import React from 'react';
import './UploadArt.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import PageTitle from '../PageTitle/PageTitle';
import Buttons from '../Buttons/Buttons';



class UploadArt extends React.Component {

  state = {
    selectedFile: null,
  }

  fileSelector = e => {
    this.setState({
      selectedFile: e.target.files[0]
    })
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    e.persist()
    const data = new FormData();
    data.append('file', this.state.selectedFile)
    data.append('upload_preset', 'artfully')
    data.append('public_id', e.target.title.value.trim().split(" ").join("-").toLowerCase())

    if (e.target.title.value === '' || e.target.artist.value === '' || this.state.selectedFile === null) {
      return;
    }

    axios.post('https://api.cloudinary.com/v1_1/dvyvmssx4/image/upload', data).then(response => {
      console.log(response.data);
      const upData = {
        title: e.target.title.value,
        artist: e.target.artist.value,
        image: `https://res.cloudinary.com/dvyvmssx4/image/upload/c_scale,w_1440/v${response.data.version}/${response.data.public_id}.${response.data.format}`
      }
      axios.post('http://localhost:8080/gallery', upData).then(response => {
        console.log(response);
        e.target.title.value = '';
        e.target.artist.value = '';

      }).catch(err => {
      console.error('Post error', err);
      })
      
    }).catch(err => {
      console.error('Post error', err);
    })
  }

  render() { 
    return (
      <div className="post">
        <div className="post__logo">
          <Logo />
        </div>
        <div className="post__title">
          <PageTitle text="Post Your Photograph" />
        </div>
        <div className="post__post-pic">
          <form className="post__upload-form" id="picForm" onSubmit={this.handleSubmit} >
            <label htmlFor="title" className="post__upload-title-label post__upload-label" >Title</label>
              <input type="text" id="title" name="title" className="post__upload-title post__upload-input"  />
            <label htmlFor="artist" className="post__upload-artist-label post__upload-label" >Artist Name</label>
              <input type="text" id="artist" name="artist" className="post__upload-artist post__upload-input"  />
            <label htmlFor="file" className="post__upload-file-label post__upload-label" >Image To Upload</label>
            <input type="file" id="file" className="post__upload-file" onChange={this.fileSelector} />
            <button type="submit" className="post__upload-submit" form="picForm" >Submit</button>
          </form>
        </div>
        <div className="post__nav">
          <Link to="/leaderboard" className="post__leaderboard">
            <Buttons text="LEADERBOARD" />
          </Link>
          <Link to="/gallery" className="leaderboard__vote">
            <Buttons text="VOTE" />
          </Link>
        </div>
      </div>
    );
  }
}

export default UploadArt;