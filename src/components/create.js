import React, { useState } from 'react';
import defaultImage from './dawn.jpg';

const Create = () => {
  const [productName, setproductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const createItem = (e) => {
    e.preventDefault('data');

    const item = {
      name: productName,
      description,
      image,
      amount: price,
    };
    const options = {
      method: 'post',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item),
    };
    if (description && image && productName && price) {
      fetch('http://localhost:5000/api/create', options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    } else {
      console.log('the form is not valid to be sent');
    }
  };

  const isImgReady = image;
  let imagePreview;
  if (isImgReady) {
    imagePreview = <img className="preview" src={image} alt="product" />;
  } else {
    imagePreview = (
      <img className="preview" src={defaultImage} alt="defaultIMG" />
    );
  }
  return (
    <>
      <form className="create" onSubmit={createItem}>
        <h2>create a new item</h2>
        <div className="control">
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setproductName(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="description"> product description:</label>
          <textarea
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="price">Product price</label>
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="control">
          <label htmlFor="image">Product image</label>
          <input
            type="text"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <input type="submit" value="create post" />
      </form>
      {imagePreview}
    </>
  );
};
export default Create;
