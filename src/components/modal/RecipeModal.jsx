import "./recipeModal.css";

import { useContext } from "react";

import { RecipeContext } from "../../context/RecipeContext";

export const RecipeModal=()=>
{
    const {state,dispatch,addRecipe}=useContext(RecipeContext);
    const {recipeInputs:{name,imageLink,cuisine,ingredients,instructions}}=state;

    return (
        <div className="recipe-modal-container">
            <div className="recipe-form-container">
                <h1>Recipe Request Form</h1>

                <div className="input-field-container">
                <label htmlFor="name">Name</label>
                <input id="name" value={name} onChange={(e)=>dispatch({type:"UPDATE_RECIPE_INPUT_FIELDS",payload:e.target.value,inputField:"name"})}></input>
                </div>

                <div className="input-field-container">
                <label htmlFor="img">Image Link <small> (Optional)</small></label>
                <input id="img" value={imageLink} onChange={(e)=>dispatch({type:"UPDATE_RECIPE_INPUT_FIELDS",payload:e.target.value,inputField:"imageLink"})}></input>
                </div>
                
                <div className="input-field-container">
                <label htmlFor="cuisine">cuisine</label>
                <input id="cuisine" value={cuisine} onChange={(e)=>dispatch({type:"UPDATE_RECIPE_INPUT_FIELDS",payload:e.target.value,inputField:"cuisine"})}></input>
                </div>
                
                <div className="input-field-container">
                <label htmlFor="ingredients">ingredients</label>
                <textarea placeholder="Enter ingredient without comma and hit enter" id="ingredients" value={ingredients.join("\n")}
                onChange={(e)=>dispatch({type:"UPDATE_RECIPE_INPUT_FIELDS",payload:e.target.value,inputField:"ingredients"})}></textarea>
                </div>
                
                <div className="input-field-container">
                <label htmlFor="instructions">instructions</label>
                <textarea placeholder="Hit enter after every instruction" id="instructions" value={instructions.join("\n")}
                onChange={(e)=>dispatch({type:"UPDATE_RECIPE_INPUT_FIELDS",payload:e.target.value,inputField:"instructions"})}></textarea>
                </div>

                <button className="close-button" onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:false})}>Close</button>
                <button className="submit-button" onClick={()=>addRecipe()}>Submit</button>
            </div>
        </div>
    )
}