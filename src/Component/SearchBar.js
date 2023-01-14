import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Search" variant="outlined" value={query} onChange={handleChange} />
      <Button variant="contained" color="primary" type="submit">Search</Button>
    </form>
  );
};
export default SearchBar;