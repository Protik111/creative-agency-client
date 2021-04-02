import React from 'react';
import slack from '../../../logos/slack.png';
import google from '../../../logos/google.png';
import uber from '../../../logos/uber.png';
import netflix from '../../../logos/netflix.png';
import airbnb from '../../../logos/airbnb.png';

const Logo = () => {
    return (
        <div className="row mt-4">
            <div className="col-md-2 offset-md-1">
                <img style={{width: '140px', height:'30px'}} className="img-fluid mt-4 rounded mx-auto d-block" src={slack} alt=""/>
            </div>
            <div className="col-md-2">
                <img style={{width: '130px', height:'30px'}} className="img-fluid mt-4 rounded mx-auto d-block" src={google} alt=""/>
            </div>
            <div className="col-md-2">
                <img style={{width: '100px', height:'30px'}} className="img-fluid mt-4 rounded mx-auto d-block" src={uber} alt=""/>
            </div>
            <div className="col-md-2">
                <img style={{width: '130px', height:'35px'}} className="img-fluid mt-4 rounded mx-auto d-block" src={netflix} alt=""/>
            </div>
            <div className="col-md-2">
                <img style={{width: '150px', height:'35px'}} className="img-fluid mt-4 rounded mx-auto d-block" src={airbnb} alt=""/>
            </div>
        </div>
    );
};

export default Logo;