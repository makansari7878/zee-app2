import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {

    constructor(){
        super()
        this.helloParent = this.helloParent.bind(this)
    }

    helloParent(){
        alert("Welcome  dude")
    }

  render() {
    return (
      <div>Parent

        <Child helloParent = {this.helloParent}></Child>
      </div>

    )
  }
}

export default Parent