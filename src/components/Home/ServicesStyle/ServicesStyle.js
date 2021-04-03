import React from 'react';
import '../ServicesStyle/ServicesStyle.css';
import { Link } from 'react-router-dom';


const ServicesStyle = (props) => {
    const {id, title, description, image} = props.service;
    return (
            <div style={{border: 'none'}} class="card col-md-3 mt-5 pt-3">
            <Link to="/UserDashboard" className="link">
                <img class="mt-2 rounded mx-auto d-block" style={{width: '100px', height: '100px'}} src={image} alt="Card image cap"></img>
                <div class="card-body text-center">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </Link>
            </div>

    );
};

export default ServicesStyle;