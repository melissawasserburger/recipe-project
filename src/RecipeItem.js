import React from "react";

function RecipeItem({handleDelete, recipes}) {
    return (recipes.map((recipe, i)=>{
        return (
          <tr key={i}>
            <td><p>{recipe.name}</p></td>
            <td><p>{recipe.cuisine}</p></td>
            <td><img src={recipe.photo} alt="a prepared dish"></img></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td"><p>{recipe.preparation}</p></td>
            <td><button name="button" type="button" onClick={()=>handleDelete(i)}>Delete</button></td>
          </tr>
        )
      })
    )
}

export default RecipeItem;