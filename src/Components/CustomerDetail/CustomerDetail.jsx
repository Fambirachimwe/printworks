import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { fetchCustomersByID } from "../../util/api";

const CustomerDetail = () => {

    const { id } = useParams();
    const { data, isLoading } = useQuery(['customerID', id], () => fetchCustomersByID(id));
    console.log(data)

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
                                            <div className="dropdown-toggle search-query">{data ? data.customer : ""}<i className="las la-angle-down ml-3"></i></div><span className="search-replace"></span>
                                            <span className="caret"></span>
                                        </label>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* put the contents here */}

                    <div className="col-lg-12">
                        <div className="card card-block card-stretch card-height">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h6 className="card-title">Details : </h6>
                                </div>
                            </div>

                            <div className="card-body">

                                <div className="d-flex flex-wrap align-items-center">
                                    <div className="col-lg-6 col-sm-6 p-0">

                                        <p className="mb-5">Address: {data ? data.address : ""}</p>
                                        <p className="mb-5">Contact Person:  {data ? data.contact_person : ""}</p>
                                        <p className="mb-5">Email: {data ? data.email : ""}</p>
                                        {/* <Link to="#">Try Now<i className="las la-arrow-right ml-2"></i></Link> */}
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>

                    <div className="col-lg-12">
                        <div className="card card-block card-stretch card-height">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">
                                    <h4 className="card-title">Jobs</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul className="list-inline p-0 mb-0 row align-items-center">


                                    {/* loop through the list of jobs  */}
                                    <li className="col-lg-6 col-sm-6">

                                        {
                                            data ? data.jobs.map(job => (

                                                <Link to={`/jobs/${job.id}`}>

                                                    <div data-load-file="file" data-load-target="#resolte-contaniner"  data-target="#exampleModal" data-title="Wireframe.docx" style={{ "cursor": "pointer" }} className="p-2 text-center border rounded">
                                                        <div>
                                                            <img src="../assets/images/layouts/mydrive/folder-2.png" className="img-fluid mb-1" alt="image2" />
                                                        </div>
                                                        <p className="mb-0">{job.description}</p>
                                                    </div>

                                                </Link>

                                            )): (<p>No jobs</p>)
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


export default CustomerDetail;