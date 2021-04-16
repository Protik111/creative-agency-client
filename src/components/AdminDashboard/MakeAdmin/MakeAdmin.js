import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineFileText } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { RiAdminLine } from 'react-icons/ri';
import logo from '../../../logos/logo.png';


const MakeAdmin = () => {
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

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;