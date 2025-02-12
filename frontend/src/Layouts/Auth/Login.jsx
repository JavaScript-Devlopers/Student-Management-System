import React, { useState } from "react";
import swal from 'sweetalert2'
const Login = () => {
    const [loginDetails , setLoginDetails] = useState({ email : "",password : ""})

    const userLogin = async()=>{
        const req= {   Email : loginDetails.email,  Password : loginDetails.password}

        await login(req)
        .then((res)=>{
            if(res.status){
                swal.fire({
                    icon : 'success',
                    timer: 1500,
                    title : "user login successfull",
                    
                })



            }
        })
    }

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div className="d-flex justify-content-center py-4">
                            <a
                                href="index.html"
                                className="logo d-flex align-items-center w-auto"
                            >
                                <img src="assets/img/logo.png" alt="" />
                                <span className="d-none d-lg-block">NiceAdmin</span>
                            </a>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="pt-4 pb-2">
                                    <h5 className="card-title text-center pb-0 fs-4">
                                        Login to Your Account
                                    </h5>
                                    <p className="text-center small">
                                        Enter your username &amp; password to login
                                    </p>
                                </div>
                                <form className="row g-3 needs-validation" noValidate="">
                                    <div className="col-12">
                                        <label htmlFor="yourUsername" className="form-label">
                                            Username
                                        </label>
                                        <div className="input-group has-validation">
                                            <span
                                                className="input-group-text"
                                                id="inputGroupPrepend"
                                            >
                                                @
                                            </span>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                value={loginDetails.email}
                                                onChange={(e)=>setLoginDetails({
                                                    ...loginDetails,
                                                    email : e.target.value
                                                })}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter your username.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="yourPassword" className="form-label">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            value={loginDetails.password}
                                            onChange={(e)=>setLoginDetails({
                                                ...loginDetails,
                                                password : e.target.value
                                            })}
                                        />
                                        <div className="invalid-feedback">
                                            Please enter your password!
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name="remember"
                                                defaultValue="true"
                                                id="rememberMe"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="rememberMe"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100" type="submit">
                                            Login
                                        </button>
                                    </div>
                                    <div className="col-12">
                                        <p className="small mb-0">
                                            Don't have account?{" "}
                                            <a href="pages-register.html">Create an account</a>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="credits">
                            {/* All the links in the footer should remain intact. */}
                            {/* You can delete the links only if you purchased the pro version. */}
                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                            Designed by{" "}
                            <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login