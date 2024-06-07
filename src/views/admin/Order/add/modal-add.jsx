import React, { useEffect, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import request from "../../../../utils/request";
import CartModal from "./modal-cart";
import ProductSelectionModal from "./modal-add-product";

function AddOrderModal({ show, handleClose, onAddOrder }) {
    const [paymentMethods, setPaymentMethods] = useState([]);
    const [shippingMethods, setShippingMethods] = useState([]);
    const [users, setUsers] = useState([]);
    const [vouchers, setVouchers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [status, setStatus] = useState("");
    const [total, setTotal] = useState("");
    const [paymentMethodId, setPaymentMethodId] = useState("");
    const [shippingMethodId, setShippingMethodId] = useState("");
    const [paymentStatus, setPaymentStatus] = useState("");
    const [userId, setUserId] = useState("");
    const [voucherId, setVoucherId] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [note, setNote] = useState("");

    const [showCartModal, setShowCartModal] = useState(false);
    const [showProductSelectionModal, setShowProductSelectionModal] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const paymentMethodsResponse = await request.get(
                    "payment_method"
                );
                setPaymentMethods(paymentMethodsResponse.data.data);

                const shippingMethodsResponse = await request.get(
                    "shipping_method"
                );
                setShippingMethods(shippingMethodsResponse.data.data);

                const usersResponse = await request.get("user");
                setUsers(usersResponse.data.data);

                const vouchersResponse = await request.get("voucher");
                setVouchers(vouchersResponse.data.data);

                const employeesResponse = await request.get("employee");
                setEmployees(employeesResponse.data.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orderData = {
            address,
            phone_number: phoneNumber,
            status,
            total,
            payment_method_id: paymentMethodId,
            shipping_method_id: shippingMethodId,
            payment_status: paymentStatus,
            user_id: userId,
            voucher_id: voucherId,
            employee_id: employeeId,
            note,
        };

        try {
            const response = await request.post("order", orderData);
            console.log("Order added successfully:", response.data);
            onAddOrder();
            handleClose();
        } catch (error) {
            console.error("Failed to add order:", error);
        }
    };

    const handleShowCartModal = () => setShowCartModal(true);
    const handleShowProductSelectionModal = () => {
        fetchProducts(); // Hàm fetchProducts sẽ được viết ở dưới
        setShowProductSelectionModal(true);
    };

    const fetchProducts = async () => {
        try {
            const response = await request.get("products");
            setProducts(response.data); // Cập nhật danh sách sản phẩm trong state
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const addToCart = (selectedProductIds) => {
        const selectedProducts = products.filter(product => selectedProductIds.includes(product.id));
        setCartItems([...cartItems, ...selectedProducts]);
    };

    const removeFromCart = (productId) => {
        const updatedCartItems = cartItems.filter(item => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    return (
        <>
            <Modal show={show} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới đơn hàng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <h5>Thông tin đơn hàng</h5>
                        <div className="row">
                            <div className="col-6">
                                <Form.Group controlId="inputUser">
                                    <Form.Label>Người dùng</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={userId}
                                        onChange={(e) =>
                                            setUserId(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Chọn người dùng
                                        </option>
                                        {users.map((user) => (
                                            <option
                                                key={user.user_id}
                                                value={user.user_id}
                                            >
                                                {user.username}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="inputAddress">
                                    <Form.Label>Địa chỉ</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Địa chỉ ..."
                                        value={address}
                                        onChange={(e) =>
                                            setAddress(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="inputPhoneNumber">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Số điện thoại ..."
                                        value={phoneNumber}
                                        onChange={(e) =>
                                            setPhoneNumber(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="inputStatus">
                                    <Form.Label>Trạng thái</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Trạng thái ..."
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                    />
                                </Form.Group>
                                <Form.Group controlId="inputTotal">
                                    <Form.Label>Tổng tiền</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Tổng tiền ..."
                                        value={total}
                                        onChange={(e) =>
                                            setTotal(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </div>
                            <div className="col-6">
                                <Form.Group controlId="inputPaymentStatus">
                                    <Form.Label>
                                        Trạng thái thanh toán
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Trạng thái thanh toán ..."
                                        value={paymentStatus}
                                        onChange={(e) =>
                                            setPaymentStatus(e.target.value)
                                        }
                                    />
                                </Form.Group>

                                <Form.Group controlId="inputVoucher">
                                    <Form.Label>Voucher</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={voucherId}
                                        onChange={(e) =>
                                            setVoucherId(e.target.value)
                                        }
                                    >
                                        <option value="">Chọn voucher</option>
                                        {vouchers.map((voucher) => (
                                            <option
                                                key={voucher.voucher_id}
                                                value={voucher.voucher_id}
                                            >
                                                {voucher.voucher_code}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="inputEmployee">
                                    <Form.Label>Nhân viên</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={employeeId}
                                        onChange={(e) =>
                                            setEmployeeId(e.target.value)
                                        }
                                    >
                                        <option value="">Chọn nhân viên</option>
                                        {employees.map((employee) => (
                                            <option
                                                key={employee.employee_id}
                                                value={employee.employee_id}
                                            >
                                                {employee.employee_name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="inputPaymentMethod">
                                    <Form.Label>
                                        Phương thức thanh toán
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={paymentMethodId}
                                        onChange={(e) =>
                                            setPaymentMethodId(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Chọn phương thức thanh toán
                                        </option>
                                        {paymentMethods.map((method) => (
                                            <option
                                                key={method.payment_method_id}
                                                value={method.payment_method_id}
                                            >
                                                {method.payment_method_name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="inputShippingMethod">
                                    <Form.Label>
                                        Phương thức vận chuyển
                                    </Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={shippingMethodId}
                                        onChange={(e) =>
                                            setShippingMethodId(e.target.value)
                                        }
                                    >
                                        <option value="">
                                            Chọn phương thức vận chuyển
                                        </option>
                                        {shippingMethods.map((method) => (
                                            <option
                                                key={method.shipping_method_id}
                                                value={
                                                    method.shipping_method_id
                                                }
                                            >
                                                {method.shipping_method_name}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </div>
                            <div className="col-12">
                                <Form.Group controlId="inputNote">
                                    <Form.Label>Ghi chú</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Ghi chú ..."
                                        value={note}
                                        onChange={(e) =>
                                            setNote(e.target.value)
                                        }
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <hr />
                        <h5 style={{ marginTop: "15px" }}>Thông tin chi tiết đơn hàng</h5>
                        <div className="row" style={{ marginTop: "15px", display:"flex", justifyContent:"center", marginBottom:"20px" }}>
                            <Button onClick={handleShowCartModal}>
                                Danh sách sản phẩm
                            </Button>
                        </div>
                        <Modal.Footer>
                            <Button
                                variant="outline-primary"
                                onClick={handleClose}
                            >
                                Hủy bỏ
                            </Button>
                            <Button variant="primary" type="submit">
                                Thêm mới
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

            {/* Modal giỏ hàng */}
            <CartModal
                show={showCartModal}
                handleClose={() => setShowCartModal(false)}
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                handleShowProductSelection={handleShowProductSelectionModal}
            />

            {/* Modal chọn sản phẩm */}
            <ProductSelectionModal
                show={showProductSelectionModal}
                handleClose={() => setShowProductSelectionModal(false)}
                products={products}
                addToCart={addToCart}
            />
        </>
    );
}

export default AddOrderModal;
