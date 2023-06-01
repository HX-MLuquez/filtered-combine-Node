import React, { useState, useEffect } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleApplyFilters = (filters) => {
    //! ---------------CODE AQUI----------------------------
    let url = "http://localhost:8001/products/filtered?";
    if (filters.category) url = url.concat(`category=${filters.category}&`);
    if (filters.minPrice) url = url.concat(`minPrice=${filters.minPrice}&`);
    if (filters.maxPrice) url = url.concat(`maxPrice=${filters.maxPrice}&`);
    if (filters.condition) url = url.concat(`condition=${filters.condition}&`);
    if (url[url.length - 1] === "&" || url[url.length - 1] === "?")
      url = url.slice(0, -1);
    fetch(url)
      .then((res) => res.json())
      .then((dta) => setProducts(dta))
      .catch((err) => console.log({ message: err }));
  };
  function handleResetFilters() {
    //! ---------------CODE AQUI----------------------------
    fetch("http://localhost:8001/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }

  return (
    <div className="App">
      <SideBar
        handleApplyFilters={handleApplyFilters}
        handleResetFilters={handleResetFilters}
      />
      <ProductList products={products} />
    </div>
  );
}

export default App;
