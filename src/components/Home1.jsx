import React, { useState } from 'react';
import './home1.css';

export const Home1 = () => {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a new post object
    const newPost = {
      image,
      caption,
    };

    // Update the state with the new post
    setPosts((prevPosts) => [...prevPosts, newPost]);

    // Clear the input fields
    setImage(null);
    setCaption('');
  };

  return (
    <div>
      <h1 className="heading">Find Solution For Your Problem</h1>

      <h2 className="headPost">Post your Problem</h2>
      <div className="post">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="image" className="custom-file-label">
                Image
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="custom-file-input"
              />
            </div>
            <br />
            <div>
              <label htmlFor="caption">Caption:</label>
              <input
                type="text"
                id="caption"
                value={caption}
                onChange={handleCaptionChange}
              />
            </div>
            <br />
            <button type="submit">Upload</button>
          </form>
        </div>

        {posts.map((post, index) => (
          <div className="postbox" key={index}>
            <img
              src={URL.createObjectURL(post.image)}
              alt="Uploaded"
              style={{ maxWidth: '300px' }}
            />
            <p className="cap">Problem: {post.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
