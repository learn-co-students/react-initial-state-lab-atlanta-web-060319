// your Bomb code here!
import React, { Component } from 'react';




export default class Bomb extends Component{
    constructor(props){
        super(props)
        this.state ={
            secondsLeft: this.props.initialCount
        }
    }

    bombCountDown = () => {
       if (this.state.secondsLeft === 0){
            return "Boom!"
        } else if (this.state.secondsLeft > 0 ){
            return `${this.state.secondsLeft} seconds left before I go boom!`
        }
    }

    

    render(){
        return(
            <div>
                {this.bombCountDown()}
            </div>
        )
    }


   
}