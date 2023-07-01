import "./recipeItem.css";

import {useNavigate} from "react-router-dom"
import { useContext } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { RecipeContext } from "../../context/RecipeContext";


export const RecipeItem=({item,index})=>
{
    const navigate=useNavigate();
    const {deleteRecipe}=useContext(RecipeContext);

    return (
        <div className="recipe-list-item-container">

            <nav className="icon-container">
        
            <FontAwesomeIcon className="icon-delete" icon={faTrash} onClick={()=>deleteRecipe(index)}/>
            </nav>
            <img className="pfp" src={item?.imageLink} alt="recipe image" width={200} height={200} />
            <h2 className="heading-name">{item?.name}</h2>

            <div className="properties-container">
                <header className="property">
                    <strong>Cuisine Type</strong>
                    <span>{item?.cuisine}</span>
                </header>

                <main className="property">
                    <strong>Ingredients: </strong>
                    <span className="see-recipe" onClick={()=>navigate(`/recipe/${item?.name.replace(/\s/g, "")}`)}> SEE RECIPE - {`>`}</span>
                </main>

                <footer className="property">
                    <strong>Instructions: </strong>
                    <span className="see-recipe" onClick={()=>navigate(`/recipe/${item?.name.replace(/\s/g, "")}`)}>SEE RECIPE - {`>`}</span>
                </footer>
            </div>
        </div>
    )
}