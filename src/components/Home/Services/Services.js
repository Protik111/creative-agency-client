import React from 'react';
import '../Services/Services.css';
import serviceData from '../ServicesData/Services.json';
import ServicesStyle from '../ServicesStyle/ServicesStyle';

const Services = () => {
    return (
        <div>
            <h5 className="text-center mt">Provide Awesome <span style={{color: '#7AB259'}}>Services</span></h5>
            <div className="row  d-flex justify-content-around hover">
                {
                    serviceData.map(service => <ServicesStyle service={service} key={service.id}></ServicesStyle>)
                }
            </div>
        </div>
    );
};

export default Services;