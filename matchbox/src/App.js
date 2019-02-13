import React, { Component } from 'react';
import './styles/index.css';

import Ranking from './components/Ranking';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Ranking />
        <p className="site-info">front-end test / <a href="http://matchboxbrasil.com">matchboxbrasil.com</a></p>
      </div>
    );
  }
}

export default App;
