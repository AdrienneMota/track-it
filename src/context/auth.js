import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({})

export const AuthProvider = (props) => {
    const [image, setImage] = useState("")
    const [token, setToken] = useState("")

    useEffect(() => {
        const imgStorage = localStorage.getItem("image")
        if(imgStorage){
            setImage(JSON.parse(imgStorage))
        }

        const tokenStorage = localStorage.getItem("token")
        if(token){
            setToken(JSON.parse(tokenStorage))
        }
    }, [])

    return(
        <AuthContext.Provider value ={{image, setImage, token, setToken}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)

// https://i.pinimg.com/originals/29/06/7a/29067a6768ccec17e81ec7630fb50f83.png