
import React, {useState} from 'react';
import Modal from "../Modal/Modal";
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import {fetchJobsByID} from "../../util/api";
// import { fileTypes } from '../../util/constants';


const JobDetail = () => {

    const { id } = useParams(); 
    const { data, isLoading } = useQuery(['jobsbyID', id] , () =>  fetchJobsByID(id));
    // console.log(data)
    
    const [show, setShow] = useState(false);
    const [fileType, setType] = useState("");
    const [title, setTitle] = useState("");
    


    return (
        <div className="content-page">
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <Modal show={show} title={title} setShow={setShow} id={id} type={fileType} />
                        <div className="card-transparent card-block card-stretch card-height mb-3">
                            <div className="d-flex justify-content-between">
                                <div className="select-dropdown input-prepend input-append">
                                    <div className="btn-group">
                                        <label data-toggle="dropdown">
                                            <div className="dropdown-toggle search-query">Job Number: {data ? data.id: ""}<i className="las la-angle-down ml-3"></i></div><span className="search-replace"></span>
                                            <span className="caret"></span>
                                        </label>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card card-block card-stretch card-height iq-welcome" >
                            <div className="card-body property2-content">
                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="col-lg-6 col-sm-6 p-0">
                                        <h3 className="mb-3">{data ? data.customer.customer : ""}</h3>
                                        <p className="mb-5">{data ? data.description: ""}</p>
                                        <p className="mb-5">Size: {data ? data.size : ""}</p>
                                        <p className="mb-5">Quantity: {data ? data.quantity : ""}</p>
                                        <p className="mb-5">Stock: {data ? data.stock: ""}</p>
                                        {/* <Link to="#">Try Now<i className="las la-arrow-right ml-2"></i></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card card-block card-stretch card-height">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Supplied Artwork</h4>
                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">
                                    <Link to="#" onClick={() => {
                                        setShow(true);
                                        setType("supplied");
                                        setTitle("Add Supplied Artwork")
                                        
                                        }}  className=" view-more">
                                        Add New
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline p-0 mb-0 row align-items-center">
                                    <li className="col-lg-6 col-sm-6 mb-3 mb-sm-0">

                                        {/* loop through the list of supplied art work  */}

                                        {
                                            isLoading ? (<p>Loading</p>) : (
                                                null
                                            ),

                                            data ? (
                                                data.supplieds.map(doc => (
                                                    // console.log(doc.file_url),
                                                    <div key={doc.id} onClick={() => window.open(`http://localhost:1337${doc.file_url}`, "_blank")} data-load-file="file"  style={{ "cursor": "pointer" }} >
                                                        <div>
                                                            <img src="../assets/images/layouts/mydrive/folder-2.png" className="img-fluid mb-1" alt="image2" />
                                                        </div>
                                                        <p className="mb-0">{doc.name}</p>
                                                    </div>
                                                ))
                                                
                                            ) : ("")                                         
                                        }
 
                                    </li> 
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card card-block card-stretch card-height">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Artwork</h4>
                                </div>

                                <div className="card-header-toolbar d-flex align-items-center">
                                    <Link to="#" onClick={() => {
                                        setShow(true);
                                        setType("artwork");
                                        setTitle("Add Designer Artwork");
                                        
                                        }} className=" view-more">
                                        Add New
                                    </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline p-0 mb-0 row align-items-center">

                                    {/* loop through the list of artwork */}
                                    <li className="col-lg-6 col-sm-3 mb-3 mb-sm-0">
                                        {
                                            data ? (
                                                data.artworks.map(doc => (
                                                    

                                                    <div key={doc.id} onClick={() => window.open(`http://localhost:1337${doc.file_url}`, "_blank")}  data-title={"Artwork"} style={{ "cursor": "pointer" }} className="p-2 text-center border rounded">
                                                        <div>
                                                            <img src="../assets/images/layouts/mydrive/folder-1.png" className="img-fluid mb-1" alt="image1" />
                                                        </div>
                                                        {/* <p className="mb-0">{doc.name}</p> */}
                                                    </div>
                                                ))
                                                
                                            ) : ("00")      
                                        }
                                    </li>    
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12">
                        <div className="card card-block card-stretch card-height">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Printing</h4>
                                </div>

                                <div className="card-header-toolbar d-flex align-items-center">
                                    <Link to="#" onClick={() => {
                                        setShow(true);
                                        setType("printing");
                                        setTitle("Add Final Printing Artwork");
                                        
                                        }} className=" view-more">
                                        Add New
                                </Link>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline p-0 mb-0 row align-items-center">

                                    {/* loop through the list of printing */}
                                    <li className="col-lg-6 col-sm-6">

                                        {
                                            data ? (
                                                data.printing_files.map(doc => (
                                                    

                                                    <div key={doc.id} onClick={() => window.open(`http://localhost:1337${doc.file_url}`, "_blank")} data-load-file="file" data-load-target="#resolte-contaniner"  data-title={"Artwork"} style={{ "cursor": "pointer" }} className="p-2 text-center border rounded">
                                                        <div>
                                                            <img src="../assets/images/layouts/mydrive/folder-1.png" className="img-fluid mb-1" alt="image1" />
                                                        </div>
                                                        <p className="mb-0">{doc.name}</p>
                                                    </div>
                                                ))
                                                
                                            ) : (null)      
                                        }

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>

    )
}


export default JobDetail;