import React from 'react';
import {Link} from 'react-router-dom';
import AddJob from '../AddJob/AddJob';

const SideNav = () => (
    <div className="iq-sidebar  sidebar-default ">
          <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
            <Link to="#" className="header-logo">
              <img
                src="../assets/images/logo.png"
                className="img-fluid rounded-normal light-logo"
                alt="logo"
              />
              <img
                src="../assets/images/logo-white.png"
                className="img-fluid rounded-normal darkmode-logo"
                alt="logo"
              />
            </Link>
            <div className="iq-menu-bt-sidebar">
              <i className="las la-bars wrapper-menu"></i>
            </div>
          </div>
          <div className="data-scrollbar" data-scroll="1">
            <div className="new-create select-dropdown input-prepend input-append">
              <div className="btn-group">
                <label data-toggle="dropdown">
                 

                    <Link to="/newjob">
                      <div class="search-query selet-caption"><i class="las la-plus pr-2"></i>Create New Job</div><span class="search-replace"></span>
                    </Link>

                    


                  {/* </div> */}
                  <span className="search-replace"></span>
                  <span className="caret"> </span>
                </label>
                {/* <ul className="dropdown-menu">
                  <li>
                    <div className="item">
                      <i className="ri-folder-add-line pr-3"></i>New Folder
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <i className="ri-file-upload-line pr-3"></i>Upload Files
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <i className="ri-folder-upload-line pr-3"></i>Upload
                      Folders
                    </div>
                  </li>
                </ul> */}
              </div>
            </div>
            <nav className="iq-sidebar-menu">
              <ul id="iq-sidebar-toggle" className="iq-menu">
                <li className="active">
                  <Link to="/" className="">
                    <i className="las la-home iq-arrow-left"></i>
                    <span>Dashboard</span>
                  </Link>
                  <ul
                    id="dashboard"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                
                <li className=" ">
                  <Link to="/files" className="">
                    <i className="lar la-file-alt iq-arrow-left"></i>
                    <span>Files</span>
                  </Link>
                  <ul
                    id="page-files"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                
                <li className=" ">
                  <Link to="/designers" className="">
                    <i className="lar la-star"></i>
                    <span>Designers</span>
                  </Link>
                  <ul
                    id="page-fevourite"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                <li className=" ">
                  <Link to="/customers" className="">
                    <i className="las la-trash-alt iq-arrow-left"></i>
                    <span>Customers</span>
                  </Link>
                  <ul
                    id="page-delete"
                    className="iq-submenu collapse"
                    data-parent="#iq-sidebar-toggle"
                  ></ul>
                </li>
                
              </ul>
            </nav>
            <div className="sidebar-bottom">
              
            </div>
            <div className="p-3"></div>
          </div>
        </div>
);



export default SideNav;
