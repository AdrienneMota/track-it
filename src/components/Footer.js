import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; 
import { useAuth } from "../context/auth"

export default function Footer(){
    const {concluidos} = useAuth()
    const {total} = useAuth()

    return(
        <Container>
            <Link to="/habitos"><p>Hábito</p></Link>
            <Link to="/hoje">
                <div>
                    <CircularProgressbar
                    value={(concluidos/total)*100}
                    text={"Hoje"}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                    })}
                />
                </div>
            </Link>
            <Link to="/historico"><p>Historico</p></Link>
        </Container>
    )
}

const Container = styled.div`
    width: 375px;
    height: 70px;
    background: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        width: 91px;
        height: 91px;
        margin-bottom: 30px;
    }
`