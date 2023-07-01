import "./home.css";
import { useContext } from "react";

import { RecipeContext } from "../../context/RecipeContext";

import { FilterBar } from "../../components/filterbar/FilterBar";

export const Home=()=>
{
    const {state,dispatch}=useContext(RecipeContext);
    return (
        <div>
            <FilterBar />
            <h1>This is home</h1>
        </div>
    )
}