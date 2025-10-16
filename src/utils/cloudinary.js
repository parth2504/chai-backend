import { v2 } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (localFilePath) return null;
    //upload file on cloudinary

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //file has been uploaded succesfull
    console.log("file is upload on cloudinary", response.url);
    response.url;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the localy saved temporary file as the upload got failed
    return null;
  }
};

export { uploadOnCloudinary };
