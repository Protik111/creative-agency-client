import React from 'react';
import logo from '../../../logos/logo.png';
import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineFileText, AiOutlineCloudUpload } from 'react-icons/ai';
import { MdFeedback  } from 'react-icons/md';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import '../Order/Order.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from "react-hook-form";


const Order = () => {
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
                        <button className="active"><FaCartPlus></FaCartPlus> Order</button><br/>
                        <Link to="/service">
                            <button className="non-active"><AiOutlineFileText></AiOutlineFileText> Service List</button><br/>
                        </Link>
                        <Link to="/review">
                            <button className="non-active"><MdFeedback></MdFeedback> Review</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-9 ml-5">
                    <div class="d-flex mt-5">
                        <h4 style={{color: '#7AB259'}} class="ml-4 mr-auto p-2">Order</h4>
                        <h5 style={{color: '#7AB259'}} class="ml-5 p-2 mr-5">{loggedInUser.name}</h5>
                    </div>
                    <div className="allInput pt-4 pl-4">
                        <div class="mt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group w-50">
                                    <input style={{paddingTop: '20px', paddingBottom: '20px'}} placeholder="Your name" type="text" {...register('name', { required: true })} name="name" className="form-control" />
                                    {errors.name && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group w-50">
                                    <input style={{paddingTop: '20px', paddingBottom: '20px'}} placeholder="Your email address" type="text" {...register('email', { required: true })} name="email" className="form-control" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group w-50">
                                    <input style={{paddingTop: '20px', paddingBottom: '20px'}} placeholder="Graphics Design" type="text" {...register('graphics', { required: true })} name="graphics" className="form-control" />
                                    {errors.graphics && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group w-50">
                                    <input style={{paddingTop: '50px', paddingBottom: '50px'}} placeholder="Project Details" type="text" {...register('details', { required: true })} name="details" className="form-control" />
                                    {errors.graphics && <span className="text-danger">This field is required</span>}
                                </div>
                                <div class="d-flex">
                                    <div className="form-group w-25">
                                        <input style={{paddingTop: '20px', paddingBottom: '20px'}} placeholder="$Price" type="number" {...register('price', { required: true })} name="price" className="form-control" />
                                        {errors.graphics && <span className="text-danger">This field is required</span>}
                                    </div>
                                    <div>
                                        <input type="file" id="file" />
                                        <label for="file" class="btn-3 pl-4 pr-4">
                                            <span><AiOutlineCloudUpload></AiOutlineCloudUpload>Upload Project File</span>
                                        </label>
                                    </div>
                                </div>
                                    <input class="btn btn-dark" type="submit" value="Send"/>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;