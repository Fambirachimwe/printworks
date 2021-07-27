import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { url } from '../../util/constants';

import LogoBlack from "../../images/logo-black.png";
import LogoWhite from "../../images/logo-white.png"


const Login = ({isAuth, setUser}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`${ url }/auth/local`, {
            identifier: email,
            password: password
        }).then( user => {
            localStorage.setItem("token", user.data.jwt);
            isAuth(); // dispatching to redux state
            setUser(user.data);
            history.push("/")  
            
        }).catch(err =>{

            console.log(err)
            alert("Email or password incorrect")
        })
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChagePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="wrapper">
            <section className="login-content">
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center height-self-center">
                        <div className="col-md-5 col-sm-12 col-12 align-self-center">
                            <div className="sign-user_card">
                                {/* <img src="../assets/images/logo.png" className="img-fluid rounded-normal light-logo logo" alt="logo"/> */}
                                <img src={LogoWhite} className="img-fluid rounded-normal darkmode-logo logo" alt="logo" />
                                <h3 className="mb-3">Sign In</h3>
                                <p>Login to stay connected.</p>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" value={email} onChange={handleChangeEmail} type="email" placeholder=" " />
                                                <label>Email</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="floating-label form-group">
                                                <input className="floating-input form-control" value={password} onChange={handleChagePassword} type="password" placeholder=" " />
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="custom-control custom-checkbox mb-3 text-left">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember Me</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <Link to="#" className="text-primary float-right">Forgot Password?</Link>
                                        </div>
                                    </div>
                                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">Sign In</button>
                                    <p className="mt-3">
                                        Create an Account <Link to="#" className="text-primary">Sign Up</Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
      isAuth: () => {dispatch({type: "LOGGED_IN", isAuth: true})},
      setUser: (user) => {dispatch({type: "SET_USER", user: user})}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)