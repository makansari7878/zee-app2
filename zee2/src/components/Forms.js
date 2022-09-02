import React, { Component } from 'react'

export class Forms extends Component {

    constructor(){
        super()
        this.state = {
            username : ""
        }
    }


    usernameChange = (event) => {
        this.setState({username: event.target.value})
    }

    onHandleSubmit = (e) =>{
        alert(`username is ${this.state.username}`)

    }
  render() {
    return (
      <div>
        <h2>Register</h2> 
        <br></br><br></br><br></br>
        <form onSubmit={this.onHandleSubmit}>
            <label> UserName </label> <br></br>
            <input type='text' value = {this.state.username} onChange ={this.usernameChange}></input><br></br> <br></br>
            <button type='submit'> SUBMIT</button> 

        </form>
        
        
        
        </div>
    )
  }
}

export default Forms