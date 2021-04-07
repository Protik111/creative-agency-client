import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import '../Order/Order.css';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdFeedback  } from 'react-icons/md';
import { Link } from 'react-router-dom';
import logo from '../../../logos/logo.png';

const Service = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div>
                <div className="row">
                <div className="col-md-2">
                    <Link to="/">
                        <img data-toggle="tooltip" data-placement="top" title="Click To Go Home" class="mt-4 ml-5" style={{width : '130px'}} src={logo} alt=""/>
                    </Link>
                    <div class="mt-5 ml-5 px-2 all-btn">
                        <Link to="userDashboard">
                            <button className="non-active"><FaCartPlus></FaCartPlus> Order</button><br/>
                        </Link>
                        <button className="active"><AiOutlineFileText></AiOutlineFileText> Service List</button><br/>
                        <Link to="/review">
                            <button className="non-active"><MdFeedback></MdFeedback> Review</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-9 ml-5">
                    <div class="d-flex mt-5">
                        <h4 style={{color: '#7AB259'}} class="ml-4 mr-auto p-2">Service List</h4>
                        <img class="mb-2 ml-5" style={{width: '50px', height: '50px', borderRadius: '50%'}} src={loggedInUser.image} alt=""/>
                        <h5 style={{color: '#7AB259'}} class="ml-2 p-2 mr-5">{loggedInUser.name}</h5>
                    </div>
                    <div className="allInput pt-4 pl-4">
                        <div class="mt-5">
                            <h3>Comming</h3>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Service;