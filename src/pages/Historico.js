import Navbar from "../components/Navbar";
import styled from "styled-components";
import { PageUser } from "../components/PageContainer";
import Footer from "../components/Footer";

export default function Historico(){
    return(
        <PageUser>
            <Navbar/>
            <Day>
                <p>Historico</p>
                <span>Nenhum habito concluido</span>
            </Day>
            <Footer/>
        </PageUser>
    )
}

const Day = styled.div`
    margin-top: 98px;
    margin-left: 0px;
    width: 340px;
`