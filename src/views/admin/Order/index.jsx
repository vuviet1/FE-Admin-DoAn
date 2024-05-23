import React, { useState } from "react";
import { Button } from "react-bootstrap";

import Topbar from "../components/topbar";
import Footer from "../components/footer";
import AddOrder from "./modal-add";
import EditOrder from "./modal-edit";

function Order() {
    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

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
                            <h1 className="h3 mb-0 text-gray-800">Hóa đơn</h1>
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
                                    Danh sách đơn hàng
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
                                            Danh sách đơn hàng
                                        </h6>
                                        <Button
                                            variant="primary"
                                            onClick={handleShow}
                                        >
                                            Thêm mới đơn hàng
                                        </Button>
                                    </div>
                                    <div className="table-responsive p-3">
                                        <table
                                            className="table align-items-center table-flush table-hover"
                                            id="dataTableHover"
                                        >
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>STT</th>
                                                    <th>Ngày mua hàng</th>
                                                    <th>Địa chỉ</th>
                                                    <th>Số điện thoại</th>
                                                    <th>Tổng tiền</th>
                                                    <th>Trạng thái</th>
                                                    <th>Hành động</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>2024-05-20</td>
                                                    <td>123 Street, City</td>
                                                    <td>0123456789</td>
                                                    <td>$100.00</td>
                                                    <td>Đã giao hàng</td>
                                                    <td>
                                                        <button
                                                            type="button"
                                                            className="btn btn-info"
                                                            data-toggle="modal"
                                                            data-target="#editOrderModal"
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-success"
                                                            data-toggle="modal"
                                                            data-target="#editOrderModal"
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

            {/* Add Order Modal */}
            <AddOrder />

            {/* Edit Order Modal */}
            <EditOrder />
        </div>
    );
}

export default Order;
