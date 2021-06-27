import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';
import { deleteJob } from '../../util/api';

const JobTableRow = ({data: {id, customer: {customer, email}, description , status } }) => {

    const {mutateAsync} = useMutation(deleteJob);
    const queryClient = useQueryClient();

    const remove = async () => {

        await mutateAsync(id)

        queryClient.invalidateQueries('jobs')
        // await deleteJob(id);
        // queryClient.invalidateQueries('jobs')

        console.log("remove function clicked")

    }

    return (
    <tr>
        <td>{id}</td>
        <td>{customer}</td>
        <td>{description}</td>
        <td>{status}</td>
        {/* <td>{mobile}</td> */}
        <td>{email}</td>
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
                    <Link className="dropdown-item" to="#">
                        <i className="ri-eye-fill mr-2"></i>View
                                  </Link>
                    <Link className="dropdown-item" onClick={remove} to="#">
                        <i className="ri-delete-bin-6-fill mr-2"  ></i>
                                    Delete
                                  </Link>
                    <Link className="dropdown-item" to="#">
                        <i className="ri-pencil-fill mr-2"></i>Edit
                                  </Link>
                    <Link className="dropdown-item" to="#">
                        <i className="ri-printer-fill mr-2"></i>
                                    Print
                                  </Link>
                    <Link className="dropdown-item" to="#">
                        <i className="ri-file-download-fill mr-2"></i>
                                    Download
                                  </Link>
                </div>
            </div>
        </td>
    </tr>
)
    }


export default JobTableRow;
