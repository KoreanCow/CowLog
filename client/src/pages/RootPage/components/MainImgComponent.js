import React from 'react'
import './MainImgComponent.scss'
const MainImgComponent = ({ mainImgs }) => {
  console.log(mainImgs)
  return (
    <div className='RootPageBody-MainImg'>
      {mainImgs.map((img, index) => (
        <img key={index} src={img.fileUrl} alt={`Main Image ${index}`} />
      ))}
    </div>
  )
}

export default MainImgComponent;
