import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteJob, updateJobStatus } from '../../util/api';
import { CircularProgress } from '@material-ui/core'

const JobTableRow = ({ user, data: { id, customer: { customer, email }, description, status } }) => {

    const { mutateAsync } = useMutation(deleteJob);
    const mutation = useMutation(updateJobStatus)
    const queryClient = useQueryClient();

    const remove = async () => {
        await mutateAsync(id)
        queryClient.invalidateQueries('jobs')
    }

    const updateJob = async (id) => {
        const data = { status: "completed" }
        mutation.mutate({ ...data, id });
        await queryClient.invalidateQueries('jobs');
    }

    const updateJobToActive = async(id) => {
        const data = { status: "active" }
        mutation.mutate({ ...data, id });
        await queryClient.invalidateQueries('jobsByID');
    }

    console.log(user.user.role.type);

    return (
        <tr>

            {
                mutation.isLoading ? (
                    <CircularProgress />
                ) : (

                    <>
                        <td>{id}</td>
                        <td>{customer}</td>
                        <td>{description}</td>
                        <td>{status}</td>
                        <td>{email}</td>

                        {/* {user ? console.log(user.user.role.type) :  " no user" } */}
                        <td>
                            <div className="dropdown">
                                <span
                                    className="dropdown-toggle"
                                    id="dropdownMenuButton7"
                                    data-toggle="dropdown"
                                >
                                    <i className="ri-more-fill"></i>
                                </span>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="dropdownMenuButton7"
                                >
                                    <Link className="dropdown-item" to={`/jobs/${id}`}>
                                        <i className="ri-eye-fill mr-2"></i>View
                                    </Link>
                                    <Link className="dropdown-item" onClick={remove} to="#">
                                        <i className="ri-delete-bin-6-fill mr-2"  ></i>
                                        Delete
                                    </Link>
                                 
                                        {
                                            user.user.role.type === "designer" ? (
                                                <>
                                                    <Link className="dropdown-item" to="#" onClick={() => updateJobToActive(id)} >
                                                        <i className="ri-pencil-fill mr-2"></i>Update Status
                                                </Link>

                                                </>

                                            ) : (
                                                <>
                                                    <Link className="dropdown-item" to="#" >
                                                        <i className="ri-pencil-fill mr-2"></i>'Edit'
                                                </Link>

                                                </>

                                            )
                                        }






                                    <Link onClick={() => updateJob(id)} className="dropdown-item" to="#">
                                        {
                                            user ? (
                                                user.user.role.type === "printer" ? (

                                                    <>
                                                        <i  className="ri-printer-fill mr-2"></i>
                                            Update to completed 
                                            {/* {console.log(id)} */}

                                                    </>
                                                ) : (null)
                                            ) : (null)

                                        }

                                    </Link>

                                    {/* <Link className="dropdown-item" to="#">
                                        <i className="ri-file-download-fill mr-2"></i>
                                        Download
                                    </Link> */}
                                </div>
                            </div>

                        </td>

                    </>
                )
            }


        </tr>
    )
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}


export default connect(mapStateToProps)(JobTableRow);
