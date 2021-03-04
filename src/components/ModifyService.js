import { format } from 'date-fns'
import { pl } from 'date-fns/locale';

import firebase from "./../firebase/config.js";
import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { categories } from "../helpers/categories";

function ModifyService({userServiceList, userLogInState, setDummyVariable}) {

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const categoriesArray = [];
    categories.forEach((category) => {
      categoriesArray.push(category.filter);
    })
    setCategoriesList(categoriesArray);
  }, []);

  const [category, setCategory] = useState("Usługi budowlane");

  const { userServiceTitle } = useParams();
  const selectedService = userServiceList.find(
    (service) => service.title === userServiceTitle
  );

  const [form, setForm] = useState({
    id: selectedService.id,
    title: selectedService.title,
    category: selectedService.category,
    fullName: selectedService.fullName,
    email: selectedService.email,
    phoneNumber: selectedService.phoneNumber,
    city: selectedService.city,
    address: selectedService.address,
    description: selectedService.description,
    detailDescription: selectedService.detailDescription,
    price: selectedService.price,
  });

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      /*UWAGA! category nie zadziała jeśli dodatkowo jakieś inne pole nie zostanie zmienione. 
      Zastanowić się nad walidacją */
      category: category,
      date: selectedService.date,
      user: userLogInState,
    });
  }

  const modifyServiceInDB = () => {
    const randomDate = format(Date.parse(new Date()), "dd MMMM yyyy HH:mm:ss", { locale: pl });
    // console.log(randomDate);
    firebase.firestore().collection("services").doc(selectedService.id).update(form);
    setDummyVariable(randomDate);
    setTimeout(()=>{
      alert("Pomyślnie zmodyfikowano ogłoszenie. Prosimy o ponowne zalogowanie do systemu.");
      window.location.reload(true);
    }, 500)
  };

  return (
    <div >
        <form>
        <label>
          Wybierz typ usługi:&nbsp;&nbsp;
          <select
            defaultValue={selectedService.category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categoriesList.map((category, id) => {
              return (
                <option key={id} value={category}>
                  {category}
                </option>
              );
            })}
          </select>
        </label>
        <div className="service-container-input">
          <label>
            {/* Tytuł usługi:&nbsp;&nbsp; */}
            <input
              type="text"
              placeholder="Tytuł usługi"
              id="title"
              name="title"
              defaultValue={selectedService.title}
              onChange={updateField}
            />
          </label>
          <label>
            {/* Imię i nazwisko:&nbsp;&nbsp; */}
            <input
              type="text"
              placeholder="Imię i nazwisko"
              id="fullName"
              name="fullName"
              defaultValue={selectedService.fullName}
              onChange={updateField}
            />
          </label>
          <label>
            {/* Adres email:&nbsp;&nbsp; */}
            <input
              type="email"
              placeholder="Adres email"
              id="email"
              name="email"
              defaultValue={selectedService.email}
              onChange={updateField}
            />
          </label>
          <label>
            {/* Numer telefonu:&nbsp;&nbsp; */}
            <input
              type="tel"
              placeholder="Numer telefonu"
              id="phoneNumber"
              name="phoneNumber"
              defaultValue={selectedService.phoneNumber}
              onChange={updateField}
            />
          </label>
          <label>
            {/* Adres:&nbsp;&nbsp; */}
            <input
              type="text"
              placeholder="Adres"
              id="address"
              name="address"
              defaultValue={selectedService.address}
              onChange={updateField}
            />
          </label>
          <label>
            {/* Miasto:&nbsp;&nbsp; */}
            <input
              type="text"
              placeholder="Miasto"
              id="city"
              name="city"
              defaultValue={selectedService.city}
              onChange={updateField}
            />
          </label>
          <label>
            {/* Opis usługi:&nbsp;&nbsp; */}
            <input
              type="text"
              placeholder="Opis usługi"
              id="description"
              name="description"
              defaultValue={selectedService.description}
              onChange={updateField}
            />
          </label>
          <label>
            {/* Cena:&nbsp;&nbsp; */}
            <input
              type="text"
              placeholder="Cena"
              id="price"
              name="price"
              defaultValue={selectedService.price}
              onChange={updateField}
            />
          </label>
          <textarea
            placeholder="Szczegółowy opis Twojego ogłoszenia"
            id="detailDescription"
            name="detailDescription"
            className="textarea"
            defaultValue={selectedService.detailDescription}
            onChange={updateField}
          />
        </div>
      </form>
      <div className="btn-container">
        <Link to="/">
          <button
            className="add-button green"
            onClick={modifyServiceInDB}
          >
            MODYFIKUJ
          </button>
        </Link>
        &nbsp;
        <Link to="/">
          <button className="add-button red">ANULUJ</button>
        </Link>
      </div>
    </div>
  );
}

export default ModifyService;
