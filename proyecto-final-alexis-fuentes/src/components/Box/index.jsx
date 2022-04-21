import React, { Component } from 'react'
import './Box.css';

export class Box extends Component {
  render() {
      console.log(this.props);
    return (
      <div className='box' >
            {this.props.titulo}
            {/* {this.children} */}
      </div>
      
    )
  }
}

export default Box