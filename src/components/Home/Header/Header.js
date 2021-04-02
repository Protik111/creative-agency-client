import React from 'react';
import logo from '../../../logos/logo.png';
import '../Header/Header.css';
import frame from '../../../logos/Frame.png';

const Header = () => {
    return (
            <div className="header">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <img class="mt-4 ml-5" style={{width : '130px'}} src={logo} alt=""/>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end mr-5" id="navbarSupportedContent">
                            <ul style={{fontSize: '15px'}} class="navbar-nav ml-auto">
                                <li class="nav-item px-3">
                                    <a class="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link" href="#">Our Portfolio</a>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link" href="#">Our Team</a>
                                </li>
                                <li class="nav-item px-3">
                                    <a class="nav-link" href="#">Contact Us</a>
                                </li>
                                <button type="button" class="btn btn-dark pl-4 pr-4">Login</button>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-4 header-title">
                        <h3 className="mt-5"><strong>Let's Grow Your <br/> Brand To The <br/> Next Level</strong></h3>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur.<br/>Iure assumenda odit reiciendis <br/>aspernatur aliquam quia officiis.</p>
                        <button type="button" class="btn btn-dark mt-2 pl-4 pr-4">Hire Us</button>
                    </div>
                    <div className="col-md-7">
                        <img style={{width: '500px'}} className="img-fluid" src={frame} alt=""/>
                    </div>
                </div>
            </div>
    );
};

export default Header;