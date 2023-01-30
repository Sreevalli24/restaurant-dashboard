import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const items = await axios.get("http://localhost:8080/api/items/viewall");
    setItems(items.data);
  };

  const deleteItem = async (itemId) => {
    await axios.get(`http://localhost:8080/api/items/remove/${itemId}`);
    loadItems();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Item id</th>
              <th scope="col">Item Name</th>
              <th scope="col">Item Price</th>
              <th scope="col">Item ImageUrl</th>
              <th scope="col">Item availability</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((items, index) => (
              <tr>
                <td>{items.itemId}</td>
                <td>{items.name}</td>
                <td>{items.price}</td>
                <td>{items.imageUrl}</td>
                <td>{items.available.toString()}</td>
                <td>
                <Link
                    className="btn btn-primary mx-2"
                    to={`/viewitem/${items.itemId}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/edititem/${items.itemId}`}
                  >
                    Update
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteItem(items.itemId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}