import { PageUser } from "../components/PageContainer"
import Navbar from "../components/Navbar"
import styled from "styled-components"

export default function Habitos(){

    return(
        <PageUser>
            <Navbar/>
            <AddHabits>
                <p>Meus hábitos</p>
                <button>+</button>
            </AddHabits>
            <Habits>
                <div>
                    <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
                </div>
            </Habits>
        </PageUser>
    )
}

const AddHabits = styled.div`
    margin-top: 108px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    p{
        font-size: 23px;
        color: #126BA5;
    }
    button{
        margin-top: auto;
        margin-bottom: auto;
        width: 40px;
        height: 35px;
        border-radius: 5px;
        font-size: 27px;
        font-weight: bold;
    }
`
const Habits = styled.div`
    margin-top: 28px;
    width: 90%;
    p{
        font-size: 18px;
        color: #666666;
    }
`