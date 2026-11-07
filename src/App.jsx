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
  const [appliedMinPrice, setAppliedMinPrice] = useState("");
  const [appliedMaxPrice, setAppliedMaxPrice] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];

  const FilteredProducts = products.filter((product)=>{

    console.log(
  product.price >= Number(appliedMinPrice),
  product.price <= Number(appliedMaxPrice),
  appliedMinPrice,
  appliedMaxPrice
);

    return ((selectCategories==="all" || product.category === selectCategories)
    && product.title.toLowerCase().includes(appliedSearch.toLowerCase())
    && (!appliedMinPrice || product.price >= Number(appliedMinPrice) )
    && (!appliedMaxPrice || product.price <= Number(appliedMaxPrice)))

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
      appliedMinPrice={appliedMinPrice}
      setAppliedMinPrice={setAppliedMinPrice}
      appliedMaxPrice={appliedMaxPrice}
      setAppliedMaxPrice={setAppliedMaxPrice}
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
