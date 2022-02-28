import styled from "styled-components"


const ArticleItemContainer = styled.div`
margin-top: 40px;
width: 40%;
`

const Image = styled.img`
width: 100%;
height: auto;

`

const Title = styled.h4`
margin-top: 10px;
margin-bottom: 0;
color: black;
font-weight: 400;
font-size: 1.3em;

`
const P = styled.p`
color: black;
font-size: 1.2em;
`

const TextContainer = styled.div`
width: 70%;

`

const Button = styled.button`
padding: 0;
background-color: white;
color: black;
font-weight: 600;
border: none;
font-size: 1.4em;
margin: 0;

`
function ArticleItem(props) {
    return (
        <ArticleItemContainer>
            <Image src={props.image} />
            <TextContainer>
                <Title>{props.title}</Title>
                <P>{props.description}</P>
                <Button>
                    Lire d'avantage
                </Button>
            </TextContainer>
        </ArticleItemContainer>
    )
}

export default ArticleItem;