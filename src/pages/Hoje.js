import Navbar from "../components/Navbar"
import { PageUser } from "../components/PageContainer"
import styled from "styled-components"
import certo from "../assets/img/certo.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASEURL } from "../constant/urls"

export default function Hoje(){
    const token = localStorage.getItem("token")
    const [habitoshoje, setHabitoshoje] = useState(undefined)

    useEffect( () => {
        axios.get(`${BASEURL}/habits/today`, { headers : {"Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then((res) => {
                setHabitoshoje(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }, [habitoshoje])


    if(!habitoshoje){
        return <div>Carregando habitos de hoje</div>
    }

    return(
        <PageUser>
            <Navbar/>
            <Day>
                <p>Segunda, dd/mm/aaaa</p>
                <span>Nenhum habito concluido</span>
            </Day>
            {
                habitoshoje.map( (h, i) =>
                    <Habito key = {i}>
                        <div>
                            <p>{h.name}</p>
                            <Detalhes>
                                <p>Sequencia atual: {h.currentSequence} dias</p>
                                <p>Seu recorde: {h.highestSequence} dias</p>
                            </Detalhes>
                        </div>
                        <button>
                            <img src={certo} alt="certo"/>
                        </button>
                </Habito>
                )
            }       
        </PageUser>
    )
}

const Day = styled.div`
    margin-top: 98px;
    margin-left: 0px;
    width: 340px;
`

const Habito = styled.div`
    margin-top: 28px;
    background-color: #ffffff;
    width: 340px;
    height: 91px;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    button{
        width: 69px;
        height: 69px;
        margin-top: 11px;
        margin-right: 10px;
        background-color: #EBEBEB;
    } 
    p{
        margin: 10px;
    }   
`
const Detalhes = styled.div`
    font-size: 13px;
`