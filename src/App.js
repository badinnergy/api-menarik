import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// importing from our own components
import NavBar from './components/navbar'
import HomePage from './components/homepage'
import ProfilePage from './components/profilepage'
import ChuckPage from './components/chuckpage'
import XKCDPage from './components/xkcdpage'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />

          <Route path={'/'} exact component={HomePage} />
          <Route path={'/profile'} exact component={ProfilePage} />
          <Route path={'/chucknorris'} exact component={ChuckPage} />
          <Route path={'/xkcd'} exact component={XKCDPage} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
