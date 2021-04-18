import React, { useState, useEffect } from 'react';
import '../Services/Services.css';
// import serviceData from '../ServicesData/Services.json';
import ServicesStyle from '../ServicesStyle/ServicesStyle';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


const Services = () => {
    const classes = useStyles();

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
                        service.length === 0 && <div className={classes.root}>
                        <LinearProgress />
                        <LinearProgress color="secondary" />
                      </div>
                    }
                    {
                        service.map(service => <ServicesStyle service={service} key={service.id}></ServicesStyle>)
                    }
                </div>
                {/* <button onClick={handle}>add</button> */}
            </div>
    );
};

export default Services;