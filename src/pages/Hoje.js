import Navbar from "../components/Navbar"
import { PageUser } from "../components/PageContainer"
import styled from "styled-components"
import certo from "../assets/img/certo.png"
import { useEffect, useState } from "react"
import axios from "axios"
import { BASEURL } from "../constant/urls"
import Footer from "../components/Footer"
import { useAuth } from "../context/auth"

export default function Hoje(){
    const token = localStorage.getItem("token")
    const {setTotal} = useAuth()
    const [habitoshoje, setHabitoshoje] = useState(undefined)
    const daysweek = ["Domingo", "Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]
    const d = new Date()
    let day = daysweek[d.getDay()]
    const dataFormatada = () => {
        const data = new Date();
        const dia = data.getDate();
        if (dia.toString().length == 1){
            dia = "0"+dia;
        }
        const mes = data.getMonth()+1;
        if (mes.toString().length == 1){
            mes = "0"+mes;
        }
        const ano = data.getFullYear();  
        
        return dia+"/"+mes+"/"+ano;
    }
    const {setConcluidos} = useAuth()
    let contador = 0;

    useEffect( () => {
        axios.get(`${BASEURL}/habits/today`, { headers : {"Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then((res) => {
                setHabitoshoje(res.data)
                localStorage.setItem("total", JSON.stringify(res.data.length))
                setTotal(res.data.length)
            })
            .catch((err) => console.log(err.response.data))
    }, [habitoshoje])

    function concluirAtividade(id, done){
        if(done){
            axios.post(`${BASEURL}/habits/${id}/uncheck`, {} , { headers : {"Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then( (res) => console.log("habito desmarcado"))
            .catch((err) => alert("Erro: "+err.response.data))
            contador = contador - 1
            localStorage.setItem("concluidos", JSON.stringify(contador))
            setConcluidos(contador)

        }else{
        axios.post(`${BASEURL}/habits/${id}/check`, {} , { headers : {"Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then( (res) => console.log("habito marcado"))
            .catch((err) => alert("Erro: "+err.response.data))
            contador = contador + 1
            localStorage.setItem("concluidos", JSON.stringify(contador))
            setConcluidos(contador)
        }
    }

    if(!habitoshoje){
        return <div>Carregando habitos de hoje</div>
    }

    return(
        <PageUser>
            <Navbar/>
            <Day>
                <p>{day}, {dataFormatada()}</p>
                <span>{contador} habitos concluidos</span>
            </Day>
            {
                habitoshoje.map( (h, i) =>
                    <Habito key = {i}>
                        <div>
                            <p>{h.name}</p>
                            <Detalhes>
                                <span>
                                    <p>Sequencia atual: </p> 
                                    <Sequenciatual verde={h.done}>
                                        {h.currentSequence} dias
                                    </Sequenciatual>
                                </span>
                                <span>                                
                                    <p>Seu recorde: </p> 
                                    <Recorde verde = {(h.highestSequence === h.currentSequence)}>{h.highestSequence} dias</Recorde>
                                </span>
                            </Detalhes>
                        </div>
                        <Button check={h.done} >
                            <img src={certo} onClick={() => concluirAtividade(h.id, h.done)} alt="certo"/>
                        </Button>
                </Habito>
                )
            } 
            <Footer/>      
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
    p{
        margin: 8px;
    }   
`
const Button = styled.button`
    width: 69px;
    height: 69px;
    margin-top: 11px;
    margin-right: 10px;
    background-color: ${prop => prop.check? "#8FC549" :"#EBEBEB"};
`
const Detalhes = styled.div`
    font-size: 13px;
    span{
        display: flex;
    }
`
const Sequenciatual = styled.p`
    color: ${prop => prop.verde? "#8FC549":"#666666"};
`
const Recorde = styled.p`
    color: ${prop => prop.verde? "#8FC549":"#666666"};
`