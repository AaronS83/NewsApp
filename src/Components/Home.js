import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export class Home extends Component {
    constructor(){
        super()
        document.title = `NewsNetwork`
    }

  render() {
    return (
      <div>
        <h2 className="container text-center">Hello EveryOne</h2><br/><br/>
        <h4 className="container text-center">Welcome to News Network</h4>
        <p className="container text-center"> This is a React based project for that simulates a news Website and using the newsApi.org to make</p>
        <p className="container text-center"> We have used React concepts like React Props, React Router and class based components</p><br/><br/>
        <h1 className="container text-center">Please click on Home to go to general news</h1>
      </div>
    )
  }
}

export default Home
