import "./filterBar.css";
import { useContext } from "react";

import { RecipeContext } from "../../context/RecipeContext";

export const FilterBar=()=>
{
    const {state,dispatch}=useContext(RecipeContext);
    const {search}=state;

    return (
        <div className="filter-bar-container">
            <input value={search} type="search" placeholder="Search Item" className="search-input" onChange={(e)=>dispatch({type:"UPDATE_SEARCH",payload:e.target.value})}></input>
            <strong>Filters: </strong>

            <div className="radio-container">
            <input type="radio" name="filter" id="name" onChange={()=>dispatch({type:"SORT_CATEGORY",payload:"name"})}></input>
            <label htmlFor="name">Name</label>
            </div>

            <div className="radio-container">
            <input type="radio" name="filter" id="ingredients" onChange={()=>dispatch({type:"SORT_CATEGORY",payload:"ingredients"})}></input>
            <label htmlFor="ingredients">Ingredients</label>
            </div>

            <div className="radio-container">
            <input type="radio" name="filter" id="cuisine" onChange={()=>dispatch({type:"SORT_CATEGORY",payload:"cuisine"})}></input>
            <label htmlFor="cuisine">Cuisine</label>
            </div>
        </div>
    )
}