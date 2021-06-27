import React from 'react';
import { Link } from 'react-router-dom';
import { fetchCustomers } from '../../util/api';
import { useQuery } from 'react-query';
import Trow from './Trow';



const Customers = () => {

    const { data } = useQuery('customers', fetchCustomers);

    // console.log(data)


    return (
    <div className="content-page">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card-transparent card-block card-stretch card-height mb-3">
                        <div className="d-flex justify-content-between">
                            <div className="select-dropdown input-prepend input-append">
                               
                            </div>
                            {/* <div className="dashboard1-dropdown d-flex align-items-center">
                                
                            </div> */}
                        </div>
                    </div>
                </div>


                <div className="col-lg-12 col-xl-12">
                    <div className="card card-block card-stretch card-height files-table">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                                <h4 className="card-title">Customers</h4>
                            </div>
                            <div className="card-header-toolbar d-flex align-items-center">
                                <Link to="#" className=" view-more">
                                    Add New
                      </Link>
                            </div>
                        </div>
                        <div className="card-body pt-0">
                            <div className="table-responsive">
                                <table className="table mb-0 table-borderless tbl-server-info">
                                    <thead>
                                        <tr>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Contact Person</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Mobile</th>
                                            <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    
                                        
                                        {
                                            data ?  data.map(data => (
                                                <Trow data={data} />
                                            ))
                                            :
                                            "NO Data"
                                        }
                                        

                                        {/* add Trow component */}
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    </div>

    )

}

export default Customers;