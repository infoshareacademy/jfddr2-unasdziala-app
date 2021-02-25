import { React, useState } from "react";
import ServicesList from "./ServicesList";

function SearchBar() {
  const [filter, setFilter] = useState("");

  return (
    (<Header filter={filter} setFilter={setFilter} />),
    (<TileContainer serviceList={ServicesList} filter={filter} />)
  );
}

const TileContainer = ({ serviceList }) => {
  return <ServicesList serviceList={serviceList} />;
};

const Header = ({ setFilter }) => {
  return <SearchInput setFilter={setFilter} />;
};

const SearchInput = ({ setFilter }) => {
  return (
    <input
      class="nav-input"
      type="text"
      placeholder="Znajdź usługę..."
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default SearchBar;
