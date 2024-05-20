/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import Topbar from "./components/topbar";
import Footer from "./components/footer";
import ImageUploader from "./components/ImageUploader";

function Profile() {
    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    {/* Topbar */}
                    <Topbar />
                    {/* Topbar */}

                    {/* Container Fluid*/}
                    <div className="container-fluid" id="container-wrapper">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Trang cá nhân</h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={"/"}>Trang chủ</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Trang cá nhân
                                </li>
                            </ol>
                        </div>
                        {/* Row */}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="card mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">
                                            Thông tin cá nhân
                                        </h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <label htmlFor="profileImg" className="form-label">
                                                    Ảnh đại diện
                                                </label>
                                                <ImageUploader />
                                            </div>
                                            <div className="col-md-8">
                                                <Form>
                                                    <Form.Group controlId="profileName">
                                                        <Form.Label>Tên</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Tên của bạn ..."
                                                        />
                                                    </Form.Group>

                                                    <Form.Group controlId="profileEmail" className="mt-3">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="Email của bạn ..."
                                                        />
                                                    </Form.Group>

                                                    <Form.Group controlId="profilePhone" className="mt-3">
                                                        <Form.Label>Số điện thoại</Form.Label>
                                                        <Form.Control
                                                            type="tel"
                                                            placeholder="Số điện thoại của bạn ..."
                                                        />
                                                    </Form.Group>

                                                    <Form.Group controlId="profileAddress" className="mt-3">
                                                        <Form.Label>Địa chỉ</Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Địa chỉ của bạn ..."
                                                        />
                                                    </Form.Group>

                                                    <Form.Group controlId="profileNotes" className="mt-3">
                                                        <Form.Label>Ghi chú</Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                            placeholder="Ghi chú ..."
                                                        />
                                                    </Form.Group>

                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary mt-4"
                                                    >
                                                        Cập nhật thông tin
                                                    </button>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Row*/}
                    </div>
                    {/*-Container Fluid*/}

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
            {/* Scroll to top */}
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up" />
            </a>
        </div>
    );
}
export default Profile;
