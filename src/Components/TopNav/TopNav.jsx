import React from "react";
import {Link}  from 'react-router-dom';
import { connect } from 'react-redux';




const TopNav = ({user: {user: {username, email}}}) => {

  const signOut = () => {
    localStorage.removeItem("persist:root");
    localStorage.removeItem("token")
  }
  
  
  return (
    <div className="iq-top-navbar">
      {/* {console.log(username)} */}
          <div className="iq-navbar-custom">
            <nav className="navbar navbar-expand-lg navbar-light p-0">
              <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                <i className="ri-menu-line wrapper-menu"></i>
                <Link to="index.html" className="header-logo">
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
              </div>
              <div className="iq-search-bar device-search">
                <form>
                  <div className="input-prepend input-append">
                    <div className="btn-group">
                      <label
                        className="dropdown-toggle searchbox"
                        data-toggle="dropdown"
                      >
                        <input
                          className="dropdown-toggle search-query text search-input"
                          type="text"
                          placeholder="Type here to search..."
                        />
                        <span className="search-replace"></span>
                        <Link className="search-link" to="#">
                          <i className="ri-search-line"></i>
                        </Link>
                        <span className="caret"></span>
                      </label>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="#">
                            <div className="item">
                              <i className="far fa-file-pdf bg-info"></i>PDFs
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <div className="item">
                              <i className="far fa-file-alt bg-primary"></i>
                              Documents
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <div className="item">
                              <i className="far fa-file-excel bg-success"></i>
                              Spreadsheet
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <div className="item">
                              <i className="far fa-file-powerpoint bg-danger"></i>
                              Presentation
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <div className="item">
                              <i className="far fa-file-image bg-warning"></i>
                              Photos & Images
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <div className="item">
                              <i className="far fa-file-video bg-info"></i>
                              Videos
                            </div>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>

              <div className="d-flex align-items-center">
                <div className="change-mode">
                  <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                    <div className="custom-switch-inner">
                      <p className="mb-0"> </p>
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="dark-mode"
                        data-active="true"
                      />
                      <label
                        className="custom-control-label"
                        for="dark-mode"
                        data-mode="toggle"
                      >
                        <span className="switch-icon-left">
                          <i className="a-left"></i>
                        </span>
                        <span className="switch-icon-right">
                          <i className="a-right"></i>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-label="Toggle navigation"
                >
                  <i className="ri-menu-3-line"></i>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto navbar-list align-items-center">
                    <li className="nav-item nav-icon search-content">
                      <Link
                        to="#"
                        className="search-toggle rounded"
                        id="dropdownSearch"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ri-search-line"></i>
                      </Link>
                      <div
                        className="iq-search-bar iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownSearch"
                      >
                        <form action="#" className="searchbox p-2">
                          <div className="form-group mb-0 position-relative">
                            <input
                              type="text"
                              className="text search-input font-size-12"
                              placeholder="type here to search..."
                            />
                            <Link to="#" className="search-link">
                              <i className="las la-search"></i>
                            </Link>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li className="nav-item nav-icon dropdown">
                      <Link
                        to="#"
                        className="search-toggle dropdown-toggle"
                        id="dropdownMenuButton01"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ri-question-line"></i>
                      </Link>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton01"
                      >
                        <div className="card shadow-none m-0">
                          <div className="card-body p-0 ">
                            <div className="p-3">
                              <Link to="#" className="iq-sub-card pt-0">
                                <i className="ri-questionnaire-line"></i>Help
                              </Link>
                              <Link to="#" className="iq-sub-card">
                                <i className="ri-recycle-line"></i>Training
                              </Link>
                              <Link to="#" className="iq-sub-card">
                                <i className="ri-refresh-line"></i>Updates
                              </Link>
                              <Link to="#" className="iq-sub-card">
                                <i className="ri-service-line"></i>Terms and
                                Policy
                              </Link>
                              <Link to="#" className="iq-sub-card">
                                <i className="ri-feedback-line"></i>Send
                                Feedback
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item nav-icon dropdown">
                      <Link
                        to="#"
                        className="search-toggle dropdown-toggle"
                        id="dropdownMenuButton02"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="ri-settings-3-line"></i>
                      </Link>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton02"
                      >
                        <div className="card shadow-none m-0">
                          <div className="card-body p-0 ">
                            <div className="p-3">
                              <Link to="#" className="iq-sub-card pt-0">
                                <i className="ri-settings-3-line"></i> Settings
                              </Link>
                              <Link to="#" className="iq-sub-card">
                                <i className="ri-hard-drive-line"></i> Get Drive
                                for desktop
                              </Link>
                              <Link to="#" className="iq-sub-card">
                                <i className="ri-keyboard-line"></i> Keyboard
                                Shortcuts
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item nav-icon dropdown caption-content">
                      <Link
                        to="#"
                        className="search-toggle dropdown-toggle"
                        id="dropdownMenuButton03"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >

                        <div className="caption bg-primary line-height">{username ? username.split("")[0].toUpperCase(): ""}</div>
                      </Link>
                      <div
                        className="iq-sub-dropdown dropdown-menu"
                        aria-labelledby="dropdownMenuButton03"
                      >
                        <div className="card mb-0">
                          <div className="card-header d-flex justify-content-between align-items-center mb-0">
                            <div className="header-title">
                              <h4 className="card-title mb-0">Profile</h4>
                            </div>
                            <div className="close-data text-right badge badge-primary cursor-pointer ">
                              <i className="ri-close-fill"></i>
                            </div>
                          </div>
                          <div className="card-body">
                            <div className="profile-header">
                              <div className="cover-container text-center">
                                <div className="rounded-circle profile-icon bg-primary mx-auto d-block">
                                  {username.split("")[0].toUpperCase()}
                                </div>
                                <div className="profile-detail mt-3">
                                  <h5>
                                    <Link to="#">
                                      {username }
                                    </Link>
                                  </h5>
                                  <p>
                                    <Link
                                      to="#"
                                      className="__cf_email__"
                                      data-cfemail="6f1f0e010116020e1d0c002f08020e0603410c0002"
                                    >
                                      {email}
                                    </Link>
                                  </p>
                                </div>
                                <Link
                                  to="/login"
                                  onClick={signOut}
                                  className="btn btn-primary"
                                >
                                  Sign Out
                                </Link>
                              </div>
                              
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
)
  }

const mapStateToProps = (state) => {

  return {
    ...state
  }

}



export default connect(mapStateToProps)(TopNav);

