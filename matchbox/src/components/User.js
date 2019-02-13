import React, { Component } from 'react';
import Avaliation from './Avaliation';

export default class User extends Component {
  render() {
    const {user} = this.props;
    
    return (
      <div id='user'>
        <div className="avatar-box">
          <img src={user.picture} alt={`avatar ${user.name}`}/>
          <p className="position">{this.props.index + 1}</p>
        </div>
        <div className="info-box">
          <p className="name">{user.name}</p>
          <p className="description">{user.description}</p>
        </div>
        <Avaliation user={user} />
      </div>
    )
  }
}
