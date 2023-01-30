import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewItem() {
  const [item, setItem] = useState({
    name: "",
    price: "",
    imageUrl: "",
    available:""
  });

  const { itemId } = useParams();

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    const items = await axios.get(`http://localhost:8080/api/items/view/${itemId}`);
    setItem(items.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Item Details</h2>

          <div className="card">
            <div className="card-header">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                 <b>Item Id : </b> 
                 {item.itemId}
                </li>
                <li className="list-group-item">
                  <b>Item Name : </b>
                  {item.name}
                </li>
                <li className="list-group-item">
                  <b>Item Price : </b>
                  {item.price}
                </li>
                <li className="list-group-item">
                  <b>Item imageUrl : </b>
                  {item.imageUrl}
                </li>
                <li className="list-group-item">
                  <b>Item availability : </b>
                  {item.available.toString()}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}