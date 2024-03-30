import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

interface DragDropProps {
    fileTypes: string[];
    hoverTitle: string; // Define the prop type for hoverTitle
    hoverStyle: React.CSSProperties;
}

function DragDrop({ fileTypes, hoverTitle, hoverStyle }: DragDropProps) {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <div>
        <FileUploader handleChange={handleChange} name="file" types={fileTypes} hoverTitle={hoverTitle} dropMessageStyle={hoverStyle}/>
        </div>
    );
}

export default DragDrop;

