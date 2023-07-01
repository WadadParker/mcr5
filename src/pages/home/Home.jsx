import "./home.css";
import { useContext, useEffect } from "react";

import { RecipeContext } from "../../context/RecipeContext";

import { FilterBar } from "../../components/filterbar/FilterBar";
import { RecipeModal } from "../../components/modal/RecipeModal";
import { RecipeItem } from "../../components/recipeItem/RecipeItem";

export const Home=()=>
{
    const {state,dispatch,fetchRecipes}=useContext(RecipeContext);
    const {showModal,recipes}=state;

    useEffect(()=>fetchRecipes(),[]);

    return (
        <div>
            {showModal && <RecipeModal />}
            <FilterBar />
            <h1>This is home</h1>
            <ul>
                {recipes?.map(item=>(
                    <li key={item?.name}>
                        <RecipeItem item={item} />
                    </li>
                ))}
            </ul>
            <button onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:true})}>Add new Recipe</button>
        </div>
    )
}