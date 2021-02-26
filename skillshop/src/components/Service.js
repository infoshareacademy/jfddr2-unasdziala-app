import "./../styles/Service.css";

const Service = ({ service }) => {
  return (
    <div className="service">
      <div class="informations">
        <div class="header">
          <h1>{service.title}</h1>
          <div>{service.description}</div>
        </div>
        <div class="data">
          <div>
            <b>Kategoria usług: </b>
            {service.category}
          </div>
          <div>
            <b>Miasto: </b>
            {service.city}
          </div>
          <div>
            <b>Cena: </b>
            {service.price}
          </div>
        </div>
      </div>
      <div class="details">
        <button class="service-button">SZCZEGÓŁY</button>
      </div>
    </div>
  );
};

export default Service;
