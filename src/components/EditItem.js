import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditItem() {
  let navigate = useNavigate();

  const { itemId } = useParams();

  const [item, setItem] = useState({
    price : "",
    available : ""
  });

  const {price, available} = item;

  const onInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadItem();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/items/update/${itemId}`, item);
    navigate("/");
  };

  const loadItem = async () => {
    const items = await axios.get(`http://localhost:8080/api/items/view/${itemId}`);
    setItem(items.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Update Item Details</h2>

          <form onSubmit={(e) => onSubmit(e)}>
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
              <label htmlFor="available" className="form-label">
                Item Availability
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
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}