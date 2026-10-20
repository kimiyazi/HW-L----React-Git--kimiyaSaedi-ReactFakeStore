import React from "react";
import style from "./searchFilter.module.scss";

const SearchFilter = () => {
  return (<div>
    <label htmlFor="search">جستجوی محصولات: </label>
    <input type="text" id="search" placeholder="نام محصول را جستجو کنید" />
  </div>);
};

export default SearchFilter;
