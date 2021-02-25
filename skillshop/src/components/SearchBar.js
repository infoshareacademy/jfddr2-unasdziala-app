import { React, useState } from "react";
// import ServicesList from "./ServicesList";

export default function SearchBar() {
  const [filter, setFilter] = useState("");
  console.log(SearchInput.value);
  return <SearchInput filter={filter} setFilter={setFilter} />;
}

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

// (<Header filter={filter} setFilter={setFilter} />),
// (<TileContainer serviceList={ServicesList} filter={filter} />)
//
// }

// const TileContainer = ({ serviceList }) => {
//   return <ServicesList serviceList={serviceList} />;
// };

// const Header = ({ setFilter }) => {
//   return <SearchInput setFilter={setFilter} />;
// };
