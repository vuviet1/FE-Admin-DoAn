import React, { useState } from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Topbar from "../components/topbar";
import Footer from "../components/footer";
import AddCustomerModal from "./modal-add";
import EditCustomerModal from "./modal-edit";
import ViewCustomerModal from "./modal-view";

function Customer() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);

    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleAddCustomer = (customer) => {
        console.log("Thêm khách hàng mới: ", customer);
    };

    const handleEditCustomer = (customer) => {
        console.log("Cập nhật khách hàng: ", customer);
    };

    const handleViewCustomer = (customer) => {
        setSelectedCustomer(customer);
        setShowViewModal(true);
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
                            <h1 className="h3 mb-0 text-gray-800">
                                Khách hàng
                            </h1>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    Danh mục quản lý
                                </li>
                                <li
                                    className="breadcrumb-item active"
                                    aria-current="page"
                                >
                                    Khách hàng
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
                                        <Button
                                            variant="primary"
                                            onClick={() =>
                                                setShowAddModal(true)
                                            }
                                        >
                                            <i className="fas fa-plus" />
                                            Thêm mới
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
                                                    <td>Tiger Nixon</td>
                                                    <td>
                                                    <Button
                                                            variant="info"
                                                            className="ml-2"
                                                            onClick={() => handleViewCustomer({
                                                                id: 1,
                                                                name: "Tiger Nixon",
                                                                email: "tiger@example.com",
                                                                phone: "123456789",
                                                                password: "",
                                                                status: "1",
                                                                role: "Customer",
                                                                address: "123 Main St",
                                                                notes: "Some notes",
                                                                image: "holder.js/171x180"
                                                            })}
                                                        >
                                                            <i className="fas fa-info-circle" />
                                                        </Button>
                                                        <Button
                                                            variant="success"
                                                            className="ml-2"
                                                            onClick={() => {
                                                                setSelectedCustomer(
                                                                    {
                                                                        id: 1,
                                                                        name: "Tiger Nixon",
                                                                        email: "tiger@example.com",
                                                                        phone: "123456789",
                                                                        password:
                                                                            "",
                                                                        status: "1",
                                                                        role: "Customer",
                                                                        address:
                                                                            "123 Main St",
                                                                        notes: "Some notes",
                                                                        image: "holder.js/171x180",
                                                                    }
                                                                );
                                                                setShowEditModal(
                                                                    true
                                                                );
                                                            }}
                                                        >
                                                            <i className="far fa-edit" />
                                                        </Button>
                                                        <Button
                                                            variant="danger"
                                                            className="ml-2"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </Button>
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
            <a
                href="#page-top"
                className="scroll-to-top rounded"
                onClick={handleScrollToTop}
            >
                <i className="fas fa-angle-up" />
            </a>

            <AddCustomerModal
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
                onAddCustomer={handleAddCustomer}
            />

            {selectedCustomer && (
                <EditCustomerModal
                    show={showEditModal}
                    handleClose={() => setShowEditModal(false)}
                    customerData={selectedCustomer}
                    onUpdateCustomer={handleEditCustomer}
                />
            )}

            {selectedCustomer && (
                <ViewCustomerModal
                    show={showViewModal}
                    handleClose={() => setShowViewModal(false)}
                    customerData={selectedCustomer}
                />
            )}
        </div>
    );
}

export default Customer;
