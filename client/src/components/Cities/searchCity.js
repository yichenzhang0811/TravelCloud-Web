import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  console.log(searchTerm);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div style={{ marginBottom: "15px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          width: "80%",
          padding: "8px",
          fontSize: "16px",
          border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default Search;
