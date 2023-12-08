import React, { useRef } from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const ImageUploadButton = ({ onFileChange }) => {
	const fileInputRef = useRef(null);

	const handleButtonClick = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			// You can perform additional actions with the selected file if needed
			onFileChange(file);
		}
	};

	return (
		<div>
			<input
				type="file"
				accept="image/*"
				style={{ display: "none" }}
				ref={fileInputRef}
				onChange={handleFileChange}
			/>
			<IconButton
				color="primary"
				onClick={handleButtonClick}>
				<PhotoCameraIcon />
			</IconButton>
		</div>
	);
};

export default ImageUploadButton;
