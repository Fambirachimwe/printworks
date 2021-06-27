import React from 'react';
import {Link} from 'react-router-dom';


const Trow = ({data: {customer, contact_person, email, mobile}}) => (

    <tr className="active">
        <td>
            <div className="d-flex align-items-center">
                <div className="icon-small bg-primary rounded mr-3">
                    <i className="ri-file-download-line"></i>
                </div>
                <div
                    data-load-file="file"
                    data-load-target="#resolte-contaniner"
                    data-url="#"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    data-title="data_title"
                    style={{ "cursor": "pointer" }}
                >
                    {customer}
                                </div>
            </div>
        </td>

        {/* {console.log(customer)} */}
        <td>{contact_person}</td>
        <td>{email || ""}</td>
        <td>{mobile || ""}</td>
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
                    
                    <Link className="dropdown-item" to="#">
                        <i className="ri-pencil-fill mr-2"></i>Edit
                                  </Link>
                    
                </div>
            </div>
        </td>
    </tr>

)


export default Trow