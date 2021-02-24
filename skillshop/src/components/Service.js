import "./../styles/Service.css";

const Service = ({ service }) => {
  return (
    <div className="service">
<<<<<<< HEAD
      <div>
        <b>Tytuł: </b>
        {service.title}
      </div>
      <div>
        <b>Kategoria usług: </b>
        {service.category}
      </div>
      <div>
        <b>Imię specjalisty: </b>
        {service.fullName}
      </div>
      <div>
        <b>Adres email: </b>
        {service.email}
      </div>
      <div>
        <b>Numer telefonu: </b>
        {service.phoneNumber}
      </div>
      <div>
        <b>Miasto: </b>
        {service.city}
      </div>
      <div>
        <b>Adres: </b>
        {service.address}
      </div>
      <div>
        <b>Opis: </b>
        {service.description}
      </div>
      <div>
        <b>Cena: </b>
        {service.price}
      </div>
=======
      <div class="informations">
        <div class="header">
          <h1>{service.title}</h1>
          <div>{service.description}</div>
        </div>
        <div class="data">
          <div><b>Kategoria usług: </b>{service.category}</div>
          <div><b>Miasto: </b>{service.city}</div>
          <div><b>Cena: </b>{service.price}</div>
        </div>
      </div>
      <div class="details">
        <button class="service-button">SZCZEGÓŁY</button>
      </div>

>>>>>>> 6ffd75da6f8ac84886fda034e7d3164520afa16f
    </div>
  );
};

export default Service;
