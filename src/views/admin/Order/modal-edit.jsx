import React from "react";

function EditOrder() {
    return (
        <div
            className="modal fade"
            id="editOrderModal"
            data-backdrop="static"
            data-keyboard="false"
            tabIndex={-1}
            aria-labelledby="editOrderModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="editOrderModalLabel">
                            Cập nhật đơn hàng
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
                        {/* Order General Information */}
                        <h5>Thông tin chung</h5>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <label
                                        htmlFor="purchaseDate"
                                        className="form-label"
                                    >
                                        Ngày mua hàng
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="purchaseDate"
                                    />
                                    <label
                                        htmlFor="address"
                                        className="form-label"
                                    >
                                        Địa chỉ
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="Địa chỉ giao hàng ..."
                                    />
                                    <label
                                        htmlFor="phoneNumber"
                                        className="form-label"
                                    >
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="phoneNumber"
                                        placeholder="Số điện thoại ..."
                                    />
                                    <label
                                        htmlFor="total"
                                        className="form-label"
                                    >
                                        Tổng tiền
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="total"
                                        placeholder="Tổng tiền ..."
                                    />
                                </div>
                                <div className="col-6">
                                    <label
                                        htmlFor="status"
                                        className="form-label"
                                    >
                                        Trạng thái
                                    </label>
                                    <select
                                        className="form-control"
                                        id="status"
                                    >
                                        <option value="pending">
                                            Chờ xử lý
                                        </option>
                                        <option value="shipped">
                                            Đã giao hàng
                                        </option>
                                        <option value="delivered">
                                            Đã nhận hàng
                                        </option>
                                    </select>
                                    <label
                                        htmlFor="paymentStatus"
                                        className="form-label"
                                    >
                                        Trạng thái thanh toán
                                    </label>
                                    <select
                                        className="form-control"
                                        id="paymentStatus"
                                    >
                                        <option value="pending">
                                            Chờ thanh toán
                                        </option>
                                        <option value="completed">
                                            Đã thanh toán
                                        </option>
                                        <option value="failed">
                                            Thanh toán thất bại
                                        </option>
                                    </select>
                                    <label
                                        htmlFor="paymentMethod"
                                        className="form-label"
                                    >
                                        Phương thức thanh toán
                                    </label>
                                    <select
                                        className="form-control"
                                        id="paymentMethod"
                                    >
                                        <option value="cash">Tiền mặt</option>
                                        <option value="credit_card">
                                            Thẻ tín dụng
                                        </option>
                                        <option value="bank_transfer">
                                            Chuyển khoản
                                        </option>
                                    </select>
                                    <label
                                        htmlFor="shippingMethod"
                                        className="form-label"
                                    >
                                        Phương thức vận chuyển
                                    </label>
                                    <select
                                        className="form-control"
                                        id="shippingMethod"
                                    >
                                        <option value="standard">
                                            Giao hàng tiêu chuẩn
                                        </option>
                                        <option value="express">
                                            Giao hàng nhanh
                                        </option>
                                        <option value="self_pickup">
                                            Tự đến lấy hàng
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="note" className="form-label">
                                Ghi chú
                            </label>
                            <textarea
                                className="form-control"
                                id="note"
                                rows={3}
                                placeholder="Ghi chú ..."
                            />
                        </div>
                        {/* Order Detail Information */}
                        <hr />
                        <h5>Thông tin chi tiết</h5>
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <label
                                        htmlFor="quantity"
                                        className="form-label"
                                    >
                                        Số lượng
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="quantity"
                                        placeholder="Số lượng ..."
                                    />
                                    <label
                                        htmlFor="price"
                                        className="form-label"
                                    >
                                        Giá
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="price"
                                        placeholder="Giá ..."
                                    />
                                </div>
                                <div className="col-6">
                                    <label
                                        htmlFor="userId"
                                        className="form-label"
                                    >
                                        Khách hàng
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userId"
                                        placeholder="ID người dùng ..."
                                    />
                                    <label
                                        htmlFor="orderId"
                                        className="form-label"
                                    >
                                        ID đơn hàng
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="orderId"
                                        placeholder="ID đơn hàng ..."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <label
                                htmlFor="orderDetailNote"
                                className="form-label"
                            >
                                Ghi chú
                            </label>
                            <textarea
                                className="form-control"
                                id="orderDetailNote"
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
                        <button type="submit" className="btn btn-primary">
                            Cập nhật
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditOrder
