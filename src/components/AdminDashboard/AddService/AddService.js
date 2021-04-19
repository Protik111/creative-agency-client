import React, { useState } from 'react';
import { AiOutlineFileText, AiOutlineCloudUpload, AiOutlineArrowRight } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { RiAdminLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from '../../../logos/logo.png';
import '../../AdminDashboard/AddService/AddService.css';
import { useForm } from "react-hook-form";

const AddService = () => {
    document.title="Admin Dashboard";
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => {
    //     // console.log(data)
    //     fetch('https://boiling-cove-02558.herokuapp.com/adminAddService', {
    //         method: 'POST',
    //         headers: {'content-type': 'application/json'},
    //         body: JSON.stringify(data)
    //     })
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log(result);
    //     })
    // }

    const onSubmit = data => {
        const formData = new FormData()
            formData.append('file', file);
            formData.append('title', data.title);
            formData.append('description', data.description);

            fetch('https://boiling-cove-02558.herokuapp.com/adminAddService', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
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
                            <button className="active"><IoMdAdd></IoMdAdd> Add Services</button><br/>
                        <Link to="/makeAdmin">
                            <button className="non-active"><RiAdminLine></RiAdminLine> Make Admin</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-9 ml-5">
                    <div class="d-flex mt-5">
                        <h4 style={{color: '#7AB259'}} class="ml-4 mr-auto p-2">Add Service</h4>
                        <img class="mb-2 ml-5" style={{width: '50px', height: '50px', borderRadius: '50%'}} src="" alt=""/>
                        <h5 style={{color: '#7AB259'}} class="ml-2 p-2 mr-5">Name</h5>
                    </div>
                    <div className="allInput pt-4 pl-4 pr-4">
                    <div class="mt-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div>
                                    <div>
                                        <div className="form-group w-50">
                                            <label htmlFor=""><strong>Service Title</strong></label>
                                            <input style={{paddingTop: '20px', paddingBottom: '20px'}} placeholder="Enter Title" type="text" {...register('title', { required: true })} name="title" className="form-control" />
                                            {errors.graphics && <span className="text-danger">This field is required</span>}
                                        </div>
                                        <div className="form-group w-50">
                                            <label htmlFor=""><strong>Description</strong></label>
                                            <input style={{paddingTop: '50px', paddingBottom: '50px'}} placeholder="Enter Description" type="text" {...register('description', { required: true })} name="description" className="form-control" />
                                            {errors.graphics && <span className="text-danger">This field is required</span>}
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor=""><strong>Icon here<AiOutlineArrowRight></AiOutlineArrowRight></strong></label>
                                        <input onChange={handleFileChange} type="file" id="file" />
                                        <label for="file" class="btn-3 pl-4 pr-4">
                                            <span><AiOutlineCloudUpload></AiOutlineCloudUpload>Upload Image</span>
                                        </label>
                                    </div>
                                </div>
                                    <input style={{float : 'right'}} class="btn btn-success" type="submit" value="Send"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;