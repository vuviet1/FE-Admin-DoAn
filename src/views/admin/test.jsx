/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Topbar from "./components/topbar";
import Footer from "./components/footer";

function Voucher() {
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
                            <h1 className="h3 mb-0 text-gray-800">
                                Mã giảm giá
                            </h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="{{route('admin.home')}}">Home</a>
                                </li>
                                <li className="breadcrumb-item">
                                    Danh mục sản phẩm
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Danh mục mã giảm giá
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
                                            Danh mục mã giảm giá
                                        </h6>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-toggle="modal"
                                            data-target="#exampleModalCenter"
                                            id="#modalCenter"
                                        >
                                            <i className="fas fa-plus" /> Thêm
                                            mới
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
                                                    <th>Tên mã giảm giá</th>
                                                    <th>Ngày bắt đầu</th>
                                                    <th>Ngày kết thúc</th>
                                                    <th>Ghi chú</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tiger Nixon</td>
                                                    <td>System Architect</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Garrett Winters</td>
                                                    <td>Accountant</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ashton Cox</td>
                                                    <td>
                                                        Junior Technical Author
                                                    </td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Cedric Kelly</td>
                                                    <td>
                                                        Senior Javascript
                                                        Developer
                                                    </td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Airi Satou</td>
                                                    <td>Accountant</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Brielle Williamson</td>
                                                    <td>
                                                        Integration Specialist
                                                    </td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Herrod Chandler</td>
                                                    <td>Sales Assistant</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Serge Baldwin</td>
                                                    <td>Data Coordinator</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Zenaida Frank</td>
                                                    <td>Software Engineer</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Zorita Serrano</td>
                                                    <td>Software Engineer</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Jennifer Acosta</td>
                                                    <td>
                                                        Junior Javascript
                                                        Developer
                                                    </td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Cara Stevens</td>
                                                    <td>Sales Assistant</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Hermione Butler</td>
                                                    <td>Regional Director</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Lael Greer</td>
                                                    <td>
                                                        Systems Administrator
                                                    </td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Jonas Alexander</td>
                                                    <td>Developer</td>
                                                    <td />
                                                    <td />
                                                    <td />
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info btn"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                            id="#modalCenter"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger btn"
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
                        {/*Row*/}
                        <div
                            className="modal fade"
                            id="exampleModalCenter"
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="exampleModalCenterTitle"
                            aria-hidden="true"
                        >
                            <div
                                className="modal-dialog modal-dialog-centered"
                                role="document"
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="exampleModalCenterTitle"
                                        >
                                            Thêm mới mã giảm giá
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
                                        <div className="col-12">
                                            <label
                                                htmlFor="inputAddress"
                                                className="form-label"
                                            >
                                                Tên mã giảm giá
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputAddress"
                                                placeholder="Tên mã giảm giá mới ..."
                                            />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label htmlFor="touchSpin1">
                                                Số lượng
                                            </label>
                                            <input
                                                id="touchSpin1"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                        <div
                                            className="col-12 form-group"
                                            id="simple-date4"
                                        >
                                            <label htmlFor="dateRangePicker">
                                                Từ ngày - Đến ngày
                                            </label>
                                            <div className="input-daterange input-group">
                                                <input
                                                    type="text"
                                                    className="input-sm form-control"
                                                    name="start"
                                                />
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        đến
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="input-sm form-control"
                                                    name="end"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
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
                                                defaultValue={""}
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
                            tabIndex={-1}
                            role="dialog"
                            aria-labelledby="editModalTitle"
                            aria-hidden="true"
                        >
                            <div
                                className="modal-dialog modal-dialog-centered"
                                role="document"
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="editModalTitle"
                                        >
                                            Cập nhật mã giảm giá
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
                                        <div className="col-12">
                                            <label
                                                htmlFor="inputAddress"
                                                className="form-label"
                                            >
                                                Tên mã giảm giá
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputAddress"
                                                placeholder="Cập nhật tên mã giảm giá mới ..."
                                            />
                                        </div>
                                        <div className="col-12 form-group">
                                            <label htmlFor="touchSpin3">
                                                Số lượng
                                            </label>
                                            <input
                                                id="touchSpin3"
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                        <div
                                            className="col-12 form-group"
                                            id="simple-date1"
                                        >
                                            <label htmlFor="simpleDataInput">
                                                Ngày bắt đầu
                                            </label>
                                            <div className="input-group date">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-calendar" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="01/06/2020"
                                                    id="simpleDataInput"
                                                />
                                            </div>
                                        </div>
                                        <div
                                            className="col-12 form-group"
                                            id="simple-date1"
                                        >
                                            <label htmlFor="simpleDataInput">
                                                Ngày kết thúc
                                            </label>
                                            <div className="input-group date">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <i className="fas fa-calendar" />
                                                    </span>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    defaultValue="01/06/2020"
                                                    id="simpleDataInput"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
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
                                                defaultValue={""}
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
export default Voucher;
