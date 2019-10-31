import React, { Component } from 'react'

import xkcd from "../API/xkcd";

class XKCDPage extends Component {
    constructor() {
        super();

        this.state = {
            jokes: [],
        };
    }

    newJoke = async (event) => {
        event.preventDefault();

        await xkcd.get('/info.0.json')
        .then(res => console.log(res));
    }
    
    render() {
        console.log(this.state.jokes)
        return (
        <div style={div}>
            <h1>xkcd</h1>
            <div style={jokeContainer}>
                {/* <p>{this.state.jokes.value}</p> */}
            </div>
            <button style={button} onClick={event => this.newJoke(event)}>New Joke</button>
        </div>
        )
  }
}


const div = {
    textAlign: 'center',
    margin: 'auto',
}

const jokeContainer = {
    width: '50%',
    height: '70px',
    margin: 'auto',
    padding: '100px',
    border: '3px solid #3f51b5',
    fontSize: '20px',
}

const button = {
    position: 'absolute',
    left: '50%',
    bottom: '50%',
    backgroundColor: '#3f51b5', /* Green */
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
}

export default XKCDPage
