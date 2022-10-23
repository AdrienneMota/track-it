import styled from "styled-components"
import { useAuth } from "../context/auth"

export default function Navbar(){
    const {image} = useAuth()
    return(
        <Header>
            <div>
                <p>TrackIt</p>
                <img src={image} alt="img user"/>
            </div>              
        </Header>
    )
}

const Header = styled.div`
    position: fixed;
    top: 0;
    width: 375px;
    height: 75px;
    background-color: #126BA5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 15%;
    div{
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    p{
        font-family:'Playball', cursive;
        font-size: 40px;
        color: #FFFFFF;
    }
    img{
        width: 51px;
        height: 51px;
        border-radius: 100%;
        border: 3px solid #FFFFFF;
    }
`