import React from "react"
import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer"

const INITIAL_STATE = {
    user: null,
    // {
    //     _id: "65844d6dd70d6cfefc9a68ba",
    //     username:"john",
    //     email:"john@gmail.com",
    //     profilePicture:"2.jpeg",
    //     coverPicture:"",
    //     followers:[],
    //     followings:[],
    //     isAdmin:false
    // },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{user:state.user, isFetching:state.isFetching, error:state.error, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}