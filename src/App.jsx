import styles from "./app.module.scss";
import MenuItem from "./component/MenuItem";
import Header from "./component/Header";
import SearchFilter from "./component/SearchFilter";
import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [selectCategories, setSelectCategories] = useState("all");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className={styles.appContainer}>
      <Header />
      <SearchFilter />
      <div className={styles.products}>
        {products.map((product) => {
          return (
            <MenuItem
              key={product.id}
              image={product.image}
              title={product.title}
              subtitle={product.category}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
