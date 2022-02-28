import styled from "styled-components"

import { Link } from "react-router-dom"
import img from "../../images/flowmaster.jpg"


const MainContainer = styled.div`

 `
const HeroContainer = styled.div`
 display: flex;
 background-image: url(${img});
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 justify-content: space-between;
 height: 70vh;
 width: 100%;
 
 
 `
const Left = styled.div`
align-self: center;
width: 60%;
margin-left: 40px;

 `
const Right = styled.div`
align-self: center;
background-color: rgb(52,126,199);
margin-right: 20px;
 `

const Image = styled.img`
width: auto;
height: 50%;
align-self: center;

`

const TextContainer = styled.div`
width: 90%;
`
const Title = styled.h1`
font-size: 2.5em;
font-weight: 300;
line-height: 1.2;
color: rgb(249,249,248);
`

const P = styled.p`
font-size: 1.6em;
font-weight: 200;
color: white;
width: 60%;
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
border-radius: 5px
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
function Hero() {
    return (

        <HeroContainer>
            <Left>
                <TextContainer>
                    <Title>Mattieu Dubreucq - Flowmaster Crossfit</Title>
                    <P>Accedez au contenus integral de matthieu produit lors de ses 13 dernieres annees exclusivement ici. Parcourez les ses articles, videos, cours ainsi que ses ebook.</P>
                    <ButtonContainer>
                        <Link to="/ebook" style={linkStyle}>Ebook</Link>
                        <Link to="/articles" style={linkStyle}>Articles</Link>
                    </ButtonContainer>
                </TextContainer>

            </Left>



        </HeroContainer>

    )
}
export default Hero;