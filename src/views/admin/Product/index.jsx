/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Form, Image } from "react-bootstrap";

import Topbar from "../components/topbar";
import Footer from "../components/footer";
import ImageUploader from "../components/ImageUploader";

function Product() {
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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
                            <h1 className="h3 mb-0 text-gray-800">Sản phẩm</h1>
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
                                    Danh sách sản phẩm
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
                                            Danh sách sản phẩm
                                        </h6>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-toggle="modal"
                                            data-target="#staticBackdrop"
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
                                                    <th>Ảnh sản phẩm</th>
                                                    <th>Tên sản phẩm</th>
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
                                                            className="btn btn-info"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-success"
                                                            data-toggle="modal"
                                                            data-target="#editModal"
                                                        >
                                                            <i className="far fa-edit" />
                                                        </button>
                                                        <button
                                                            type="submit"
                                                            className="btn btn-danger"
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
                                            Thêm mới sản phẩm
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
                                        <h5>Thông tin chung</h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <label
                                                    htmlFor="inputName"
                                                    className="form-label"
                                                >
                                                    Tên sản phẩm
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputName"
                                                    placeholder="Tên sản phẩm mới ..."
                                                />
                                                <label
                                                    htmlFor="inputQuantity"
                                                    className="form-label"
                                                >
                                                    Số lượng
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="inputQuantity"
                                                    placeholder="Số lượng ..."
                                                />
                                                <label
                                                    htmlFor="inputPrice"
                                                    className="form-label"
                                                >
                                                    Giá
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="inputPrice"
                                                    placeholder="Giá sản phẩm ..."
                                                />
                                                <label
                                                    htmlFor="inputBrand"
                                                    className="form-label"
                                                >
                                                    Thương hiệu
                                                </label>
                                                <Form.Select
                                                    aria-label="Thương hiệu"
                                                    className="form-control"
                                                    id="inputBrand"
                                                >
                                                    <option value="brand1">
                                                        Thương hiệu 1
                                                    </option>
                                                    <option value="brand2">
                                                        Thương hiệu 2
                                                    </option>
                                                </Form.Select>
                                                <label
                                                    htmlFor="inputCategory"
                                                    className="form-label"
                                                >
                                                    Danh mục
                                                </label>
                                                <Form.Select
                                                    aria-label="Danh mục"
                                                    className="form-control"
                                                    id="inputCategory"
                                                >
                                                    <option value="category1">
                                                        Danh mục 1
                                                    </option>
                                                    <option value="category2">
                                                        Danh mục 2
                                                    </option>
                                                </Form.Select>
                                            </div>
                                            <div className="col-6">
                                                <label
                                                    htmlFor="inputDescription"
                                                    className="form-label"
                                                >
                                                    Mô tả
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="inputDescription"
                                                    rows={5}
                                                    placeholder="Mô tả sản phẩm ..."
                                                />
                                                <label
                                                    htmlFor="inputNote"
                                                    className="form-label"
                                                >
                                                    Ghi chú
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="inputNote"
                                                    rows={3}
                                                    placeholder="Ghi chú ..."
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <h5>Thông tin chi tiết</h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <label
                                                    htmlFor="inputImage"
                                                    className="form-label"
                                                >
                                                    Ảnh sản phẩm
                                                </label>
                                                <ImageUploader />
                                                <label
                                                    htmlFor="inputProduct"
                                                    className="form-label"
                                                >
                                                    Sản phẩm
                                                </label>
                                                <Form.Select
                                                    aria-label="Sản phẩm"
                                                    className="form-control"
                                                    id="inputProduct"
                                                >
                                                    <option value="product1">
                                                        Sản phẩm 1
                                                    </option>
                                                    <option value="product2">
                                                        Sản phẩm 2
                                                    </option>
                                                </Form.Select>
                                            </div>
                                            <div className="col-6">
                                                <label
                                                    htmlFor="inputColor"
                                                    className="form-label"
                                                >
                                                    Màu sắc
                                                </label>
                                                <Form.Select
                                                    aria-label="Màu sắc"
                                                    className="form-control"
                                                    id="inputColor"
                                                >
                                                    <option value="color1">
                                                        Màu 1
                                                    </option>
                                                    <option value="color2">
                                                        Màu 2
                                                    </option>
                                                </Form.Select>
                                                <label
                                                    htmlFor="inputSize"
                                                    className="form-label"
                                                >
                                                    Kích thước
                                                </label>
                                                <Form.Select
                                                    aria-label="Kích thước"
                                                    className="form-control"
                                                    id="inputSize"
                                                >
                                                    <option value="size1">
                                                        Size 1
                                                    </option>
                                                    <option value="size2">
                                                        Size 2
                                                    </option>
                                                </Form.Select>
                                            </div>
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
                                            Cập nhật sản phẩm
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
                                        <h5>Thông tin chung</h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <label
                                                    htmlFor="editName"
                                                    className="form-label"
                                                >
                                                    Tên sản phẩm
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="editName"
                                                    placeholder="Tên sản phẩm mới ..."
                                                />
                                                <label
                                                    htmlFor="editQuantity"
                                                    className="form-label"
                                                >
                                                    Số lượng
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="editQuantity"
                                                    placeholder="Số lượng ..."
                                                />
                                                <label
                                                    htmlFor="editPrice"
                                                    className="form-label"
                                                >
                                                    Giá
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="editPrice"
                                                    placeholder="Giá sản phẩm ..."
                                                />
                                                <label
                                                    htmlFor="editBrand"
                                                    className="form-label"
                                                >
                                                    Thương hiệu
                                                </label>
                                                <Form.Select
                                                    aria-label="Thương hiệu"
                                                    className="form-control"
                                                    id="editBrand"
                                                >
                                                    <option value="brand1">
                                                        Thương hiệu 1
                                                    </option>
                                                    <option value="brand2">
                                                        Thương hiệu 2
                                                    </option>
                                                </Form.Select>
                                                <label
                                                    htmlFor="editCategory"
                                                    className="form-label"
                                                >
                                                    Danh mục
                                                </label>
                                                <Form.Select
                                                    aria-label="Danh mục"
                                                    className="form-control"
                                                    id="editCategory"
                                                >
                                                    <option value="category1">
                                                        Danh mục 1
                                                    </option>
                                                    <option value="category2">
                                                        Danh mục 2
                                                    </option>
                                                </Form.Select>
                                            </div>
                                            <div className="col-6">
                                                <label
                                                    htmlFor="editDescription"
                                                    className="form-label"
                                                >
                                                    Mô tả
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="editDescription"
                                                    rows={5}
                                                    placeholder="Mô tả sản phẩm ..."
                                                />
                                                <label
                                                    htmlFor="editNote"
                                                    className="form-label"
                                                >
                                                    Ghi chú
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    id="editNote"
                                                    rows={3}
                                                    placeholder="Ghi chú ..."
                                                />
                                            </div>
                                        </div>
                                        <hr />
                                        <h5>Thông tin chi tiết</h5>
                                        <div className="row">
                                            <div className="col-6">
                                                <label
                                                    htmlFor="editImage"
                                                    className="form-label"
                                                >
                                                    Ảnh sản phẩm
                                                </label>
                                                <ImageUploader />
                                                <label
                                                    htmlFor="editProduct"
                                                    className="form-label"
                                                >
                                                    Sản phẩm
                                                </label>
                                                <Form.Select
                                                    aria-label="Sản phẩm"
                                                    className="form-control"
                                                    id="editProduct"
                                                >
                                                    <option value="product1">
                                                        Sản phẩm 1
                                                    </option>
                                                    <option value="product2">
                                                        Sản phẩm 2
                                                    </option>
                                                </Form.Select>
                                            </div>
                                            <div className="col-6">
                                                <label
                                                    htmlFor="editColor"
                                                    className="form-label"
                                                >
                                                    Màu sắc
                                                </label>
                                                <Form.Select
                                                    aria-label="Màu sắc"
                                                    className="form-control"
                                                    id="editColor"
                                                >
                                                    <option value="color1">
                                                        Màu 1
                                                    </option>
                                                    <option value="color2">
                                                        Màu 2
                                                    </option>
                                                </Form.Select>
                                                <label
                                                    htmlFor="editSize"
                                                    className="form-label"
                                                >
                                                    Kích thước
                                                </label>
                                                <Form.Select
                                                    aria-label="Kích thước"
                                                    className="form-control"
                                                    id="editSize"
                                                >
                                                    <option value="size1">
                                                        Size 1
                                                    </option>
                                                    <option value="size2">
                                                        Size 2
                                                    </option>
                                                </Form.Select>
                                            </div>
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
            <a
                href="#page-top"
                className="scroll-to-top rounded"
                onClick={handleScrollToTop}
            >
                <i className="fas fa-angle-up" />
            </a>
        </div>
    );
}

export default Product;
