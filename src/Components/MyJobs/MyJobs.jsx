import React from 'react'
import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom'
import { fetchJobs } from '../../util/api';
import JobTableRow from '../ContentsWrapper/JobTableRow';
import {connect} from 'react-redux';


const MyJobs = ({user: {user}}) => {
    
    const { data } = useQuery('jobs', fetchJobs);
    const loggedInUserId = user.id; 
    const myJobs = data.filter(a => {
        return a.designers.some(b => {
            return b.id === loggedInUserId
        })
    });
    

    return (
        <div className="content-page">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-title">
                        <h4 className="card-title">Working On</h4>
                    </div>
                    <div className="card-transparent card-block card-stretch card-height mb-3">
                        <div className="d-flex justify-content-between"></div>
                        <div className="col-lg-12 col-xl-12">
                            <div className="card card-block card-stretch card-height files-table">
                                <div className="card-header d-flex justify-content-between">

                                </div>
                                <div className="card-body pt-0">
                                    <div className="table-responsive">
                                        <table className="table mb-0 table-borderless tbl-server-info">
                                            <thead>
                                                <tr className="active">
                                                    <th scope="col">Job number</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Description</th>
                                                    <th scope="col">Status</th>
                                                    {/* <th scope="col">Mobile</th> */}
                                                    {/* here its customer.customer.email */}
                                                    <th scope="col">Email</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {/* jobs table row */}
                                                {
                                                    myJobs ? myJobs.map(data => (
                                                        <JobTableRow key={data.id} data={data} />
                                                    )) :
                                                        "NO DATA"
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

    

}


const mapStateToProps = (state) => {

    return {
        ...state
    }
}

export default connect(mapStateToProps)(MyJobs)