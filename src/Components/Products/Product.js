import React, { useEffect, useState } from "react";
import "./Product.css";
import { Button, Card } from "react-bootstrap";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1 className="latest-products text-center fw-bold mt-3">
              Latest Products
            </h1>
          </div>
        </div>
        <div className="row mt-3 mb-5">
          <div className="ctgry-btn col-12  ">
            <Button variant="dark m-1">All</Button>
            <Button variant="dark m-1">Jewellery</Button>
            <Button variant="dark m-1">Men's Clothing</Button>
            <Button variant="dark m-1">Women's Clothing</Button>
            <Button variant="dark m-1 ">Electronic</Button>
          </div>
        </div>
        <div className="row ">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center ">
              <Card style={{ width: "15rem" }} c>
                <Card.Img variant="top" src={product.image} height="250px" />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="text-center fw-bold" >${product.price}</Card.Text>
                  <Button variant="primary ms-4">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;