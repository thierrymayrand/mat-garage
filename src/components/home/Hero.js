import styled from "styled-components"
import image from "../../images/article.png"
import { Link } from "react-router-dom"


const MainContainer = styled.div`

 `
const HeroContainer = styled.div`
 display: flex;
 background-color: rgb(12,86,159);
 justify-content: space-between;
 height: 60vh;
 padding: 0 50px;
 
 `
const Left = styled.div`
align-self: center;
width: 60%
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
function Hero() {
    return (

        <HeroContainer>
            <Left>
                <TextContainer>
                    <Title>13 ans de contenus sportif a un endroit</Title>
                    <P>Accedez au contenus integral de matthieu produit lors de ses 13 dernieres exclusivement ici. Parcourez les ses articles, videos, cours ainsi que ses ebook.</P>
                    <ButtonContainer>
                        <Link to="/ebook" style={linkStyle}>Ebook</Link>
                        <Link to="/articles" style={linkStyle}>Articles</Link>
                    </ButtonContainer>
                </TextContainer>

            </Left>

            <Image src={image} />

        </HeroContainer>

    )
}
export default Hero;