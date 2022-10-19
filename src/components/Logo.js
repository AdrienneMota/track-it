import logo from "../assets/img/logo.png"
import styled from "styled-components"

export default function Logo(){
    return(
        <Image src={logo} alt="logo trackit"/>
    )
}

const Image = styled.img`
    margin-top: 60px;
    margin-bottom: 30px;
`