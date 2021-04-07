import React, { useContext } from 'react';
import logo from '../../../logos/logo.png';
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import '../Order/Order.css';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdFeedback  } from 'react-icons/md';
import { Link } from 'react-router-dom';


const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.image = loggedInUser.image;
        // console.log(data)
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('Review added');
            }
        })
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
                        <Link to="/service">
                            <button className="non-active"><AiOutlineFileText></AiOutlineFileText> Service List</button><br/>
                        </Link>
                        <button className="active"><MdFeedback></MdFeedback> Review</button>
                    </div>
                </div>
                <div className="col-md-9 ml-5">
                    <div class="d-flex mt-5">
                        <h4 style={{color: '#7AB259'}} class="ml-4 mr-auto p-2">Review</h4>
                        <img class="mb-2 ml-5" style={{width: '50px', height: '50px', borderRadius: '50%'}} src={loggedInUser.image} alt=""/>
                        <h5 style={{color: '#7AB259'}} class="ml-2 p-2 mr-5">{loggedInUser.name}</h5>
                    </div>
                    <div className="allInput pt-4 pl-4">
                        <div class="mt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group w-50">
                                    <input style={{paddingTop: '20px', paddingBottom: '20px'}} placeholder="Your Name" type="text" {...register('name', { required: true })} name="name" className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group w-50">
                                    <input style={{paddingTop: '20px', paddingBottom: '20px'}} placeholder="Company's Name/Designation" type="text" {...register('designation', { required: true })} name="designation" className="form-control" />
                                    {errors.designation && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group w-50">
                                    <input style={{paddingTop: '50px', paddingBottom: '50px'}} placeholder="Description" type="text" {...register('description', { required: true })} name="description" className="form-control" />
                                    {errors.description && <span className="text-danger">This field is required</span>}
                                </div>
                                    <input class="btn btn-dark" type="submit" />
                            </form>
                            {/* <br/>
                            <input style={{marginTop: '10px', paddingTop: '8px', paddingBottom: '8px', paddingRight: '250px'}} placeholder="Your email address" type="text" name="" id=""/>
                            <br/>
                            <input style={{marginTop: '10px', paddingTop: '8px', paddingBottom: '8px', paddingRight: '250px'}} placeholder="Graphics Design" type="text" name="" id=""/>
                            <br/> */}
                            {/* <input style={{marginTop: '10px', paddingTop: '25px', paddingBottom: '25px', paddingRight: '250px'}} placeholder="Project Details" type="text" name="" id=""/>
                            <br/>
                            <input style={{marginTop: '10px', paddingTop: '8px', paddingBottom: '8px'}} placeholder="Price" type="text" name="" id=""/>
                            <input type="file" id="file" />
                            <label for="file" class="btn-3">
                                <span><AiOutlineCloudUpload></AiOutlineCloudUpload>Upload Project File</span>
                            </label>
                            <br/>
                            <button type="button" class="btn btn-dark pl-4 pr-4 mt-2">Send</button> */}
                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Review;