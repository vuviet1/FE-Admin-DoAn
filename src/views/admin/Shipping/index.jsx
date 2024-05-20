/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, Fragment } from "react"
import Table from "react-bootstrap/Table"

import database from "../components/database"
import Topbar from "../components/topbar"
import Footer from "../components/footer"
import request from "../../../utils/request"
import { Link } from "react-router-dom"

function Shipping() {
    const [shippings, setShippings] = useState([])
    const [shipping_method, setShippingMethod] = useState("")
    // const [note, setNote] = useState("")
    const [selectedShippingId, setSelectedShippingId] = useState(null)
    const [selectedShipping, setSelectedShipping] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get("shipping")
                // console.log(response.json(response.data.data.data))
                setShippings(response.data.data.data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        let table
        if (shippings.length > 0) {
            table = database.initializeDataTable("#dataTableHover")
        }
            return () => {
                if(table) {
                    table.destroy()
                }
            }
    }, [shippings])

    // Add the shipping
    const addShipping = async () => {
        try {
            const response = await request.post("shipping", {
                shipping_method: shipping_method,
            })
            console.log("Shipping method added successfully:", response.data)
            window.location.reload()
        } catch (error) {
            console.error("Failed to add Shipping method:", error)
        }
    }

    // Update the shipping
    const handleEditButtonClick = async (shipping_method_id) => {
        try {
            // Gọi API để lấy dữ liệu category có id tương ứng
            const response = await request.get(`shipping/${shipping_method_id}`)
            if (response.data) {
                setSelectedShipping(response.data)
                setSelectedShippingId(shipping_method_id)
            } else {
                console.error("No data returned from the API")
            }
        } catch (error) {
            console.error("Error while fetching Shipping data:", error)
        }
    }

    const updateShipping = async () => {
        try {
            if (!selectedShipping.shipping_method) {
                console.error("Trường phương thức thanh toán là bắt buộc.")
                return
            }

            await request.put(`shipping/${selectedShippingId}`, {
                // selectedShipping
                shipping_method: selectedShipping.shipping_method,
            })
            window.location.reload()
        } catch (error) {
            console.error("Error updating shipping:", error)
        }
    }

    // Delete the shipping
    const deleteShipping = async (shipping_method_id) => {
        if (
            window.confirm(
                "Bạn có chắc muốn xóa phương thức thanh toán này không?"
            )
        ) {
            try {
                await request.delete(`shipping/${shipping_method_id}`)
                window.location.reload() // Reload trang sau khi xóa
            } catch (error) {
                console.error("Error deleting shipping:", error)
            }
        }
    }

    const ShippingTableBody = ({
        shippings,
        handleEditButtonClick,
        deleteShipping,
    }) => {
        return (
            <tbody>
                {shippings.map((shipping, index) => (
                    <tr key={index}>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {shipping.shipping_method_id}
                        </td>
                        <td
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {shipping.shipping_method}
                        </td>
                        <td style={{ textAlign: "center" }}>
                            <button
                                type="button"
                                className="btn btn-success"
                                data-toggle="modal"
                                data-target="#editModal"
                                style={{marginRight: "5px"}}
                                onClick={() =>
                                    handleEditButtonClick(
                                        shipping.shipping_method_id
                                    )
                                }
                            >
                                <i className="far fa-edit" />
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() =>
                                    deleteShipping(shipping.shipping_method_id)
                                }
                            >
                                <i className="fas fa-trash" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Fragment>
            <div id="wrapper">
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <Topbar />

                        {/* Container Fluid*/}

                        <div className="container-fluid" id="container-wrapper">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">
                                    Phương thức thanh toán
                                </h1>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        Danh mục quản lý
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        Phương thức thanh toán
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
                                                Phương thức thanh toán
                                            </h6>
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-toggle="modal"
                                                data-target="#modalAdd"
                                                id="#modalCenter"
                                            >
                                                <i className="fas fa-plus" />
                                                Thêm mới
                                            </button>
                                        </div>
                                        <div className="table-responsive p-3">
                                            <Table
                                                className="table align-items-center table-flush table-hover"
                                                id="dataTableHover"
                                            >
                                                <thead className="thead-light">
                                                    <tr>
                                                        <th style={{
                                                                textAlign:
                                                                    "left",
                                                            }}>Mã</th>
                                                        <th style={{
                                                                textAlign:
                                                                    "left",
                                                            }}>Tên phương thức</th>
                                                        {/* <th>Ghi chú</th> */}
                                                        <th
                                                            style={{
                                                                textAlign:
                                                                    "center",
                                                            }}
                                                        >
                                                            Hành động
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <ShippingTableBody shippings={shippings} handleEditButtonClick={handleEditButtonClick} deleteShipping={deleteShipping} />
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Row*/}

                            {/* Modal */}
                            <div
                                className="modal fade"
                                id="modalAdd"
                                tabIndex={-1}
                                role="dialog"
                                aria-labelledby="modalAddTitle"
                                aria-hidden="true"
                            >
                                <div
                                    className="modal-dialog modal-dialog-centered"
                                    role="document"
                                >
                                    <form
                                        className="modal-content"
                                        onSubmit={(e) => {
                                            e.preventDefault()
                                            addShipping()
                                        }}
                                    >
                                        <div className="modal-header">
                                            <h5
                                                className="modal-title"
                                                id="modalAddTitle"
                                            >
                                                Thêm mới phương thức thanh toán
                                            </h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-12">
                                                <label
                                                    htmlFor="shipping_method"
                                                    className="form-label"
                                                >
                                                    Tên phương thức
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="shipping_method"
                                                    placeholder="Tên phương thức thanh toán mới ..."
                                                    value={shipping_method}
                                                    onChange={(e) =>
                                                        setShippingMethod(
                                                            e.target.value
                                                        )
                                                    }
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
                                    </form>
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
                                                Cập nhật phương thức thanh toán
                                            </h5>
                                            <button
                                                type="button"
                                                className="close"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                            >
                                                <span aria-hidden="true">
                                                    ×
                                                </span>
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="col-12">
                                                <label
                                                    htmlFor="shipping_method_edit"
                                                    className="form-label"
                                                >
                                                    Tên phương thức
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="shipping_method_edit"
                                                    placeholder="Cập nhật tên phương thức thanh toán mới ..."
                                                    value={
                                                        selectedShipping.shipping_method
                                                    }
                                                    onChange={(e) =>
                                                        setSelectedShipping({
                                                            ...selectedShipping,
                                                            shipping_method:
                                                                e.target.value,
                                                        })
                                                    }
                                                />
                                            </div>
                                            {/* <div className="col-12">
                    <label
                        htmlFor="note_edit"
                        className="form-label"
                    >
                        Ghi chú
                    </label>
                    <textarea
                        className="form-control"
                        id="note_edit"
                        rows={3}
                        defaultValue={selectedShipping.note || ''}
                        onChange={(e) => setSelectedShipping({...selectedShipping, note: e.target.value})}
                    />
                </div> */}
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
                                                type="button"
                                                className="btn btn-primary"
                                                onClick={updateShipping}
                                            >
                                                Cập nhật
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Modal */}
                        </div>

                        {/*-Container Fluid*/}

                        {/* Footer */}
                        <Footer />
                    </div>
                </div>
                {/* Scroll to top */}
                <a href="#page-top" className="scroll-to-top rounded" onClick={handleScrollToTop}>
                    <i className="fas fa-angle-up" />
                </a>
            </div>
        </Fragment>
    )
}
export default Shipping
