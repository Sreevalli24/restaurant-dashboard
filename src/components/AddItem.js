import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddItem() {
  let navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    price: "",
    imageUrl: "",
    available:"",
  });

  const { name, price, imageUrl, available } = item;

  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/items/add", item);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Item</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Item Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter item name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Item Price
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter item price"
                name="price"
                value={price}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                 Item ImageUrl
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter item image url"
                name="imageUrl"
                value={imageUrl}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="available" className="form-label">
                Item availability 
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter item availability"
                name="available"
                value={available}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <button className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}