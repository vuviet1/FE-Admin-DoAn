import React, { useState } from "react";
import { Image } from "react-bootstrap";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import AddProductModal from "./modal-add";

function Product() {
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [showAddModal, setShowAddModal] = useState(false);

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
                                    <Link to={"/"}>Home</Link>
                                </li>
                                <li className="breadcrumb-item">Danh mục quản lý</li>
                                <li className="breadcrumb-item active" aria-current="page">
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
                                        <h6 className="m-0 font-weight-bold text-primary">Danh sách sản phẩm</h6>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => setShowAddModal(true)}
                                        >
                                            <i className="fas fa-plus" /> Thêm mới
                                        </button>
                                    </div>
                                    <div className="table-responsive p-3">
                                        <table className="table align-items-center table-flush table-hover" id="dataTableHover">
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
            <AddProductModal show={showAddModal} onHide={() => setShowAddModal(false)} />
        </div>
    );
}

export default Product;
