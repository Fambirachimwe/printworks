import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from 'react-query';
import { fetchJobs } from "../../util/api";
import JobTableRow from "./JobTableRow";





const ContentsWrapper = () => {

  const { data } = useQuery('jobs', fetchJobs);

  const newJobs = data ? data.filter(job => job.status === "new").length : 0;
  const activeJobs = data ? data.filter(job => job.status === "active").length : 0;
  const printingJobs = data ? data.filter(job => job.status === "printing").length : 0;
  const completedJobs = data ? data.filter(job => job.status === "completed").length : 0;


  // console.log(data)

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
                        Job Pool<i className="las la-angle-down ml-3"></i>
                      </div>
                      <span className="search-replace"></span>
                      <span className="caret"></span>
                    </label>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="item">
                          <i className="ri-folder-add-line pr-3"></i>New
                              Folder
                            </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="ri-file-upload-line pr-3"></i>Upload
                              Files
                            </div>
                      </li>
                      <li>
                        <div className="item">
                          <i className="ri-folder-upload-line pr-3"></i>
                              Upload Folders
                            </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="dashboard1-dropdown d-flex align-items-center">
                  <div className="dashboard1-info">
                    <Link
                      to="#calander"
                      className="collapsed"
                      data-toggle="collapse"
                      aria-expanded="false"
                    >
                      <i className="ri-arrow-down-s-line"></i>
                    </Link>
                    <ul
                      id="calander"
                      className="iq-dropdown collapse list-inline m-0 p-0 mt-2"
                    >
                      <li className="mb-2">
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Calander"
                        >
                          <i className="las la-calendar iq-arrow-left"></i>
                        </Link>
                      </li>
                      <li className="mb-2">
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Keep"
                        >
                          <i className="las la-lightbulb iq-arrow-left"></i>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="#"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Tasks"
                        >
                          <i className="las la-tasks iq-arrow-left"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card card-block card-stretch card-height">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <Link to="page-alexa.html" className="folder">
                    <div className="icon-small bg-danger rounded mb-4">
                      <i className="ri-file-copy-line"></i>
                    </div>
                  </Link>
                  <div className="card-header-toolbar">
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton2"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-2-fill"></i>
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton2"
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
                          <i className="ri-printer-fill mr-2"></i>Print
                            </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="folder">
                  <h5 className="mb-2">New</h5>
                  <p className="mb-2">
                    <i className="lar la-clock text-danger mr-2 font-size-20"></i>{" "}
                        {/* 10 Dec, 2020 */}
                      </p>
                  <p className="mb-0">
                    <i className="las la-file-alt text-danger mr-2 font-size-20"></i>{" "}
                        {`0${newJobs}`} Jobs
                      </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card card-block card-stretch card-height">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <Link to="#" className="folder">
                    <div className="icon-small bg-primary rounded mb-4">
                      <i className="ri-file-copy-line"></i>
                    </div>
                  </Link>
                  <div className="card-header-toolbar">
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton3"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-2-fill"></i>
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton3"
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
                          <i className="ri-printer-fill mr-2"></i>Print
                            </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="folder">
                  <h5 className="mb-2">Active</h5>
                  <p className="mb-2">
                    <i className="lar la-clock text-primary mr-2 font-size-20"></i>{" "}
                        {/* 09 Dec, 2020 */}
                      </p>
                  <p className="mb-0">
                    <i className="las la-file-alt text-primary mr-2 font-size-20"></i>{" "}
                        {activeJobs == 0 ? 0 : `0${activeJobs}`} Jobs
                    </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card card-block card-stretch card-height">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <Link to="#" className="folder">
                    <div className="icon-small bg-info rounded mb-4">
                      <i className="ri-file-copy-line"></i>
                    </div>
                  </Link>
                  <div className="card-header-toolbar">
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton4"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-2-fill"></i>
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton4"
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
                          <i className="ri-printer-fill mr-2"></i>Print
                            </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="folder">
                  <h5 className="mb-2">Printing</h5>
                  <p className="mb-2">
                    <i className="lar la-clock text-info mr-2 font-size-20"></i>{" "}
                        {/* 07 Dec, 2020 */}
                      </p>
                  <p className="mb-0">
                    <i className="las la-file-alt text-info mr-2 font-size-20"></i>{" "}
                      {printingJobs == 0 ? 0 : `0${printingJobs}`} Jobs
                    </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-lg-3">
            <div className="card card-block card-stretch card-height">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <Link to="page-ionic.html" className="folder">
                    <div className="icon-small bg-success rounded mb-4">
                      <i className="ri-file-copy-line"></i>
                    </div>
                  </Link>
                  <div className="card-header-toolbar">
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle"
                        id="dropdownMenuButton5"
                        data-toggle="dropdown"
                      >
                        <i className="ri-more-2-fill"></i>
                      </span>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="dropdownMenuButton5"
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
                          <i className="ri-printer-fill mr-2"></i>Print
                            </Link>
                        <Link className="dropdown-item" to="#">
                          <i className="ri-file-download-fill mr-2"></i>
                              Download
                            </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="folder">
                  <h5 className="mb-2">Completed</h5>
                  <p className="mb-2">
                    <i className="lar la-clock text-success mr-2 font-size-20"></i>{" "}
                        {/* 06 Dec, 2020 */}
                      </p>
                  <p className="mb-0">
                    <i className="las la-file-alt text-success mr-2 font-size-20"></i>{" "}
                    {completedJobs == 0 ? 0 : `0${completedJobs}`} Jobs
                      </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-xl-12">
            <div className="card card-block card-stretch card-height files-table">
              <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Jobs</h4>
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
                        data ? data.map(data => (
                          <JobTableRow key={data.id} data={data} />
                        )):
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
  )
}

export default ContentsWrapper