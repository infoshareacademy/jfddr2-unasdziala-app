import { format } from 'date-fns'
import { pl } from 'date-fns/locale';

import "./../styles/AddService.css";
import firebase from "./../firebase/config.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { categories } from "../helpers/categories";

const AddService = ({ setDummyVariable, serviceList, userLogInState }) => {

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    const categoriesArray = [];
    categories.forEach((category) => {
      categoriesArray.push(category.filter);
    })
    setCategoriesList(categoriesArray);
  }, []);

  const [category, setCategory] = useState("Usługi budowlane");

  const [form, setForm] = useState({
    id: serviceList.length,
    title: "",
    category: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    address: "",
    description: "",
    detailDescription: "",
    price: "",
  });

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      /*UWAGA! category nie zadziała jeśli dodatkowo jakieś inne pole nie zostanie zmienione. 
      Zastanowić się nad walidacją */
      category: category,
      date: format(Date.parse(new Date()), "dd MMMM yyyy HH:mm:ss", { locale: pl }),
      user: userLogInState,
    });
  };

  const addServiceToDB = () => {
    firebase.firestore().collection("services").add(form);
    setDummyVariable(serviceList.length);
    alert("Pomyślnie dodano ogłoszenie");
  };

  return (
    <div className="add-service">
      <form>
        <label>
          Wybierz typ usługi:&nbsp;&nbsp;
          <select
            value={category}
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

        {/* <input type="submit" value="Wyślij" /> */}
        <div className="service-container-input">
          <label>
            {/* Tytuł usługi:&nbsp;&nbsp; */}
            <input
              type="text"
              placeholder="Tytuł usługi"
              id="title"
              name="title"
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
              onChange={updateField}
            />
          </label>
          <textarea
            placeholder="Szczegółowy opis Twojego ogłoszenia"
            id="detailDescription"
            name="detailDescription"
            className="textarea"
            onChange={updateField}
          />
       
        </div>
      </form>
      <div className="btn-container">
        <Link to="/">
          <button
            className="add-button green"
            onClick={addServiceToDB}
            required
          >
            DODAJ
          </button>
        </Link>
        &nbsp;
        <Link to="/">
          <button className="add-button red">ANULUJ</button>
        </Link>
      </div>
    </div>
  );
};

export default AddService;
