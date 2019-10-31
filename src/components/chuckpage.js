import React, { Component } from 'react'

import chuck from "../API/chucknorris";

class ChuckPage extends Component {
    constructor() {
        super();

        this.state = {
            jokes: [],
        };
    }

    newJoke = async (event) => {
        event.preventDefault();

        await chuck.get('/random')
        .then(res => {
            const jokes = res.data;
            this.setState({ jokes });
        });
    }
    
    render() {
        
        return (
        <div style={div}>
            <h1>Chuck Norris Jokes!</h1>
            <div style={jokeContainer}>
                <p>{this.state.jokes.value}</p>
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

export default ChuckPage
