
import Service from "./Service.js";
import { useState, useEffect } from 'react';

const ServicesList = () => {

  const [ service, setService ] = useState([]);
  const [ serviceList, setServiceList ] = useState([]);

  useEffect(
    () => {
      fetch("./data/services.json").then(res => res.json()).then((serviceList) => {
        setServiceList(serviceList);
      });
    },[ service ]
  );

  console.log(serviceList)

  return (
    <div>
      {/* {serviceList.map((service) => {
        return (<Service key={service.id} service={service}/>)
      })} */}
    </div>
  );
};

export default ServicesList;
