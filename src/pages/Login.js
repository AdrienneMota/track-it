import { PageContainer } from "../components/PageContainer"
import Logo from "../components/Logo"
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { BASEURL } from "../constant/urls"
import { useAuth } from "../context/auth"


export default function Login(){
    
    const [form, setForm] = useState({email: "", password: ""})
    const navigate = useNavigate()
    const {setImage} = useAuth()
    const {setToken} = useAuth()

    function handleSubmit(e){
        const {name, value} = e.target // pega tudo de event e desestrutura o name e value
        setForm({...form, [name]: value})
    }

    function userSubmit(e){
        e.preventDefault()

        console.log(form)

        axios.post(`${BASEURL}/auth/login`, form)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", JSON.stringify(res.data.token))
                setToken(res.data.token)
                localStorage.setItem("image", JSON.stringify(res.data.image))
                setImage(res.data.image)
                navigate('/hoje')
            })
            .catch( err => alert(err.response.data))
    }
    
    return(
        <PageContainer>
            <Logo/> 
            <form onSubmit={userSubmit}>
                <input 
                    type="text" 
                    placeholder="email"
                    name="email"
                    value={form.user}
                    onChange={handleSubmit}
                />
                <input 
                    type="password" 
                    placeholder="senha"
                    name="password"
                    value={form.password}
                    onChange={handleSubmit}
                />
                <button type="submit">Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                Não tem uma conta? Cadastre-se!
            </Link>
        </PageContainer>
    )
}




