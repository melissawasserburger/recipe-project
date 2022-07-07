import React, { useState } from "react";

function RecipeCreate({recipes, setRecipes}) {

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }

  const [formData, setFormData] = useState({...initialFormState});

  const changeHandler = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setRecipes([...recipes, formData]);
    setFormData({...initialFormState});
  }


  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  return (
    <form name="create" onSubmit={submitHandler} className="form">
      <table>
        <tbody>
          <tr>
            <td>
              <input
              style={{width: "100%"}}
              type="text" 
              name="name" 
              id="name" 
              placeholder="Name"
              value={formData.name}
              onChange={changeHandler}
              />
            </td>
            <td>
              <input
              style={{width: "100%"}}
              type="text" 
              name="cuisine" 
              id="name" 
              placeholder="Cuisine"
              value={formData.cuisine}
              onChange={changeHandler}
              />
            </td>
            <td>
              <input
              style={{width: "100%"}}
              type="url" 
              name="photo" 
              id="photo" 
              placeholder="URL"
              value={formData.photo}
              onChange={changeHandler}
              />
            </td>
            <td>
              <textarea 
              type="text" 
              name="ingredients" 
              id="name" 
              placeholder="Ingredients"
              rows={2}
              value={formData.ingredients}
              onChange={changeHandler}
              ></textarea>
            </td>
            <td>
              <textarea
              type="text" 
              name="preparation" 
              id="name" 
              placeholder="Preparation"
              rows={2}
              value={formData.preparation}
              onChange={changeHandler}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
        </table>
    </form>
  );
}

export default RecipeCreate;
