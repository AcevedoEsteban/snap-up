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
};
