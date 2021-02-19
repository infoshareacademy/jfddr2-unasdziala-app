import { React, useState, useEffect } from "react";

export default function SearchBar() {
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("./data/services.json")
      .then(res => {
        setServices(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setFilteredServices(
      services.filter(service =>
        service.category.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, services]);

  if (loading) {
    return <p>Szukamy Twojej usługi...</p>;
  }

  return (
    <div>
      <input
        type="text"
        class="nav-input"
        placeholder="Znajdź usługę..."
        onChange={e => setSearch(e.target.value)}
      />
      {filteredServices.map((service, index) => (
        <ServiceDetail key={index} {...service} />
      ))}
    </div>
  );
}

const ServiceDetail = props => {
  const { category } = props;

  return (
    <>
      <p>{category}</p>
    </>
  );
};
