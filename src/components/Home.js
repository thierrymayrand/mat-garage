import styled from "styled-components"
import image from "../images/article.png"
import { Link } from "react-router-dom"
import Hero from "./home/Hero"
import Section1 from "./home/Section1"
import Section2 from "./home/Section2"


const MainContainer = styled.div`

 `



const Title = styled.h1`
font-size: 2.5em;
font-weight: 300;
line-height: 1.2;
color: rgb(249,249,248);
`

const P = styled.p`
font-size: 1.2em;
color: white;
`

const EmailContainer = styled.div`
height: 15vh;

`

const Input = styled.input`
placeholder: "name";

`

const ButtonContainer = styled.div`
display: flex;
gap: 20px;
`

const Button = styled.button`
padding: 10px;
background-color: white;
color: black;
border-radius: 10px
`

const linkStyle = {
    marginTop: '10px',
    textDecoration: "none",
    color: 'black',
    backgroundColor: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    fontSize: "1.1em",
    fontWeight: "600"
};
function Home() {
    return (
        <MainContainer>
            <Hero>

            </Hero>
            <Section1>
            </Section1>
            <Section2>

            </Section2>
        </MainContainer>
    )
}
export default Home;