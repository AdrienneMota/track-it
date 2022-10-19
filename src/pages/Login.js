import styled from "styled-components"
import Logo from "../components/Logo"


export default function Login(){
    return(
        <PageContainer>
            <Logo/>            
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="senha"/>
            <button>Entrar</button>
            <a>Não tem uma conta? Cadastre-se!</a>
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


