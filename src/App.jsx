import styles from "./app.module.scss";
import MenuItem from "./component/MenuItem";
import Header from "./component/Header";
import SearchFilter from "./component/searchFilter";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [selectCategories, setSelectCategories] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");
  const [appliedMinPrice, setAppliedMinPrice] = useState("");
  const [appliedMaxPrice, setAppliedMaxPrice] = useState("");
  const [selectProduct, setSelectProduct] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data)
        localStorage.setItem("products",JSON.stringify(data));
      });
      
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];

  const FilteredProducts = products.filter((product)=>{


    return ((selectCategories==="all" || product.category === selectCategories)
    && product.title.toLowerCase().includes(appliedSearch.toLowerCase())
    && (!appliedMinPrice || product.price >= Number(appliedMinPrice) )
    && (!appliedMaxPrice || product.price <= Number(appliedMaxPrice)))

  })

  const similarProducts = selectProduct
    ? products.filter((product)=>{
      return (
        product.category === selectProduct.category &&
        product.id != selectProduct.id
      );
  }) : [];


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
              onClick={()=> setSelectProduct(product)}
            />
          );
        })}
      </div>

      
      {selectProduct && (

        <div className={styles.modal}>

          <div className={styles.modalContent}>
            <button onClick={()=>setSelectProduct(null)}>
               x
            </button>

            <h3>Similar Products</h3>

            <div className={styles.products}>

            {similarProducts.map((product) => (
              <MenuItem
              key={product.id}
              image={product.image}
              title={product.title}
              subtitle={product.category}
              price={product.price}
              />
              ))}
            </div>

          </div>
        </div>
      )}

      

    </div>
  );
}

export default App;
