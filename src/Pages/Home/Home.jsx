import React from 'react'
import { Route, Switch } from 'react-router'
import AddJob from '../../Components/AddJob/AddJob'
import Modal from '../../Components/AddJob/Modal'
import ContentsWrapper from '../../Components/ContentsWrapper/ContentsWrapper'
import CustomerDetail from '../../Components/CustomerDetail/CustomerDetail'
import Customers from '../../Components/Customers/Customers'
import Designers from '../../Components/Designers/Designers'
import Files from '../../Components/Files/Files'
import Footer from '../../Components/Footer/Footer'
import JobDetail from '../../Components/JobDetail/JobDetail'
import MyJobs from '../../Components/MyJobs/MyJobs'
import SideNav from '../../Components/SideNav/SideNav'
import TopNav from '../../Components/TopNav/TopNav'

export const Home = () => (
    <div className="home">

        <div className="wrapper">

            {/* side bar here */}
            <button type="button" class="btn btn-primary mt-2" data-toggle="modal" data-target=".bd-example-modal-lg">Add New Job</button>

            <Modal />

            <SideNav />


            {/* topNav here */}

            <TopNav />

            {/* Contents Wrapper here */}

            <Switch>
                <Route exact path="/">
                    <ContentsWrapper />
                </Route>

                <Route exact path={"/files"}>
                    <Files />
                </Route>

                <Route exact path={"/designers"}>
                    <Designers />
                </Route>

                {/* job detail page  */}
                <Route exact path={"/jobs/:id"} >
                    <JobDetail />
                </Route>

                {/* customer detail page */}

                <Route exact path={"/customers/:id"} >
                    <CustomerDetail />
                </Route>



                <Route exact path={"/myjobs"}>
                    <MyJobs />
                </Route>

                <Route exact path='/customers'>
                    <Customers />
                </Route>

                <Route exact path="/newjob" >
                    <AddJob />
                </Route>




            </Switch>
        </div>

        {/* Footer here */}

        <Footer />

    </div>

)