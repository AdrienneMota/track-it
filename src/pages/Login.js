import { PageContainer } from "../components/PageContainer"
import Logo from "../components/Logo"
import { Link } from "react-router-dom"


export default function Login(){
    return(
        <PageContainer>
            <Logo/> 
            <form>
                <input type="text" placeholder="email"/>
                <input type="text" placeholder="senha"/>
                <button>Entrar</button>
            </form>
            <Link to={"/cadastro"}>
                Não tem uma conta? Cadastre-se!
            </Link>
        </PageContainer>
    )
}




