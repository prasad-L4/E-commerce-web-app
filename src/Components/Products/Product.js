import React, { useEffect, useState } from "react";
import "./Product.css";
import { Button, Card } from "react-bootstrap";

import { Link } from "react-router-dom";
import Category from "../Categories/Category";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
     
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="products">
      < div className="container">
        <div className="row">
          <div className="col-12 ">
            <h1 className="latest-products text-center fw-bold mt-3">
              Latest Products
            </h1>
          </div>
        </div>
       
        
         
       
        
          
       
         
       
        <div className="row ">
          {products.map((product) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center ">
           
           <Link style={{textDecoration:'none'}} to={`./single/${product.id}`}>
              <Card  style={{ width: "15rem" ,cursor:"pointer",textDecoration:'none' }} >
                <Card.Img variant="top " src={product.image} style={{ height:"230px"}} />
                <Card.Body>
                  <Card.Title style={{textDecoration:'none'}}>{product.title}</Card.Title>
                  <Card.Text className="text-center fw-bold " >${product.price}</Card.Text>
                 
                  <Button variant="primary ms-5">Buy Now</Button>
                  
                </Card.Body>
              </Card>
              </Link>
              
            
        
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;