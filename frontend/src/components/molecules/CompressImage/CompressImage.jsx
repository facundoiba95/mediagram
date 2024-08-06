<<<<<<< HEAD
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext';
import imgAddContent from '../../../assets/addContentMediagram.png';

const CompressImage = () => {
  const { isSelectedImage, setIsSelectedImage } = useContext(GlobalContext);
  const [loadImage, setLoadImage] = useState(imgAddContent);

  const handleChangeImage = (e) => {
    setLoadImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <img src={loadImage} alt="image create content" id='img' />
      <input
        type="file"
        name="mediaFile"
        id="mediaFile"
        accept="image/*, video/*"
        onChange={(e) => handleChangeImage(e)}
      />
      <button onClick={() => setIsSelectedImage(!isSelectedImage)} className='btnSelectedImage'>Elegir imagen</button>
    </>
  )
}

=======
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext';
import imgAddContent from '../../../assets/addContentMediagram.png';

const CompressImage = () => {
  const { isSelectedImage, setIsSelectedImage } = useContext(GlobalContext);
  const [loadImage, setLoadImage] = useState(imgAddContent);

  const handleChangeImage = (e) => {
    setLoadImage(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <img src={loadImage} alt="image create content" id='img' />
      <input
        type="file"
        name="mediaFile"
        id="mediaFile"
        accept="image/*, video/*"
        onChange={(e) => handleChangeImage(e)}
      />
      <button onClick={() => setIsSelectedImage(!isSelectedImage)} className='btnSelectedImage'>Elegir imagen</button>
    </>
  )
}

>>>>>>> b3173dc1 (first commit in Ubuntu)
export default CompressImage