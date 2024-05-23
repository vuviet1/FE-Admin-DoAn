/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Form, Image } from "react-bootstrap";

import Topbar from "../components/topbar";
import Footer from "../components/footer";
import ImageUploader from "../components/ImageUploader";

function Customer() {

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <div id="wrapper">
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    {/* Topbar */}
                    <Topbar />
                    {/* Topbar */}

                    {/* Container Fluid */}
                    <div className="container-fluid" id="container-wrapper">
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">
                                Khách hàng
                            </h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="{{route('admin.home')}}">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    Danh mục quản lý
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Danh sách khách hàng
                                </li>
                            </ol>
                        </div>
                        {/* Row */}
                        <div className="row">
                            {/* DataTable with Hover */}
                            <div className="col-lg-12">
                                <div className="card mb-4">
                                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">
                                            Danh sách khách hàng
                                        </h6>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-toggle="modal"
                                            data-target="#staticBackdrop"
                                        >
                                            <i className="fas fa-plus" />
                                            Thêm mới
                                        </button>
                                    </div>
                                    <div className="table-responsive p-3">
                                        <table
                                            className="table align-items-center table-flush table-hover"
                                            id="dataTableHover"
                                        >
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Ảnh đại diện</th>
                                                    <th>Tên khách hàng</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>
                                                        <Image
                                                            src="holder.js/171x180"
                                                            height={50}
                                                            width={50}
                                                            roundedCircle
                                                        />
                                                    </td>
                                                    <td>John Doe</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info ml-2"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-success ml-2"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                        >
                                                            <i className="far fa-edit" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger ml-2"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Row */}
                        <div
                            className="modal fade"
                            id="staticBackdrop"
                            data-backdrop="static"
                            data-keyboard="false"
                            tabIndex={-1}
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="staticBackdropLabel"
                                        >
                                            Thêm mới khách hàng
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <label
                                                    htmlFor="inputImg"
                                                    className="form-label"
                                                >
                                                    Ảnh đại diện
                                                </label>
                                                <ImageUploader />
                                            </div>
                                            <div className="col-6">
                                                <label
                                                    htmlFor="inputName"
                                                    className="form-label"
                                                >
                                                    Tên khách hàng
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputName"
                                                    placeholder="Tên khách hàng mới ..."
                                                />
                                                <div className="">
                                                    <label
                                                        htmlFor="inputEmail"
                                                        className="form-label"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="inputEmail"
                                                        placeholder="Email ..."
                                                    />
                                                </div>
                                                <div className="">
                                                    <label
                                                        htmlFor="inputPhone"
                                                        className="form-label"
                                                    >
                                                        Số điện thoại
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="inputPhone"
                                                        placeholder="Số điện thoại ..."
                                                    />
                                                </div>
                                                <div className="">
                                                    <label
                                                        htmlFor="inputPassword"
                                                        className="form-label"
                                                    >
                                                        Mật khẩu
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="inputPassword"
                                                        placeholder="Mật khẩu ..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="row">
                                                <div className="col-6 mt-3">
                                                    <label
                                                        htmlFor="inputStatus"
                                                        className="form-label"
                                                    >
                                                        Trạng thái
                                                    </label>
                                                    <Form.Select
                                                        aria-label="Trạng thái"
                                                        className="form-control"
                                                        id="inputStatus"
                                                    >
                                                        <option value="1">
                                                            Sử dụng
                                                        </option>
                                                        <option value="2">
                                                            Không sử dụng
                                                        </option>
                                                    </Form.Select>
                                                </div>
                                                <div className="col-6 mt-3">
                                                    <label
                                                        htmlFor="inputRole"
                                                        className="form-label"
                                                    >
                                                        Quyền
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputRole"
                                                        placeholder="Quyền ..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <label
                                                htmlFor="inputAddress"
                                                className="form-label"
                                            >
                                                Địa chỉ
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputAddress"
                                                placeholder="Địa chỉ ..."
                                            />
                                        </div>
                                        <div className="col-12 mt-3">
                                            <label
                                                htmlFor="formControlTextarea1"
                                                className="form-label"
                                            >
                                                Ghi chú
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="formControlTextarea1"
                                                rows={3}
                                                placeholder="Ghi chú ..."
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            data-dismiss="modal"
                                        >
                                            Hủy bỏ
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Thêm mới
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className="modal fade"
                            id="editModal"
                            data-backdrop="static"
                            data-keyboard="false"
                            tabIndex={-1}
                            aria-labelledby="editModalTitle"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog modal-dialog-centered modal-xl">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="editModalTitle"
                                        >
                                            Cập nhật khách hàng
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-6">
                                                <label
                                                    htmlFor="editImg"
                                                    className="form-label"
                                                >
                                                    Ảnh đại diện
                                                </label>
                                                <ImageUploader />
                                            </div>
                                            <div className="col-6">
                                                <label
                                                    htmlFor="editName"
                                                    className="form-label"
                                                >
                                                    Tên khách hàng
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="editName"
                                                    placeholder="Tên khách hàng mới ..."
                                                />
                                                <div className="">
                                                    <label
                                                        htmlFor="editEmail"
                                                        className="form-label"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        className="form-control"
                                                        id="editEmail"
                                                        placeholder="Email ..."
                                                    />
                                                </div>
                                                <div className="">
                                                    <label
                                                        htmlFor="editPhone"
                                                        className="form-label"
                                                    >
                                                        Số điện thoại
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        className="form-control"
                                                        id="editPhone"
                                                        placeholder="Số điện thoại ..."
                                                    />
                                                </div>
                                                <div className="">
                                                    <label
                                                        htmlFor="editPassword"
                                                        className="form-label"
                                                    >
                                                        Mật khẩu
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="editPassword"
                                                        placeholder="Mật khẩu ..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="row">
                                                <div className="col-6 mt-3">
                                                    <label
                                                        htmlFor="editStatus"
                                                        className="form-label"
                                                    >
                                                        Trạng thái
                                                    </label>
                                                    <Form.Select
                                                        aria-label="Trạng thái"
                                                        className="form-control"
                                                        id="editStatus"
                                                    >
                                                        <option value="1">
                                                            Sử dụng
                                                        </option>
                                                        <option value="2">
                                                            Không sử dụng
                                                        </option>
                                                    </Form.Select>
                                                </div>
                                                <div className="col-6 mt-3">
                                                    <label
                                                        htmlFor="editRole"
                                                        className="form-label"
                                                    >
                                                        Quyền
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="editRole"
                                                        placeholder="Quyền ..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <label
                                                htmlFor="editAddress"
                                                className="form-label"
                                            >
                                                Địa chỉ
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="editAddress"
                                                placeholder="Địa chỉ ..."
                                            />
                                        </div>
                                        <div className="col-12 mt-3">
                                            <label
                                                htmlFor="editNotes"
                                                className="form-label"
                                            >
                                                Ghi chú
                                            </label>
                                            <textarea
                                                className="form-control"
                                                id="editNotes"
                                                rows={3}
                                                placeholder="Ghi chú ..."
                                            />
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary"
                                            data-dismiss="modal"
                                        >
                                            Hủy bỏ
                                        </button>
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Cập nhật
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Container Fluid */}

                    {/* Footer */}
                    <Footer />
                </div>
            </div>
            {/* Scroll to top */}
            <a href="#page-top" className="scroll-to-top rounded" onClick={handleScrollToTop}>
                    <i className="fas fa-angle-up" />
                </a>
        </div>
    );
}

export default Customer;
