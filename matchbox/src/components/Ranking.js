import React, { Component } from 'react';
import '../styles/index.css';
import logo from '../images/matchbox_logo.png';
import userJSON from '../matchboxbrasil.json';

import User from '../components/User';

export default class Ranking extends Component {
  componentWillMount() {
    userJSON.data.sort(function(a, b){return Math.round((a.positive*100) / (a.positive + a.negative)) - 
                                            Math.round((b.positive*100) / (b.positive + b.negative))}).reverse()
  }
  render() {
    return (
      <div id='ranking'>
        <img className='logo' src={logo} alt='Matchbox logo' />
        <h1 className="title">ranking</h1>
        <div className="ranking-box">
          {userJSON.data.map((user, i) => (
            <User key={user.__id}  user={user} index={i} />
          ))}
        </div>
      </div>
    )
  }
}
