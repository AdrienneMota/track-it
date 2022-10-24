import { PageUser } from "../components/PageContainer"
import Navbar from "../components/Navbar"
import styled from "styled-components"
import CadastroHabito from "../components/CadastroHabito"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASEURL } from "../constant/urls"
import lixo from "../assets/img/lixeira.png"

export default function Habitos() {
    const [cadastro, setCadastro] = useState(false)
    const token = localStorage.getItem("token")
    const [habitos, setHabitos] = useState(undefined)
    const daysweek = ["D", "S","T","Q","Q","S","S"]

    useEffect(() => {
        axios.get(`${BASEURL}/habits`, { headers: { 'Authorization': `Bearer ${JSON.parse(token)}` } })
            .then((res) => {
                setHabitos(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }, [habitos])

    function ExcluirHabito(id){
        axios.delete(`${BASEURL}/habits/${id}`, { headers: { 'Authorization': `Bearer ${JSON.parse(token)}` } } )

    }


    if (!habitos) {
        return <div>Carregando habitos...</div>
    }


    return (
        <PageUser>
            <Navbar />
            <AddHabits>
                <p>Meus hábitos</p>
                <button onClick={() => setCadastro(true)}>+</button>
            </AddHabits>
            <CadastroHabito cadastro={cadastro} setCadastro={setCadastro} />
            {
                habitos.map((h, i) =>
                    <Habits key={i}>
                        <div>
                            <p>{h.name}</p>
                            <Days>
                                {daysweek.map(
                                    (d, i) => <Day cor={h.days.includes(i)} key={i}>{d}</Day>
                                )}
                            </Days>
                        </div>
                        <img src={lixo} alt="excluir habito" onClick={() => ExcluirHabito(h.id)}/>
                    </Habits>

                )
            }
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
    background-color: #ffffff;
    width: 340px;
    height: 91px;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    div p{
        margin: 18px;
    }
    img{
        width: 13px;
        height: 15px;
        margin-top: 11px;
        margin-right: 10px;
    }    
`
const Days = styled.div`
    margin-top: 0px;
    margin-left: 18px;
    display: flex;
    height: 30px;
    width: 235px;
`
const Day = styled.div`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;
    background: ${prop => prop.cor ? "#D4D4D4" : "#FFFFFF"};
    color:${prop => prop.cor ? "#FFFFFF" : "#D4D4D4"};
    display: flex;
    align-items: center;
    justify-content: center;
`

