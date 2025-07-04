
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { useState } from 'react';
import { enhancedImageAPI } from '../utlis/enhancedImageApi';

const Home = () => {
  const [uploadImage, setUploadImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null)
  const [loading, setloading] = useState(false)

  const UploadImageHandler = async (file) => {
setUploadImage(URL.createObjectURL(file));
setloading(true)

//call the API to enhance the image
try {
  const enhancedURL=await enhancedImageAPI(file)
  setEnhancedImage(enhancedURL)
  setloading(false)
  //code which may produce error

} catch (error) {
  console.log(error);
  alert("Error while enhancing the image. Please try again later")
  
  //code to handle the error and show message

  }
  }
 
  
  return (
    <>
      <ImageUpload UploadImageHandler={UploadImageHandler} />
      <ImagePreview loading={loading} uploaded={uploadImage}
       enhanced={enhancedImage?.image} />
    </>
  );
};

export default Home;
