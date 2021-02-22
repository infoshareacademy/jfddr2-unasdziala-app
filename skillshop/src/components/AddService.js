import { useState, useEffect } from "react";

const AddService = () => {
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    fetch("./data/categories.json")
      .then((res) => res.json())
      .then((categoriesList) => {
        setCategoriesList(categoriesList.categories);
      });
  }, []);

  const [state, setState] = useState("Usługi budowlane");

  return (
    <div class="add-task">
      <form onSubmit={console.log("sumbit")}>
        <label>
          Wybierz typ usługi:
          <select value={state} onChange={(e) => setState(e.target.value)}>
            {categoriesList.map((category) => {
              return (
                <option value={category.category}>{category.category}</option>
              );
            })}
          </select>
        </label>
        <label>
          Dodaj miasto:
          <input type="text" />
        </label>

        <input type="submit" value="Wyślij" />
      </form>
    </div>
  );
};

export default AddService;
