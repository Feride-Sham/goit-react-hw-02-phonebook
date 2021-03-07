import React from "react";
import PropTypes from "prop-types";

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

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onToFilter: PropTypes.func.isRequired,
};

export default Filter;
