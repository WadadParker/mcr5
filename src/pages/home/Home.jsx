import "./home.css";
import { useContext } from "react";

import { RecipeContext } from "../../context/RecipeContext";

import { FilterBar } from "../../components/filterbar/FilterBar";
import { RecipeModal } from "../../components/modal/RecipeModal";

export const Home=()=>
{
    const {state,dispatch}=useContext(RecipeContext);
    const {showModal}=state;
    return (
        <div>
            {showModal && <RecipeModal />}
            <FilterBar />
            <h1>This is home</h1>
            <button onClick={()=>dispatch({type:"TOGGLE_MODAL",payload:true})}>Add new Recipe</button>
        </div>
    )
}