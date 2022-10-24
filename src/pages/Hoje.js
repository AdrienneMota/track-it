import Navbar from "../components/Navbar"
import { PageUser } from "../components/PageContainer"
import styled from "styled-components"
import certo from "../assets/img/certo.png"

export default function Hoje(){
    return(
        <PageUser>
            <Navbar/>
            <Day>
                <p>Segunda, dd/mm/aaaa</p>
                <span>Nenhum habito concluido</span>
            </Day>
            <Habito>
                <div>
                    <p>Nome do habito</p>
                    <Detalhes>
                        <p>Sequencia atual: 4 dias</p>
                        <p>Seu recorde: 5 dias</p>
                    </Detalhes>
                </div>
                <button>
                    <img src={certo} alt="certo"/>
                </button>
            </Habito>
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