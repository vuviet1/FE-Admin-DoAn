import React, { useState } from "react";
import { Image } from "react-bootstrap";

const ImageUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setSelectedFile(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
    };

    const triggerFileInput = () => {
        document.getElementById("fileInput").click();
    };

    return (
        <div className="drag-area"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            onClick={triggerFileInput}
            style={{
                border: "2px dashed #cccccc",
                padding: "20px",
                textAlign: "center",
                borderRadius: "10px",
                cursor: "pointer",
                height: "300px",
                width: "300px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "0 auto",
            }}
        >
            {selectedFile ? (
                <div>
                    <Image
                        src={URL.createObjectURL(selectedFile)}
                        height={200}
                        width={200}
                        roundedCircle
                    />
                    <button
                        type="button"
                        className="btn btn-danger mt-2"
                        onClick={handleRemoveImage}
                    >
                        Bỏ ảnh
                    </button>
                </div>
            ) : (
                <p>Kéo và Thả để Tải ảnh lên hoặc Chọn ảnh</p>
            )}
            <input
                type="file"
                id="fileInput"
                style={{
                    display: "none",
                }}
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ImageUploader;
