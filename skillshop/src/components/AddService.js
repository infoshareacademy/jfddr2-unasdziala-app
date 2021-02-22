import "./../styles/AddService.css"
import firebase from "./../firebase/config.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddService = ({setDummyVariable, serviceList}) => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetch("./data/categories.json")
      .then(res => res.json())
      .then(categoriesList => {
        setCategoriesList(categoriesList.categories);
      });
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
    price: ""
  });

  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      /*UWAGA! category nie zadziała jeśli dodatkowo jakieś inne pole nie zostanie zmienione. 
      Zastanowić się nad walidacją */
      "category": category
    })
  }

  const addServiceToDB = () => {
    firebase
      .firestore()
      .collection("services")
      .add(form)
      setDummyVariable(serviceList.length)
  };

  return (
    <div className="add-service">
      <form>
        <label>
          Wybierz typ usługi:&nbsp;&nbsp;
          <select value={category} onChange={e => setCategory(e.target.value)}>
            {categoriesList.map(category => {
              return (
                <option key={category.id} value={category.category}>{category.category}</option>
              );
            })}
          </select>
        </label>
        
        {/* <input type="submit" value="Wyślij" /> */}
        <div className="service-container-input">
        <label>
          Tytuł usługi:&nbsp;&nbsp;
          <input type="text" id="title" name="title" onChange={updateField}/>
        </label>
        <label>
          Imię i nazwisko:&nbsp;&nbsp;
          <input type="text" id="fullName" name="fullName" onChange={updateField}/>
        </label>
        <label >
          Adres email:&nbsp;&nbsp;
          <input type="email" id="email" name="email" onChange={updateField}/>
        </label>
        <label>
          Numer telefonu:&nbsp;&nbsp;
          <input type="tel" id="phoneNumber" name="phoneNumber" onChange={updateField}/>
        </label>
        <label>
          Adres:&nbsp;&nbsp;
          <input type="text" id="address" name="address" onChange={updateField}/>
        </label>
        <label>
          Miasto:&nbsp;&nbsp;
          <input type="text" id="city" name="city" onChange={updateField}/>
        </label>
        <label>
          Opis usługi:&nbsp;&nbsp;
          <input type="text" id="description" name="description" onChange={updateField}/>
        </label>
        <label>
          Cena:&nbsp;&nbsp;
          <input type="text" id="price" name="price" onChange={updateField}/>
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
