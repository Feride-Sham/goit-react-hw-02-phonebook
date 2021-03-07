import React from "react";

const Filter = ({ filterValue, onToFilter }) => {
  return (
    <form>
      <label>
        Find contacts by name{" "}
        <input type="text" value={filterValue} onChange={onToFilter} />
      </label>
    </form>
  );
};

export default Filter;
