import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../Store/ItemSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = useCallback(
    (e) => {
      dispatch(setSearchTerm(e.target.value));
    },
    [dispatch]
  );

  return (
    <label className="input" htmlFor="search">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" role="img" className="icon nav-v2-search__icon">
        <path
          d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path d="M12.814 12.8132L15.5 15.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
      </svg>
      <input id="search" type="text" placeholder="Search items..." onChange={handleSearch} />
    </label>
  );
};

export default SearchBar;
