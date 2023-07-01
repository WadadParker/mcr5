import { createContext, useReducer } from "react";

export const RecipeContext=createContext();

export const RecipeProvider=({children})=>
{
    const RecipeReducer=(recipe,{type,payload})=>
    {
        switch(type)
        {
            case "TOGGLE_MODAL":
                return {...recipe,showModal:payload};
             
            default:
                return recipe;
        }
    }
    const initialState={
        showModal:false,
        name: "",
        imageLink: "",
        cuisine: "",
        ingredients: [],
        instructions: [],
    }

    const [state,dispatch]=useReducer(RecipeReducer,initialState);


    return (
        <RecipeContext.Provider value={{state,dispatch}}>
            {children}
        </RecipeContext.Provider>
    )
}