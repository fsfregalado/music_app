import React, { Component } from 'react';
import './App.css';
import MusicList from './containers/MusicList/MusicList';
import MusicInfo from './containers/MusicInfo/MusicInfo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={MusicList}/>
              <Route exact path="/music/:id" component={MusicInfo}/>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
