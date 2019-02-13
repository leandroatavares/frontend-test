import React, { Component } from 'react'

export default class Avaliation extends Component {

  render() {
    const {positive, negative} = this.props.user;
    const like = Math.round((positive*100) / (positive + negative))
    const unlike = Math.round((negative*100) / (positive + negative))
    return (
      <div id='avaliation'>
        <div className="box-avaliation positive">
          <p className="avaliation--title">GOSTAM</p>
          <p className="avaliation--percentage">{`${like}%`}</p>
        </div>
        <div className="box-avaliation negative">
          <p className="avaliation--title">NÃO GOSTAM</p>
          <p className="avaliation--percentage">{`${unlike}%`}</p>
        </div>
      </div>
    )
  }
}
