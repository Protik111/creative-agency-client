import React, { useState, useEffect } from 'react';
import '../Services/Services.css';
// import serviceData from '../ServicesData/Services.json';
import ServicesStyle from '../ServicesStyle/ServicesStyle';


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/showServices')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    // //inserting bulk data to Db
    // const handle = () =>{
    //     fetch('http://localhost:5000/addServices', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(serviceData)
    //     })
    // }
    return (
            <div>
                <h5 className="text-center mt">Provide Awesome <span style={{color: '#7AB259'}}>Services</span></h5>
                <div className="row  d-flex justify-content-around hover">
                    {
                        service.map(service => <ServicesStyle service={service} key={service.id}></ServicesStyle>)
                    }
                </div>
                {/* <button onClick={handle}>add</button> */}
            </div>
    );
};

export default Services;