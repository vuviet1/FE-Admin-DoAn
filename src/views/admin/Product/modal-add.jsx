import React, { useEffect, useState } from "react"
import { Form, Modal, Button, Tab, Nav } from "react-bootstrap"
import ImageUploader from "../components/ImageUploader"
import ImageLibrary from "../ImageLibrary/image-upload"
import request from "../../../utils/request" // Make sure the request utility is correctly imported

function AddProductModal({ show, onHide }) {
    const [selectedImage, setSelectedImage] = useState(null)
    const [showImageLibrary, setShowImageLibrary] = useState(false)

    const [brands, setBrands] = useState([])
    const [categories, setCategories] = useState([])
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await request.get("brand")
                setBrands(response.data.data)
            } catch (error) {
                console.error("Error fetching brands:", error)
            }
        }

        const fetchCategories = async () => {
            try {
                const response = await request.get("category")
                setCategories(response.data.data)
            } catch (error) {
                console.error("Error fetching categories:", error)
            }
        }

        const fetchColors = async () => {
            try {
                const response = await request.get("color")
                console.log(response.data.data)
                setColors(response.data.data)
            } catch (error) {
                console.error("Error fetching colors:", error)
            }
        }

        const fetchSizes = async () => {
            try {
                const response = await request.get("size")
                console.log(response.data.data)
                setSizes(response.data.data)
            } catch (error) {
                console.error("Error fetching sizes:", error)
            }
        }

        fetchBrands()
        fetchCategories()
        fetchColors()
        fetchSizes()
    }, [])

    const handleImageSelectFromLibrary = (imageInfo) => {
        setSelectedImage(imageInfo)
        setShowImageLibrary(false)
    }

    return (
        <>
            <Modal show={show} onHide={onHide} size="xl" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Thêm mới sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Thông tin chung</h5>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="inputName" className="form-label">
                                Tên sản phẩm
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                placeholder="Tên sản phẩm mới ..."
                            />
                            <label htmlFor="inputQuantity" className="form-label">
                                Số lượng
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="inputQuantity"
                                placeholder="Số lượng ..."
                            />
                            <label htmlFor="inputPrice" className="form-label">
                                Giá
                            </label>
                            <input
                                type="number"
                                className="form-control"
                                id="inputPrice"
                                placeholder="Giá sản phẩm ..."
                            />
                            <label htmlFor="inputBrand" className="form-label">
                                Thương hiệu
                            </label>
                            <Form.Select
                                aria-label="Thương hiệu"
                                className="form-control"
                                id="inputBrand"
                            >
                                {brands.map((brand) => (
                                    <option key={brand.brand_id} value={brand.brand_id}>{brand.brand_name}</option>
                                ))}
                            </Form.Select>
                            <label htmlFor="inputCategory" className="form-label">
                                Danh mục
                            </label>
                            <Form.Select
                                aria-label="Danh mục"
                                className="form-control"
                                id="inputCategory"
                            >
                                {categories.map((category) => (
                                    <option key={category.category_id} value={category.category_id}>{category.category_name}</option>
                                ))}
                            </Form.Select>
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputDescription" className="form-label">
                                Mô tả
                            </label>
                            <textarea
                                className="form-control"
                                id="inputDescription"
                                rows={5}
                                placeholder="Mô tả sản phẩm ..."
                            />
                            <label htmlFor="inputNote" className="form-label">
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
                            <Tab.Container id="left-tabs-example" defaultActiveKey="upload">
                                <Nav variant="tabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="upload">Tải ảnh lên</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="library">Chọn từ thư viện</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="upload">
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <ImageUploader />
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="library">
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => setShowImageLibrary(true)}
                                                >
                                                    Chọn ảnh từ thư viện
                                                </Button>
                                                {selectedImage && (
                                                    <div>
                                                        <img
                                                            src={selectedImage.url}
                                                            alt={selectedImage.title}
                                                            style={{ maxWidth: "100%", marginTop: "10px" }}
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                        <div className="col-6">
                            <label htmlFor="inputColor" className="form-label">
                                Màu sắc
                            </label>
                            <Form.Select
                                aria-label="Màu sắc"
                                className="form-control"
                                id="inputColor"
                            >
                                {colors.map((color) => (
                                    <option key={color.color_id} value={color.color_id}>{color.color}</option>
                                ))}
                            </Form.Select>
                            <label htmlFor="inputSize" className="form-label">
                                Kích thước
                            </label>
                            <Form.Select
                                aria-label="Kích thước"
                                className="form-control"
                                id="inputSize"
                            >
                                {sizes.map((size) => (
                                    <option key={size.size_id} value={size.size_id}>{size.size}</option>
                                ))}
                            </Form.Select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={onHide}>
                        Hủy bỏ
                    </Button>
                    <Button variant="primary">
                        Thêm mới
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={showImageLibrary}
                onHide={() => setShowImageLibrary(false)}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Chọn ảnh từ thư viện</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageLibrary onImageSelect={handleImageSelectFromLibrary} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddProductModal
