import { React, useState } from "react";
import ServicesList from "./ServicesList";
import Service from "./Service.js";

export default function SearchBar({}) {
  const [services, setServices] = useState("");

  return (
    <div>
      {/* <Header services={services} setServices={setServices} />
      <TileContainer Db={Db} services={services} /> */}
    </div>
  );
}

// const TileContainer = ({products, services}) => {
//   return (

//   )
// }
// -----------------------------------------------
// const [filter, setFilter] = useState("");

//   const Db = fetch("./data/services.json").then((response) => {
//     setServices(response.services).then((data) => {
//       setServices(data.services);
//     });

//     return <FilterableList tasks={Db} />;
//   });

//   function FilterableList({ tasks }) {
//     const [state, setState] = useState("");
//     return (
//       <div>
//         <input
//           onChange={(e) => setState(e.target.value)}
//           placeholder="Znajdź usługę..."
//           type="text"
//           value="{state}"
//         />
//         <ul>
//           {tasks
//             .filter((task) => task.category.includes(state))
//             .map((task) => (
//               <li>{`${task.category} ${task.city} ${task.price}`}</li>
//             ))}
//         </ul>
//       </div>
//     );
//   }
// }
