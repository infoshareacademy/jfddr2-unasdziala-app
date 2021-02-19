import Service from "./Service.js";

const ServicesList = ({serviceList}) => {
  // const [serviceList, setServiceList] = useState([]);

// useEffect(() => {
//   fetch("./data/services.json")
//     .then(res => res.json())
//     .then(data => {
//       setServiceList(data.services);
//     });
// }, []);

  return (
    <div>
      {serviceList.map(service => {
        return <Service key={service.id} service={service} />;
      })}
    </div>
  );
};

export default ServicesList;
