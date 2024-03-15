import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('image', image);
    
    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Image uploaded successfully');
      fetchImage(response.data._id);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const fetchImage = async (imageId) => {
    try {
      const response = await axios.get(`http://localhost:5000/image/${imageId}`, {
        responseType: 'arraybuffer'
      });
      const blob = new Blob([response.data], { type: 'image/png' });
      const imageUrl = URL.createObjectURL(blob);
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  return (
    <div>
      <h1>Image Upload</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleSubmit}>Upload Image</button>
      {imageUrl && (
        <div>
          <img src={imageUrl} alt="Uploaded" style={{ marginTop: '20px', maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default App;
