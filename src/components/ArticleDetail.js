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
                const docRef = doc(db, "article", articleId);
                const docSnap = await getDoc(docRef);


                setArticle(docSnap.data())

            }

            getArticle()

        } catch (err) {
            console.log(err)
        }
    }, [articleId])

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
                    <P>?? La d??l??gation ukrainienne rencontrera la [d??l??gation] russe sans fixer de conditions pr??alables sur la fronti??re ukraino-bi??lorusse, dans la r??gion de la rivi??re Pripiat ??, a d??clar?? la pr??sidence sur les r??seaux sociaux.

                        La ville la plus proche dans ce secteur, c??t?? ukrainien, est Pripiat, mondialement c??l??bre depuis l???accident de la centrale nucl??aire voisine de Tchernobyl en 1986. Cette localit??, qui n???est plus habit??e, est devenue ces derni??res ann??es un lieu touristique.

                        Le porte-parole du Kremlin, Dmitri Peskov a lui affirm?? que la rencontre aura lieu dans la r??gion de Gomel en Bi??lorussie sans plus de pr??cisions. Cette r??gion est frontali??re notamment de la zone de Pripiat.</P>
                </BodyArticle>
            </BodyContainer>
            <LatestArticles />
        </MainContainer>
    )
}

export default ArticleDetail;