import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext';
import LoaderResponsive from '../Loaders/LoaderResponsive/LoaderResponsive';
import imgAddContent from '../../../assets/addContentMediagram.png';
import Compressor from 'compressorjs';

const CompressImage = () => {
    const { isSelectedImage, setIsSelectedImage } = useContext(GlobalContext);
    const [isLoadingChangeImage, setIsLoadingChangeImage] = useState(false);
    const [loadImage, setLoadImage] = useState(imgAddContent);

    const handleCompressImage = (e) => {
        const img = document.getElementById('imgPost');
        setIsLoadingChangeImage(true);
    
        let list = new DataTransfer(); // nueva lista de FileList, se envia al backend
        new Compressor(img.files[0], {
          quality: 0.8,
          success: (compressedResult) => {
            if (compressedResult.size > 10485760) { // limite de tamaño de archivo que soporta Cloudinary
              setIsLoadingChangeImage(false);
              alert('Debes subir imagenes menores a 10Mb')
              img.value = '';
              return;
            } else {
              setLoadImage(URL.createObjectURL(e.target.files[0]));
              let file = new File([compressedResult], compressedResult.name);
              list.items.add(file);
              const myListFiles = list.files;
              img.files = myListFiles;
              setIsLoadingChangeImage(false);
            }
          }
        });
      }

    return (
        <>
            {
                isLoadingChangeImage
                    ? <LoaderResponsive />
                    : <img src={loadImage} alt="image create content" id='img' />
            }
            <input
                type="file"
                name="imgPost"
                id="imgPost"
                accept='image/*'
                onChange={(e) => handleCompressImage(e)}
            />
            <button onClick={() => setIsSelectedImage(!isSelectedImage)} className='btnSelectedImage'>Elegir imagen</button>
        </>
    )
}

export default CompressImage