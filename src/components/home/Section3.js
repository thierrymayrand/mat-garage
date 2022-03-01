import { useState } from "react"
import styled from "styled-components"
import img from "../../images/email.JPG"

const Container = styled.div`
margin: 0 40px; 
width: 80% 
`
const Title = styled.h1`
 font-size: 2.5em;
 font-weight: 300;
 line-height: 1.2;
 color: black;
 
 `

const FlexContainer = styled.div`
 display: flex;
 margin-top: 20px;
 gap: 50px;
 `

const Img = styled.img`
 width: 40%;
 height: auto;
 `

const EmailContainer = styled.div`
align-self: center;
 `
const EmailTitle = styled.h2`
margin-top: 0;
font-weight: 400;
`
const EmailInput = styled.input`
padding: 10px;

color: black;
font-size: 1.2em;
border-color: grey ;
`
const EmailSubmit = styled.button`
margin-left: 10px;
padding: 10px;
font-size: 1.2em;
background-color: black;
color: white;
`
function Section3() {
    const [email, setEmail] = useState("")

    const emailInputHandler = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const emailSubmitHandler = () => {
        console.log(email)
    }

    return (
        <Container>
            <Title>Abbonnez vous a la programation gratuite</Title>
            <FlexContainer>
                <Img src={img} />
                <EmailContainer>
                    <EmailTitle>Abonnez vous gratuitement a la programation de Mattieu</EmailTitle>
                    <EmailInput type="text" onChange={emailInputHandler} placeholder="Adresse Email"></EmailInput>
                    <EmailSubmit onClick={emailSubmitHandler}>M'inscrire</EmailSubmit>
                </EmailContainer>
            </FlexContainer>
        </Container>
    )
}

export default Section3;