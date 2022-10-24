import axios from "axios"
import {  useState } from "react"
import styled from "styled-components"
import { BASEURL } from "../constant/urls"

export default function CadastroHabito({ cadastro, setCadastro }) {
    const token = localStorage.getItem("token")
    const [daysweek, setDaysweek] = useState([{ id: "D", isSelect: false }, { id: "S", isSelect: false }, { id: "T", isSelect: false }, { id: "Q", isSelect: false }, { id: "Q", isSelect: false }, { id: "S", isSelect: false }, { id: "S", isSelect: false }])

    const [habito, setHabito] = useState()
    const [diasselecionados, setSelecionados] = useState([])    

    function AddDays(i) {
        if(diasselecionados.includes(i)){
            const newselect = diasselecionados.filter( p => p !== i)
            setSelecionados(newselect)
        }else{
            setSelecionados([...diasselecionados, i])
        }
        const day = daysweek[i]
        day.isSelect = !day.isSelect
        const arr = []
        Object.assign(arr, daysweek)
        arr[i] = day
        setDaysweek(arr)                
    }

    function handleHabito(){
        const body = {name: habito, days: diasselecionados}

        axios.post(`${BASEURL}/habits`, body, {headers: {'Authorization': `Bearer ${JSON.parse(token)}`}})
            .then(
                (res) => {
                    console.log(res.data)
                    setCadastro(false) 
            }
            )
            .catch(
                (err) => console.log(err.respose.data)
            )
    }    

    if (cadastro) {
        return (
            <NovoHabito>
                <input
                    type="text"
                    placeholder="nome do hábito"
                    onChange={(e) => setHabito(e.target.value)}
                />
                <Days>
                    {daysweek.map(
                        (d, i) => <Day cor = {d.isSelect} onClick={() => AddDays(i)} key={i}>{d.id}</Day>
                    )}
                </Days>
                <Botoes>
                    <Cancelar onClick={() => setCadastro(false)}>Cancelar</Cancelar>
                    <button onClick={handleHabito}>Salvar</button>
                </Botoes>
            </NovoHabito>
        )

    }
}

const NovoHabito = styled.div`
    background-color: #ffffff;
    width: 340px;
    height: 180px;
    margin-top: 20px;
    border-radius: 5px;
    input{
        margin: 18px;
    }
    button{
        width: 84px;
        height: 35px;
        font-size: 16px;
    }
`
const Days = styled.div`
    margin-top: 0px;
    margin-left: 18px;
    display: flex;
    height: 30px;
    width: 235px;
`
const Day = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-right: 5px;
    background: ${prop => prop.cor ? "#D4D4D4" : "#FFFFFF"};
    color:${prop => prop.cor ? "#FFFFFF" : "#D4D4D4"};
    
`
const Botoes = styled.div`
    margin-top: 30px;
    margin-left: 148px;
`
const Cancelar = styled.button`
    background-color: #ffffff;
    border: none;
    font-size: 16px;
    color: #52B6FF;
`
