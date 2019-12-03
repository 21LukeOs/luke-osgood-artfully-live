import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from '../Landing/Landing';
import Leaderboard from '../Leaderboard/Leaderboard';
import Gallery from '../Gallery/Gallery';
import UploadArt from '../UploadArt/UploadArt';


class App extends React.Component {

  render() { 
    return (
      <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/post" component={UploadArt} />
        </Switch>
      </BrowserRouter>
      </div>
    )
  }
}

export default App;
