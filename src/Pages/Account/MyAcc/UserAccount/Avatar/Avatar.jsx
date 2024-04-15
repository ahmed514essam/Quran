import React, { useState } from 'react'
import AvatarEditor from 'react-avatar-editor'

export default function Avatar() {


    const [image, setImage] = useState(null);
    const [editedImage, setEditedImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [editor, setEditor] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
      };
    
      const handleScaleChange = (e) => {
        const scale = parseFloat(e.target.value);
        setScale(scale);
      };

      const handleSave = () => {
        if (editor) {
          const canvas = editor.getImage();
      
          setEditedImage(canvas.toDataURL());
        }
      };

  return (
    <div>
    <input type="file" onChange={handleImageChange} accept="image/*" />
    {image && (
      <div>
        <AvatarEditor
          ref={(ref) => setEditor(ref)}
          image={image}
          width={250}
          height={250}
          border={50}
          scale={scale}
          onImageChange={() => setEditedImage(null)}
        />
        <input
          type="range"
          value={scale}
          min="1"
          max="2"
          step="0.01"
          onChange={handleScaleChange}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    )}
    {editedImage && <img src={editedImage} alt="Profile" />}
  </div>
  )
}
