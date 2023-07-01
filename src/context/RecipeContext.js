import { createContext, useReducer } from "react";

import {RecipeDb} from "../db/RecipeDb";

export const RecipeContext=createContext();

export const RecipeProvider=({children})=>
{
    const RecipeReducer=(recipe,{type,payload,inputField})=>
    {
        const {recipeInputs,recipes}=recipe;
        switch(type)
        {
            case "FETCH_RECIPES":
                return {...recipe,recipes:payload};

            case "TOGGLE_MODAL":
                return {...recipe,showModal:payload};

            case "UPDATE_RECIPE_INPUT_FIELDS":
                if (inputField === "ingredients" || inputField === "instructions") {
                    const updatedArray = payload.split("\n");
                    return {
                      ...recipe,
                      recipeInputs: {
                        ...recipeInputs,
                        [inputField]: updatedArray,
                      },
                    };
                  } else {
                    return {
                      ...recipe,
                      recipeInputs: {
                        ...recipeInputs,
                        [inputField]: payload,
                      },
                    };
                  }


            case "UPDATE_LOCALSTORAGE":
                localStorage.setItem("recipes",JSON.stringify(recipes));
                return recipe;

            case "ADD_RECIPE":
                return {...recipe,recipes:[...recipe.recipes,payload],showModal:false,recipeInputs:{name: "",
                imageLink: "",
                cuisine: "",
                ingredients: [],
                instructions: [],}};    
                
             
            default:
                return recipe;
        }
    }
    const initialState={
        recipes:[],
        showModal:false,
        recipeInputs:{name: "",
        imageLink: "",
        cuisine: "",
        ingredients: [],
        instructions: [],}
    }

    const [state,dispatch]=useReducer(RecipeReducer,initialState);

    const fetchRecipes=()=>
    {
        const storedRecipes=localStorage.getItem("recipes");
        if(storedRecipes===null)
        {
            dispatch({type:"FETCH_RECIPES",payload:RecipeDb});
        }
        else {
            const recipes = JSON.parse(storedRecipes);
            dispatch({type:"FETCH_RECIPES",payload:recipes});
        }
    }

    const addRecipe=()=>
    {
        const {recipeInputs}=state;
        if(recipeInputs?.imageLink==="")
        {
            recipeInputs.imageLink="https://picsum.photos/300/400";
            dispatch({type:"ADD_RECIPE",payload:recipeInputs});
            dispatch({type:"UPDATE_LOCALSTORAGE"});
        }
        else {
            dispatch({type:"ADD_RECIPE",payload:recipeInputs});
            dispatch({type:"UPDATE_LOCALSTORAGE"});
        }
    }

    return (
        <RecipeContext.Provider value={{state,dispatch,fetchRecipes,addRecipe}}>
            {children}
        </RecipeContext.Provider>
    )
}