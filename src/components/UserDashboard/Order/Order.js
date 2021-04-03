import React from 'react';
import logo from '../../../logos/logo.png';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdFeedback  } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import '../Order/Order.css';


const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row">
            <div className="col-md-3">
                <img class="mt-4 ml-5" style={{width : '130px'}} src={logo} alt=""/>
                <div class="mt-5 ml-5 px-2">
                    <p><FaCartPlus></FaCartPlus> Order</p>
                    <p><AiOutlineFileText></AiOutlineFileText> Service List</p>
                    <p><MdFeedback></MdFeedback> Review</p>
                </div>
            </div>
            <div className="col-md-9">
                <div class="d-flex mt-5">
                    <h4 style={{color: '#7AB259'}} class="ml-4 mr-auto p-2">Order</h4>
                    <h5 style={{color: '#7AB259'}} class="ml-5 p-2 mr-4">{loggedInUser.name}</h5>
                </div>
                <div className="allInput pt-4 pl-4">
                    <div class="mt-5">
                        <input style={{paddingTop: '8px', paddingBottom: '8px', paddingRight: '250px'}} placeholder="Your name" type="text" name="" id=""/>
                        <br/>
                        <input style={{marginTop: '10px', paddingTop: '8px', paddingBottom: '8px', paddingRight: '250px'}} placeholder="Your email address" type="text" name="" id=""/>
                        <br/>
                        <input style={{marginTop: '10px', paddingTop: '8px', paddingBottom: '8px', paddingRight: '250px'}} placeholder="Graphics Design" type="text" name="" id=""/>
                        <br/>
                        <input style={{marginTop: '10px', paddingTop: '25px', paddingBottom: '25px', paddingRight: '250px'}} placeholder="Project Details" type="text" name="" id=""/>
                        <br/>
                        <input style={{marginTop: '10px', paddingTop: '8px', paddingBottom: '8px'}} placeholder="Price" type="text" name="" id=""/>
                        <input type="file" id="file" />
                        <label for="file" class="btn-3">
                            <span><AiOutlineCloudUpload></AiOutlineCloudUpload>Upload Project File</span>
                        </label>
                        <br/>
                        <button type="button" class="btn btn-dark pl-4 pr-4 mt-2">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;