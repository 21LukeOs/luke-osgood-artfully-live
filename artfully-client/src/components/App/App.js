import React from 'react';
import './App.scss';
import Leaderboard from '../Leaderboard/Leaderboard';

class App extends React.Component {

  render() { 
    return (
      <div className="app">
      <Leaderboard />
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={} />
          <Route path="" component={} />
          <Route path="" component={} />

          <Route path="" component={} />
        </Switch>
      </BrowserRouter> */}
      </div>
    )
  }
}

export default App;
