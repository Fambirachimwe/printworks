import React from 'react';
import { useQuery } from 'react-query';
import { Link } from "react-router-dom";
import { fetchFiles } from "../../util/api"



const Files = () => {

  const { data } = useQuery('files', fetchFiles);
  
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
                      <div className="dropdown-toggle search-query">
                        Files<i className="las la-angle-down ml-3"></i>
                      </div>
                      <span className="search-replace"></span>
                      <span className="caret"></span>
                    </label>

                  </div>
                </div>
                <div className="dashboard1-dropdown d-flex align-items-center">
                  <div className="dashboard1-info">
                    <Link
                      to="#"
                      className="collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-arrow-down-s-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-12">
            <div className="card card-block card-stretch card-height files-table">
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  {/* <h4 className="card-title">Jobs</h4> */}

                  {/* all files from the  artweork , pdf, suplied tables */}
                </div>
                <div className="card-header-toolbar d-flex align-items-center">
                  <Link to="#" className=" view-more">
                    View All
                      </Link>
                </div>
              </div>
              <div className="card-body pt-0">
                <div className="table-responsive">
                  <table className="table mb-0 table-borderless tbl-server-info">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Last Edit</th>
                        <th scope="col">Extension</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>

                      {
                        // console.log(data),
                        
                        data ===  undefined || data.statusCode === 403 ? (null) : data.map(file => (

                          <>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center">
                                  <div className="icon-small bg-danger rounded mr-3">
                                    <i className="ri-file-excel-line"></i>
                                  </div>
                                  <div
                                    data-load-file="file"
                                    data-load-target="#resolte-contaniner"
                                    data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                                    data-toggle="modal"
                                    data-target="#exampleModal"
                                    data-title="Weekly-report.pdf"
                                    style={{ "cursor": "pointer" }}
                                  >
                                    {file.name}
                                  </div>
                                </div>
                              </td>
                              {/* <td>Me</td> */}
                              <td>{file.updated_at}</td>
                              <td>{file.ext}</td>

                            </tr>
                          </>
                        ))
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
  )
}


export default Files