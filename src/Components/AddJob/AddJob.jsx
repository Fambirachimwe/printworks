import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { fetchCustomers } from '../../util/api';
import JobForm from './JobForm';


const AddJob = () => {
    const { data } = useQuery('customers', fetchCustomers);
    
    return (
        <div className="content-page">
            <div className="container-fluid">
                <h4 className="card-title">Create New Job </h4>
                <div className="row">


                    <div className="col-lg-12 col-xl-12">
                        <div className="card card-block card-stretch card-height files-table">
                            <div className="card-header d-flex justify-content-between">
                                <div className="header-title">

                                </div>
                                <div className="card-header-toolbar d-flex align-items-center">


                                    {/* New Job Form here  */}

                                {/* Description
                                quantity
                                size
                                stock 
                                cover stock
                                textstock
                                status /////
                                customer */}

                                {/* JobForm Here */}
                                <JobForm data={data} />



                                    

                                </div>
                            </div>
                            <div className="card-body pt-0">

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default AddJob;
