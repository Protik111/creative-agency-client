import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFileText } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { RiAdminLine } from 'react-icons/ri';
import logo from '../../../logos/logo.png';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
    document.title="Admin Dashboard";
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        fetch('https://boiling-cove-02558.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
        })
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Link to="/">
                        <img data-toggle="tooltip" data-placement="top" title="Click To Go Home" class="mt-4 ml-5" style={{width : '130px'}} src={logo} alt=""/>
                    </Link>
                    <div class="mt-5 ml-5 px-2 all-btn">
                        <Link to="/adminDashboard">
                            <button className="non-active"><AiOutlineFileText></AiOutlineFileText> Service List</button><br/>
                        </Link>
                        <Link to="/adminAdd">
                            <button className="non-active"><IoMdAdd></IoMdAdd> Add Services</button><br/>
                        </Link>
                            <button className="active"><RiAdminLine></RiAdminLine> Make Admin</button>
                    </div>
                </div>
                <div className="col-md-9 ml-5">
                    <div class="d-flex mt-5">
                        <h4 style={{color: '#7AB259'}} class="ml-4 mr-auto p-2">Make A Admin</h4>
                        <img class="mb-2 ml-5" style={{width: '50px', height: '50px', borderRadius: '50%'}} src="" alt=""/>
                        <h5 style={{color: '#7AB259'}} class="ml-2 p-2 mr-5">Name</h5>
                    </div>
                    <div className="allInput pt-4 pl-4 pr-4">
                    <div class="mt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div style={{display : 'flex'}}>
                                    <div className="form-group w-50">
                                        <label htmlFor=""><strong>Email</strong></label>
                                        <input style={{paddingTop: '20px', paddingBottom: '20px'}} placeholder="Enter Email" type="text" {...register('email', { required: true })} name="email" className="form-control" />
                                        {errors.graphics && <span className="text-danger">This field is required</span>}
                                    </div>
                                   <div class="ml-3" style={{marginTop: '33px'}}>
                                        <input class="btn btn-success" type="submit" value="Send"/>
                                   </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;