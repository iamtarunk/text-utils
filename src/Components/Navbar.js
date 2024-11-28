import React from 'react'
// import { Link } from 'react-router-dom';

export default function Navbar(props){
    return (
        <>
        <nav className={`navbar navbar-expand-lg bg-${props.style} navbar-${props.style} px-4`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/textform">{props.title}</Link> */}
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse bg-${props.style}`} id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/">About Us</a>
                    </li>
                </ul>
                </div>
                <div className={`form-check form-switch text-${props.style ==="light"?"dark":"light"}`}>
                    <input className="form-check-input" type="checkbox" onClick={props.clickTheme} id="flexSwitchCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme}</label>
                </div>
            </div>
        </nav>
        </>
    )
}