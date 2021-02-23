import Service from "./Service.js";

const ServicesList = ({ serviceList }) => {
  return (
    <div>
      {serviceList.map((service) => {
        return <Service key={service.id} service={service} />;
      })}
    </div>
  );
};

export default ServicesList;
