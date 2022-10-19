import styled from "styled-components"
import Logo from "../components/Logo"


export default function Cadastro(){
    return(
        <PageContainer>
            <Logo/>            
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="senha"/>
            <input type="text" placeholder="nome"/>
            <input type="text" placeholder="foto"/>
            <button>Entrar</button>
            <a>Já tem uma conta? Faça login!</a>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    width: 375px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`


