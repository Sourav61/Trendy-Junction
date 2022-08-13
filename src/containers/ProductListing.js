import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    // const response = await axios
    //   .get("https://fakestoreapi.com/products")
    //   .catch((err) => console.log("Err", err));

    const data = await fetch("https://fakestoreapi.com/products");

    const response = await data.json();
    console.log("check", data, response);
    dispatch(setProduct(response));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  //   console.log("Products:", products);
  return (
    <div className="container">
      <div className="row">
        <ProductComponent />
      </div>
    </div>
  );
};

export default ProductListing;
