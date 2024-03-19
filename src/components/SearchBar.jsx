import React from "react";

const SearchBar = ({ value, isloading, handleSubmit, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form"
        value={value}
        disabled={isloading}
        placeholder="Search Recipes"
        onChange={onChange}
      />

      <input
        className="button"
        type="submit"
        disabled={isloading || !value}
        value="Search"
      />
    </form>
  );
};

export default SearchBar;
