import { Link, useNavigate } from "react-router-dom"
import Logo from "../components/Logo"
import { PageContainer } from "../components/PageContainer"
import axios from "axios"
import { useState } from "react"
import { BASEURL } from "../components/PageContainer"


export default function Cadastro(){
    
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" })
    const navigate = useNavigate()

    function handleForm(e){
         const {name, value} = e.target
         setForm({...form, [name]: value})
    }

    function addUser(e){
        e.preventDefault()
        axios.post(`${BASEURL}/auth/sign-up`, form)
            .then(
                res => {
                    navigate("/")
                }
            )
            .catch(
                err => {
                    alert("completar amanhã")
                }
            )
    }

    return(
        <PageContainer>
            <Logo/> 
            <form onSubmit={addUser}>
                <input 
                    type="email" 
                    placeholder="email"
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                />
                <input 
                    type="text" 
                    placeholder="senha"
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                />
                <input 
                    type="text" 
                    placeholder="nome"
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                />
                <input 
                    type="text" 
                    placeholder="foto"
                    name="image"
                    value={form.image}
                    onChange={handleForm}
                />
                <button type="submit">Cadastrar</button>
            </form>     
            <Link to={"/"}>
                Já tem uma conta? Faça login!
            </Link>
            
        </PageContainer>
    )
}




