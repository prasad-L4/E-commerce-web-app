import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const [Category, setcategory] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();

      setcategory(data);
    };
    console.log(Category);
    fetchCategory();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="h1 fw-bold text-center mt-2 "> Categories</h1>
        <div className="col-12 d-flex flex-wrap justify-content-center">
          <Link to={"/product"}>
            <Button variant="dark m1 mt-1">All</Button>
          </Link>

          {Category.map((card) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`./SpecificCategory/${card}`}
            >
              <div className="ctgry-btn   ">
                <Button variant="dark m-1">{card}</Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
