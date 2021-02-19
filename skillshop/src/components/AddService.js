import "./../styles/AddService.css"

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const AddService = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetch("./data/categories.json")
      .then(res => res.json())
      .then(categoriesList => {
        setCategoriesList(categoriesList.categories);
      });
  }, []);

  const [state, setState] = useState("Usługi budowlane");

  const getData = () => {
    
    const service = {
      id: 3,
      title: "Hydraulik szuka pracy",
      category: "Usługi hydrauliczne",
      fullName: "Jan Nowak",
      email: "elektryk@abc.pl",
      phoneNumber: "123456789",
      city: "Warszawa",
      address: "Rejterów 125/15, 12-345, Praga Północ",
      description: "Oferuję montaż instalacji elektrycznych, za rozsądną cenę",
      price: "120pln/h"
    }

    return service
  }

  const addServiceToDB = () => {

    const service = getData()

    return fetch('./data/services.json', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(service)
		});
  };

  return (
    <div className="add-service">
      <form onSubmit={console.log("sumbit")}>
        <label>
          Wybierz typ usługi:&nbsp;&nbsp;
          <select value={state} onChange={e => setState(e.target.value)}>
            {categoriesList.map(category => {
              return (
                <option value={category.category}>{category.category}</option>
              );
            })}
          </select>
        </label>
        
        <input type="submit" value="Wyślij" />
        <div className="service-container-input">
        <label>
          
          Tytuł usługi:&nbsp;&nbsp;
          <input type="text" />
        </label>
        <label>
          Imię i nazwisko:&nbsp;&nbsp;
          <input type="text" id="name" />
        </label>
        <label >
          Adres email:&nbsp;&nbsp;
          <input type="email" id="email" />
        </label>
        <label>
          Numer telefonu:&nbsp;&nbsp;
          <input type="tel" id="phonenumber" />
        </label>
        <label>
          Adres:&nbsp;&nbsp;
          <input type="text" id="adress" />
        </label>
        <label>
          Miasto:&nbsp;&nbsp;
          <input type="text" id="city"/>
        </label>
        <label>
          Opis usługi:&nbsp;&nbsp;
          <input type="text" id="service-description" />
        </label>
        <label>
          Cena:&nbsp;&nbsp;
          <input type="text" id="price-service" />
        </label>
        </div>
      </form>
      <div className="btn-container">
        <Link to="/">
          <button className="add-button green" onClick={addServiceToDB}>
            DODAJ
          </button>
        </Link>
        &nbsp;
        <Link to="/">
          <button className="add-button red">
            ANULUJ
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AddService;
