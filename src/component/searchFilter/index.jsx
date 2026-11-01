import { useState } from "react";
import React from "react";
import style from "./searchFilter.module.scss";



const SearchFilter = ({products,
    selectCategories ,
    setSelectCategories,
    categories,
    searchVal ,
    setSearchVal,
    setAppliedSearch
  }) => {

  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handelSearch = ()=>{
    setAppliedSearch(searchVal);
  };

 
  return (
  

  <div className={style.SearchFilter}>
    <div className={style.searchBar}>
        <label htmlFor="search">جستجوی محصولات: </label>
        <input type="text" value={searchVal}  onChange={(e)=> setSearchVal(e.target.value) }  id="search" placeholder="نام محصول را جستجو کنید" />
        <button onClick={handelSearch} >جستجو</button>
    </div>

    <div className={style.categoryFilter} >
      <select name="categoryFilter" id="categoryFilter" value={selectCategories} onChange={(e)=> setSelectCategories(e.target.value)}>
        <option value="all"> All categories </option>
         {categories.map((category)=>(
          <option key={category} value={category}> {category} </option>
        ))}
      </select>
    </div>

    <div className={style.priceFilter}>

      <button >اعمال فیلتر قیمت</button>

      <label htmlFor="min-price" >حداقل قیمت </label>
      <input type="number" id="min-price" min={0} value={minPrice} onChange={(e)=> setMinPrice(e.target.value) } />

      <label htmlFor="max-price" >حداکثر قیمت</label>
      <input type="number" id="max-price" min={0} value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)} />

    </div>
  </div>);
};

export default SearchFilter;
