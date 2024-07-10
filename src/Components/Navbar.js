import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  Link,
} from "react-router-dom";

export class Navbar extends Component {


//   }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg  bg-body-dark "style={{backgroundColor:"grey"}}>
  <div className="container-fluid " style={{color: "white"}}>
    <Link className="navbar-brand " style={{color: "white"}} to="/">News Network</Link>
    <button className="navbar-toggler" style={{color: "white"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{color: "white"}}></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item" >
          <Link className="nav-link active" style={{color: "white"}} aria-current="page" to="/general">Home</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/business">Business</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/entertainment">Entertainment</Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/general">General</Link>
        </li> */}

        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/health">Health</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/science">Science</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/sports">Sports</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" style={{color: "white"}} to="/technology">Technology</Link>
        </li>

        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown
          </a> */}
          {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      
    </div>
  </div>
</nav>  
      </div>
    )
  }
}

export default Navbar
