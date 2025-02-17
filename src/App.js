// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import Home from './Components/Home';
import LoadingBar from 'react-top-loading-bar'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5
  apiKey = process.env.REACT_APP_APIKEY

  state = {
    progress: 0
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Navbar/>
          <Routes>
          <Route 
              exact path='/'
              element={<Home/>}
            />
            <Route 
              exact path='/general'
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={this.pageSize} country={'in'} category={"general"}/>}
            />
            <Route 
              exact path='/business'
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={this.pageSize} country={'in'} category={"business"}/>}
            />
            <Route 
              exact path='/entertainment'
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={this.pageSize} country={'in'} category={"entertainment"}/>}
            />
            <Route 
              exact path='/health'
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={this.pageSize} country={'in'} category={"health"}/>}
            />
            <Route 
              exact path='/science'
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={this.pageSize} country={'in'} category={"science"}/>}
            />
            <Route 
              exact path='/sports'
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={this.pageSize} country={'in'} category={"sports"}/>}
            />
            <Route 
              exact path='/technology'
              element={<News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={this.pageSize} country={'in'} category={"technology"}/>}
            />
          </Routes>
          
        </BrowserRouter>
      </div>
    )
  }
}
