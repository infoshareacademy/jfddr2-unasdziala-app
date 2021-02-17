import { useState, useEffect } from 'react';
import Service from "./Service.js";

const ServicesList = () => {

  const [ service, setService ] = useState([]);
  const [ serviceList, setServiceList ] = useState([]);

  useEffect(
    () => {
      fetch('http://localhost:3001/services').then((res) => res.json()).then((serviceList) => {
        setServiceList(serviceList);
      });
    },[ service ]
  );

  console.log(serviceList);


  return (
    <div>
      {serviceList.map((service) => {
        return (<Service key={service.id} service={service}/>)
      })}
    </div>
  );
};

export default ServicesList;
