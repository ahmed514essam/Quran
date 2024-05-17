import React, { useEffect, useState } from 'react';
import style from "./Avatar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus } from '@fortawesome/free-solid-svg-icons';
export default function Avatar() {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [ user , setUser] = useState(false);

  const handleImageChange = (e) => {
    
    const file = e.target.files[0];
    setImage(file);
    setImageName(file.name);
  };

useEffect(() => {
if (image){
  setUser(true)
}
else {
  setUser(false)
}


}, [])


  return (
    <div className={style.allavatares}>
    <div className={style.divimge}>
    {image ? (
       <img src={URL.createObjectURL(image)} alt="user photo" />
    ) : (

      <img src="imges/user.jfif"/>
    )}
    
    </div>
    
      <label htmlFor="fileInput" className={style.customFileInput}>
        <span><FontAwesomeIcon icon={faPlus} /></span> Photo
      </label>
      <input
        type="file"
        id="fileInput"
        className={style.inputFile}
        onChange={handleImageChange}
        accept="image/*"
      />
    
    </div>
  );
}
