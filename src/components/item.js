import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const [item, setItem] = useState({});
  const [itemId, setItemId] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [routeRedirect, setRouteRedirect] = useState('');

  function getItem() {
    const { id } = props.match.params;
    const cleanId = id.replace(/['"]+/g, '');
    SVGComponentTransferFunctionElement(cleanId);
    fetch(`http://localhost:5000/api/item/${cleanId}`)
      .then((res) => res.json())
      .then((response) => {
        const parsedRes = JSON.parse(response.data);
        setItem(parsedRes);
        setProductName(parsedRes.name);
        setDescription(parsedRes.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getItem();
  });

  const editItem = (itemId) => {
    console.log(itemId);
    setEditMode(!editMode);
  };
  const updateItem = (e) => {
    e.preventDefault();
    const item = {
      itemId,
      name: productName,
      description,
      image,
      amount: price,
    };
    console.log(item);
    const options = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    };
    fetch(`http://localhost:5000/api/update/${itemId}`, options)
      .then((res) => res.json)
      .then((res) => {
        console.log(res);
        setRouteRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const redirect = routeRedirect;
  if (redirect) {
    return <Redirect to="/" />;
  }
  const deleteItem = (itemId) => {
    const options = {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: itemId }),
    };
    fetch(`http://localhost:5000/api/delete/${itemId}`, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setRouteRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let editForm;
  if (editMode) {
    editForm = (
      <>
        <form className="editform">
          <p> updated the item values below:</p>
        </form>
      </>
    );
  }
};
