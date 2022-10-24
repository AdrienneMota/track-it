import { PageUser } from "../components/PageContainer"
import Navbar from "../components/Navbar"
import styled from "styled-components"
import CadastroHabito from "../components/CadastroHabito"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASEURL } from "../constant/urls"


export default function Habitos(){
    const [cadastro, setCadastro] = useState(false)
    const token = localStorage.getItem("token")
    const [habitos, setHabitos] = useState([])

    useEffect( () => {
        axios.get(`${BASEURL}/habits`, {headers: {'Authorization': `Bearer ${JSON.parse(token)}`}})
            .then((res) => {
                setHabitos(res.data)
                console.log(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }, [])

    return(
        <PageUser>
            <Navbar/>
            <AddHabits>
                <p>Meus hábitos</p>
                <button onClick={() => setCadastro(true)}>+</button>
            </AddHabits>
            <CadastroHabito cadastro={cadastro} setCadastro={setCadastro}/>
            <Habits>
                <div>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </div>
            </Habits>
        </PageUser>
    )
}

const AddHabits = styled.div`
    margin-top: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    p{
        font-size: 23px;
        color: #126BA5;
    }
    button{
        margin-top: auto;
        margin-bottom: auto;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        font-size: 27px;
        font-weight: bold;
    }
`
const Habits = styled.div`
    margin-top: 28px;
    width: 90%;
    p{
        font-size: 18px;
        color: #666666;
    }
`
