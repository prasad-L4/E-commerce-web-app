import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const SpecificCategory = () => {
  const { names} = useParams();
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    const fetchCat = async () => {
      const response = await fetch(
        (`https://fakestoreapi.com/products/category/${names}`)
      );
      const data = await response.json();
      setCatagory(data);
    };
    fetchCat();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        {catagory.map((cat) => (
          <div 
          className="col-lg-3 col-md-4 col-sm-6  mb-4  d-flex justify-content-center mt-4">
            <Link to={`./${cat.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                style={{
                  width: "15rem",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                <Card.Img
                  variant="top"
                  src={cat.image}
                  style={{ height: "240px" }}
                />
                <Card.Body>
                  <Card.Title style={{ textDecoration: "none" }}>
                    {cat.title}
                  </Card.Title>
                  <Card.Text className="text-center fw-bold">
                    ${cat.price}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button variant="dark">Buy Now</Button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecificCategory;