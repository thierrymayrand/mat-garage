import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../store/Firebase"
import { doc, getDoc } from "firebase/firestore"
import styled from "styled-components"
import LatestArticles from "./LatestArticles";

const MainContainer = styled.div`
width: 60%;
max-width: 700px;
margin-left: auto;
    margin-right: auto;

`

const Title = styled.h1`


`
const SubTitle = styled.h4`

`

const TitleContainer = styled.div`

`

const ImageContainer = styled.div`

`
const Image = styled.img`
width: 100%;
height: auto;
`
const ImageSource = styled.p`
`
const ImageSubTitle = styled.p`
`

const BodyContainer = styled.div`

`
const BodyTitle = styled.h3`
font-size: 1.3em;
font-weight: 400;
line-height: 1.4;

`
const BodyArticle = styled.p`
`

const BodyAuthor = styled.div`
display: flex;
background-color: rgb(243,243,243);
`
const AuthorTitle = styled.p`
padding: 10px 10px;
margin: 0;
align-self: center;
`

const AuthorImage = styled.img`
width: 50px;
height: 50px;
object-fit: cover;
`
const P = styled.p`
font-size: 1.3em;
font-weight: 300;
line-height: 1.4;
`
function ArticleDetail() {

    const { articleId } = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {

        try {
            async function getArticle() {
                const docRef = doc(db, "ebook", articleId);
                const docSnap = await getDoc(docRef);


                setArticle(docSnap.data())

            }

            getArticle()

        } catch (err) {
            console.log(err)
        }
    }, [])

    const click = () => {
        console.log(article)
    }
    return (
        <MainContainer>
            <TitleContainer>
                <SubTitle></SubTitle>
                <Title>{article.enteredTitle}</Title>
            </TitleContainer>
            <ImageContainer>
                <Image src={article.imgUrl} />
                <ImageSource></ImageSource>
                <ImageSubTitle></ImageSubTitle>
            </ImageContainer>

            <BodyContainer>
                <BodyTitle>{article.enteredDescription}</BodyTitle>
                <BodyAuthor>
                    <AuthorImage src={article.imgUrl} />
                    <AuthorTitle>Mathieu Dubreucq</AuthorTitle>
                </BodyAuthor>
                <BodyArticle>
                    <P>« La délégation ukrainienne rencontrera la [délégation] russe sans fixer de conditions préalables sur la frontière ukraino-biélorusse, dans la région de la rivière Pripiat », a déclaré la présidence sur les réseaux sociaux.

                        La ville la plus proche dans ce secteur, côté ukrainien, est Pripiat, mondialement célèbre depuis l’accident de la centrale nucléaire voisine de Tchernobyl en 1986. Cette localité, qui n’est plus habitée, est devenue ces dernières années un lieu touristique.

                        Le porte-parole du Kremlin, Dmitri Peskov a lui affirmé que la rencontre aura lieu dans la région de Gomel en Biélorussie sans plus de précisions. Cette région est frontalière notamment de la zone de Pripiat.</P>
                </BodyArticle>
            </BodyContainer>
            <LatestArticles />
        </MainContainer>
    )
}

export default ArticleDetail;