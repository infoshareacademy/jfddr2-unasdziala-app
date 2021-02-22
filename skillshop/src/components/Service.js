import "./../styles/Service.css";

const Service = ({ service }) => {
  return (
    <div className="service">
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
    </div>
  );
};

export default Service;
