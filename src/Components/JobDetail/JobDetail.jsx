import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import {fetchJobsByID} from "../../util/api";

// useQuery





const JobDetail = () => {

    const { id } = useParams(); 
    const { data } = useQuery(['jobsbyID', id] , () =>  fetchJobsByID(id));
    // console.log(data.supplieds[0].files)
    


    return (
        <div className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
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
                            </div>
                            <div className="card-body">
                                <ul className="list-inline p-0 mb-0 row align-items-center">
                                    <li className="col-lg-6 col-sm-6 mb-3 mb-sm-0">

                                        {/* loop through the list of supplied art work  */}

                                        {data ? data.supplieds.map(data => (
                                            <Link to="#" onClick={() => window.open(`http://localhost:1337${data.files[0].url}`, "_blank")}>
                                            <div data-load-file="file" data-load-target="#resolte-contaniner"   data-target="#exampleModal" data-title="Supplied Artworks" style={{ "cursor": "pointer" }} className="p-2 text-center border rounded">
                                                <div>
                                                    <img src="../assets/images/layouts/mydrive/folder-1.png" className="img-fluid mb-1" alt="image1" />
                                                </div>
                                                <p className="mb-0"></p>
                                            </div>
                                        </Link>
                                        )) : ""}

                                        
                                        
                                    </li>
                                    {/* <li className="col-lg-6 col-sm-6">
                                        <div data-load-file="file" data-load-target="#resolte-contaniner" data-url={""} data-toggle="modal" data-target="#exampleModal" data-title="Wireframe.docx" style={{ "cursor": "pointer" }} className="p-2 text-center border rounded">
                                            <div>
                                                <img src="../assets/images/layouts/mydrive/folder-2.png" className="img-fluid mb-1" alt="image2" />
                                            </div>
                                            <p className="mb-0">Wireframe</p>
                                        </div>

                                    </li> */}
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
                            </div>
                            <div className="card-body">
                                <ul className="list-inline p-0 mb-0 row align-items-center">
                                    <li className="col-lg-6 col-sm-6 mb-3 mb-sm-0">

                                        
                                        <div data-load-file="file" data-load-target="#resolte-contaniner" data-url={data ? `http://localhost:1337${data.supplieds[0].files[0].url}`: ""} data-toggle="modal" data-target="#exampleModal" data-title={ "Artwork"} style={{ "cursor": "pointer" }} className="p-2 text-center border rounded">
                                            <div>
                                                <img src="../assets/images/layouts/mydrive/folder-1.png" className="img-fluid mb-1" alt="image1" />
                                            </div>
                                            <p className="mb-0">Designed</p>
                                        </div>
                                    </li>
                                    <li className="col-lg-6 col-sm-6">
                                        <div data-load-file="file" data-load-target="#resolte-contaniner" data-url={""} data-toggle="modal" data-target="#exampleModal" data-title="Wireframe.docx" style={{ "cursor": "pointer" }} className="p-2 text-center border rounded">
                                            <div>
                                                <img src="../assets/images/layouts/mydrive/folder-2.png" className="img-fluid mb-1" alt="image2" />
                                            </div>
                                            <p className="mb-0">Printing</p>
                                        </div>

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