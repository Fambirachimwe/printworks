import React from 'react';
import {Link} from "react-router-dom"


const Files = () => (
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
                      <th scope="col">Members</th>
                      <th scope="col">Last Edit</th>
                      <th scope="col">Size</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
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
                            Weekly-report.pdf
                                </div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>jan 21, 2020 me</td>
                      <td>02 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton6"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton6"
                          >
                            <Link className="dropdown-item" to="#">
                              <i className="ri-eye-fill mr-2"></i>View
                                  </Link>
                            <Link className="dropdown-item" to="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
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
                    <tr className="active">
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-primary rounded mr-3">
                            <i className="ri-file-download-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.pdf"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="VueJs.pdf"
                            style={{ "cursor": "pointer" }}
                          >
                            VueJs.pdf
                                </div>
                        </div>
                      </td>
                      <td>Poul Molive</td>
                      <td>jan 25, 2020 Poul Molive</td>
                      <td>64 MB</td>
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
                              <i className="ri-delete-bin-6-fill mr-2"></i>
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
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-info rounded mr-3">
                            <i className="ri-file-excel-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.docx"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="Milestone.docx"
                            style={{ "cursor": "pointer" }}
                          >
                            Milestone.docx
                                </div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>30 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton8"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton8"
                          >
                            <Link className="dropdown-item" to="#">
                              <i className="ri-eye-fill mr-2"></i>View
                                  </Link>
                            <Link className="dropdown-item" to="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
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
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-success rounded mr-3">
                            <i className="ri-file-excel-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.xlsx"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="Training center.xlsx"
                            style={{ "cursor": "pointer" }}
                          >
                            Training center.xlsx
                                </div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton9"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton9"
                          >
                            <Link className="dropdown-item" to="#">
                              <i className="ri-eye-fill mr-2"></i>View
                                  </Link>
                            <Link className="dropdown-item" to="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
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
                    <tr>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="icon-small bg-warning rounded mr-3">
                            <i className="ri-file-excel-line"></i>
                          </div>
                          <div
                            data-load-file="file"
                            data-load-target="#resolte-contaniner"
                            data-url="../assets/vendor/doc-viewer/files/demo.pptx"
                            data-toggle="modal"
                            data-target="#exampleModal"
                            data-title="Flavour.pptx"
                            style={{ "cursor": "pointer" }}
                          >
                            Flavour.pptx
                                </div>
                        </div>
                      </td>
                      <td>Me</td>
                      <td>Mar 30, 2020 Gail Forcewind</td>
                      <td>10 MB</td>
                      <td>
                        <div className="dropdown">
                          <span
                            className="dropdown-toggle"
                            id="dropdownMenuButton9"
                            data-toggle="dropdown"
                          >
                            <i className="ri-more-fill"></i>
                          </span>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dropdownMenuButton9"
                          >
                            <Link className="dropdown-item" to="#">
                              <i className="ri-eye-fill mr-2"></i>View
                                  </Link>
                            <Link className="dropdown-item" to="#">
                              <i className="ri-delete-bin-6-fill mr-2"></i>
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


export default Files