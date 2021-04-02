import React from 'react';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <div className="footer-container row mt-5">
            <div className="col-md-5 footer-title">
                <h3 className="mt-5"><strong>Let us handle your <br/>project, proffesionally.</strong></h3>
                <p className="mt-2">with all written codes, we build amazing appps for all<br/> platforms, and web apps in general.</p>
            </div>
            <div className="col-md-5 mt-5 footer-input">
                <input style={{border: 'none', paddingTop: '8px', paddingBottom: '8px', paddingRight: '250px'}} type="text" name="" id=""  placeholder="Your email address"/><br/>
                <input style={{marginTop: '10px', border: 'none', paddingTop: '8px', paddingBottom: '8px', paddingRight: '250px'}} type="text" name="" id="" placeholder="Your name"/><br/>
                <input style={{marginTop: '10px', border: 'none', paddingTop: '20px', paddingBottom: '230px', paddingRight: '250px'}} type="text" name="" id="" placeholder="Your messages"/><br/>
                <button type="button" class="btn btn-dark mt-2 pl-4 pr-4">Send</button>
            </div>
        </div>
    );
};

export default Footer;