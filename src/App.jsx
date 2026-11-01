import styles from "./app.module.scss";
import MenuItem from "./component/MenuItem";
import Header from "./component/Header";
import SearchFilter from "./component/searchFilter";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [selectCategories, setSelectCategories] = useState("all");
  const [ searchVal, setSearchVal] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];

  const FilteredProducts = products.filter((product)=>{
    return (selectCategories==="all" || product.category === selectCategories) && product.title.toLowerCase().includes(appliedSearch.toLowerCase())
  })

  return (
    <div className={styles.appContainer}>
      <Header />
      <SearchFilter 
      searchVal={searchVal}
      setSearchVal={setSearchVal}
      setAppliedSearch= {setAppliedSearch}
      products={products} 
      categories={categories}
      selectCategories = {selectCategories}
      setSelectCategories = {setSelectCategories}
      />
      <div className={styles.products}>
        {FilteredProducts.map((product) => {
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
