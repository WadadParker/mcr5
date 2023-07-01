import "./profile.css";

import { useContext, useEffect } from "react";
import {useParams} from "react-router-dom"
import { RecipeContext } from "../../context/RecipeContext";

export const Profile=()=>
{
    const {recipeName}=useParams();
    const recipename=recipeName.toLowerCase;
    const {state:{recipes},fetchRecipes}=useContext(RecipeContext);

    const foundRecipe=[...recipes].find(({name})=>name.replace(/\s/g, "")===recipeName);

    useEffect(()=>fetchRecipes(),[]);
    return (
        <>
        <h1>{foundRecipe?.name}</h1>
        <div className="profile-container">
            <img src={foundRecipe?.imageLink} alt="" width={300} height={300} />
            <main>
            <h2>{foundRecipe?.cuisine}</h2>
            <p><strong>Ingredients:</strong>{foundRecipe?.ingredients.map(item=>(<span>{item},</span>))}</p>

            <h2>Instructions</h2>
            <ol>
                {foundRecipe?.instructions.map((item,index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ol>
            </main>
        </div>
        </>
    )
}