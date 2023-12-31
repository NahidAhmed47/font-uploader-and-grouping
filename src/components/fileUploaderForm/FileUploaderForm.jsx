import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";

const FileUploaderForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [warningMessage, setWarningMessage] = useState("");
  const [fontInfo, setFontInfo] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Filter out files with the wrong extension (non-TTF files)
    const ttfFiles = acceptedFiles.filter((file) => file.name.endsWith(".ttf"));

    if (ttfFiles.length === 0) {
      // No valid TTF files were selected
      setWarningMessage("Please select a valid TTF file.");
    } else {
      setSelectedFiles(ttfFiles);
      setWarningMessage("");
    }
  };

  useEffect(() => {
    // Apply font style when selectedFiles change
    if (selectedFiles.length > 0) {
      // Fetch font info from PHP
      fetch('api/upload-font.php', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ "num1": 1, "num2": 2}),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data) {
            setFontInfo(data);
          }
        })
        .catch((error) => {
          console.error('Error fetching font info:', error);
        });
    }
  }, [selectedFiles]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".ttf",
  });
  console.log(selectedFiles);
  return (
    <div>
      <form
        {...getRootProps()}
        className="w-[70%] mx-auto lg:w-auto lg:px-56 py-28 rounded-md border-dashed border-2 bg-gray-50 font-serif flex flex-col items-center gap-2 cursor-pointer"
      >
        <input {...getInputProps()} />
        <BsCloudUpload className="w-7 h-7 lg:w-[35px] lg:h-[35px] text-gray-400"></BsCloudUpload>
        <p className="text-gray-500 text-base">
          <span className="font-semibold text-gray-600">Click to upload</span>{" "}
          or drag and drop
        </p>
        <p className="text-gray-500 text-sm">Only TTF file allowed</p>
        <p className="text-xs font-normal text-red-500 animate-pulse">
          {warningMessage}
        </p>
      </form>
    </div>
  );
};

export default FileUploaderForm;
