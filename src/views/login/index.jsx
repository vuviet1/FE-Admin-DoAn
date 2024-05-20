import React, { Fragment } from "react";
import { Link } from "react-router-dom";
<link rel="stylesheet" href="assets/css/login.css"></link>;

function Login() {
    return (
        <Fragment>
            <div className="container-login">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-12 col-md-9">
                        <div className="card shadow-sm my-5">
                            <div className="card-body p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="login-form">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">
                                                    Đăng nhập
                                                </h1>
                                            </div>
                                            <form className="user">
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="exampleInputEmail"
                                                        aria-describedby="emailHelp"
                                                        placeholder="Email..."
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="exampleInputPassword"
                                                        placeholder="Mật khẩu..."
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <div
                                                        className="custom-control custom-checkbox small"
                                                        style={{
                                                            lineHeight:
                                                                "1.5rem",
                                                        }}
                                                    >
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <Link
                                                        to={"/"}
                                                        className="btn btn-primary btn-block"
                                                    >
                                                        Đăng nhập
                                                    </Link>
                                                </div>
                                                <hr />
                                            </form>
                                            <div className="text-center"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Login;
