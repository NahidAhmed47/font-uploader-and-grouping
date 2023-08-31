<?php 
    // require 'vendor/autoload.php';
    header("Access-Control-Allow-Origin: *");
//     echo "File started uploading";
//     $uploadDirectory = 'uploads/';

// if (!is_dir($uploadDirectory)) {
//     mkdir($uploadDirectory, 0777, true);
// }

// $fontFile = $_FILES['file'];
// echo $fontFile;
    if(isset($_POST)){

$data = json_decode(file_get_contents("php://input"));
echo $data;
    }
