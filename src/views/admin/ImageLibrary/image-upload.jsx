import { Image, Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";

function ImageUploader({ onDrop, onRemove, images }) {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: "image/*",
        multiple: true,
    });

    return (
        <div>
            <div
                {...getRootProps({ className: "dropzone" })}
                style={{
                    border: "2px dashed #007bff",
                    padding: "20px",
                    textAlign: "center",
                }}
            >
                <input {...getInputProps()} />
                <p>Kéo thả hoặc nhấn để chọn ảnh</p>
            </div>
            <div className="row mt-3">
                {images.map((image, index) => (
                    <div key={index} className="col-3 mb-3">
                        <Image
                            src={URL.createObjectURL(image)}
                            thumbnail
                            className="img-fluid"
                        />
                        <Button
                            variant="danger"
                            onClick={() => onRemove(index)}
                            className="mt-2"
                        >
                            Xóa
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageUploader