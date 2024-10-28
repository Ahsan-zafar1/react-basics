import React from 'react'
import PropTypes from 'prop-types' 
import { Link } from 'react-router-dom';  

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg border-bottom mb-4 bg-${props.mode} `} data-bs-theme={props.mode}>
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand" aria-current="page">{props.title}</Link>
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <li className="nav-item">
                <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                  {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">{props.aboutText}</Link>
                  {/* <a className="nav-link" href="#">{props.aboutText}</a> */}
              </li>
              {/* <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">{props.aboutText}</a>
              </li> */}
              </ul>
              <div className="d-flex">
                {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.blueToggle} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable blue mode</label>
                </div> */}
                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable mode</label>
                </div>
              </div>
          </div>
        </div>
    </nav>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired, // Brand name is required and must be a string
    aboutText: PropTypes.string.isRequired,
  };
  
//   Navbar.defaultProps = {
//     title: 'brandTitle', 
//     aboutText: 'About'
//   };
  
