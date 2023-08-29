import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";

const FileUploaderForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    // Handle dropped files here
    setSelectedFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".ttf", // Specify the accepted file types here
  });
  return (
    <div>
      <div {...getRootProps()} className="w-[70%] mx-auto lg:w-auto lg:px-56 py-28 rounded-md border-dashed border-2 bg-gray-50 font-serif flex flex-col items-center gap-2 cursor-pointer">
        <input {...getInputProps()} />
        <BsCloudUpload className="w-7 h-7 lg:w-[35px] lg:h-[35px] text-gray-400"></BsCloudUpload>
        <p className="text-gray-500 text-base"><span className="font-semibold text-gray-600">Click to upload</span> or drag and drop</p>
        <p className="text-gray-500 text-sm">Only TTF file allowed</p>
      </div>
    </div>
  );
};

export default FileUploaderForm;
