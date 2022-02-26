import styled from "styled-components"


const ArticleItemContainer = styled.div`
display: flex;
gap: 50px;
margin-top: 40px;
`

const Image = styled.img`
width: 50%;
height: auto;
`

const Title = styled.h4`
margin-top: 10px;
margin-bottom: 0;
color: white;
font-weight: 400;
font-size: 2em;

`
const P = styled.p`

color: white;
font-size: 1.2em;
width: 40vw;
`

const TextContainer = styled.div`
width: 60vw;
`

const Button = styled.button`
padding: 10px 20px;
background-color: white;
color: black;
font-weight: 600;
border: none;
font-size: 1.4em;

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