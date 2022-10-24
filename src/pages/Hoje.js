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

    useEffect( () => {
        axios.get(`${BASEURL}/habits/today`, { headers : {"Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then((res) => {
                setHabitoshoje(res.data)
            })
            .catch((err) => console.log(err.response.data))
    }, [habitoshoje])

    function concluirAtividade(id, done){
        if(done){
            axios.post(`${BASEURL}/habits/${id}/uncheck`, {} , { headers : {"Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then( (res) => console.log("habito desmarcado"))
            .catch((err) => alert("Erro: "+err.response.data))

        }else{
        axios.post(`${BASEURL}/habits/${id}/check`, {} , { headers : {"Authorization" : `Bearer ${JSON.parse(token)}`}})
            .then( (res) => console.log("habito marcado"))
            .catch((err) => alert("Erro: "+err.response.data))
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
                        <Button check={h.done} >
                            <img src={certo} onClick={() => concluirAtividade(h.id, h.done)} alt="certo"/>
                        </Button>
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
    p{
        margin: 10px;
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
`