import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import AddJob from '../../Components/AddJob/AddJob'
import Modal from '../../Components/AddJob/Modal'
import ContentsWrapper from '../../Components/ContentsWrapper/ContentsWrapper'
import Customers from '../../Components/Customers/Customers'
import Designers from '../../Components/Designers/Designers'
import Files from '../../Components/Files/Files'
import Footer from '../../Components/Footer/Footer'
import SideNav from '../../Components/SideNav/SideNav'
import TopNav from '../../Components/TopNav/TopNav'

export const Home = ({ toggle, setToggle }) => (
    <div className="home">

        <div className="wrapper">

            {/* side bar here */}
            <button type="button" onClick={() => setToggle(!toggle)} class="btn btn-primary mt-2" data-toggle="modal" data-target=".bd-example-modal-lg">Add New Job</button>

            <Modal />

            <SideNav />


            {/* topNav here */}

            <TopNav />

            {/* Contents Wrapper here */}




            <Route exact path="/">
                <ContentsWrapper />
            </Route>

            <Route exact path={"/files"}>
                <Files />
            </Route>

            <Route exact path={"/designers"}>
                <Designers />
            </Route>

            <Route path='/customers'>
                <Customers />
            </Route>

            <Route path="/newjob" >
                <AddJob />
            </Route>






        </div>

        {/* Footer here */}

        <Footer />

    </div>

)