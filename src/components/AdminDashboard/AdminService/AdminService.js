import React, { useState, useEffect } from 'react';
import { AiOutlineFileText } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import { RiAdminLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import '../../AdminDashboard/AdminService/AdminService.css';
import logo from '../../../logos/logo.png';
import Table from 'react-bootstrap/Table';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));



const AdminService = () => {
    const classes = useStyles();

    // const tableStyle = {
    //     border: "none",
    //     boxShadow: "none"
    //   };
    document.title="Admin Dashboard";

    const [order, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/showOrders')
        .then(response => response.json())
        .then(result => setOrders(result))
    }, [])

    const renderData = (datas, index) => {
        return (
            <tr keys={index}>
                <td>{datas.name}</td>
                <td>{datas.email}</td>
                <td>{datas.graphics}</td>
                <td>{datas.details}</td>
                <td>{datas.price}</td>
                <td>
                    <select class="custom-select" aria-label="Default select example">
                        <option class="special" value="1">Pending</option>
                        <option style={{backgroundColor: 'green', fontWeight: 'bold'}} value="2">Done</option>
                    </select>
                </td>
            </tr>
        )
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <Link to="/">
                        <img data-toggle="tooltip" data-placement="top" title="Click To Go Home" class="mt-4 ml-5" style={{width : '130px'}} src={logo} alt=""/>
                    </Link>
                    <div class="mt-5 ml-5 px-2 all-btn">
                        <button className="active"><AiOutlineFileText></AiOutlineFileText> Service List</button><br/>
                        <Link to="/adminAdd">
                            <button className="non-active"><IoMdAdd></IoMdAdd> Add Services</button><br/>
                        </Link>
                        <Link to="/makeAdmin">
                            <button className="non-active"><RiAdminLine></RiAdminLine> Make Admin</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-9 ml-5">
                    <div class="d-flex mt-5">
                        <h4 style={{color: '#7AB259'}} class="ml-4 mr-auto p-2">Service List</h4>
                        <img class="mb-2 ml-5" style={{width: '50px', height: '50px', borderRadius: '50%'}} src="" alt=""/>
                        <h5 style={{color: '#7AB259'}} class="ml-2 p-2 mr-5">Name</h5>
                    </div>
                    <div style={{overflowX: 'auto'}} className="allInput pt-4 pl-4 pr-4 table-container1">
                    <Table className="table-container">
                        <thead className="tableStyle">
                            <tr>
                            <th>Name</th>
                            <th>Email Id</th>
                            <th>Service</th>
                            <th>Project Details</th>
                            <th>Price</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.length === 0 && <div className={classes.root}>
                                <CircularProgress />
                              </div>
                            }           
                            {order.map(renderData)}
                        </tbody>
                    </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminService;