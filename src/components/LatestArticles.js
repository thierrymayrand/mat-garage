import styled from "styled-components";
import { db } from "../store/Firebase"
import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react";

const MainContainer = styled.div`
width: 100%;

`

const Title = styled.h4`
font-size: 1.3em;
`
const ArticlesContainer = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
`
const Image = styled.img`
width: 100%;
height: auto;
`

const P = styled.p`
`

const ArticleContainer = styled.div`
`
function LatestArticles() {
    const [articles, setArticles] = useState([])


    useEffect(() => {

        try {
            async function getArticle() {
                let items = []
                const snapshot = await getDocs(collection(db, 'ebook'));
                snapshot.forEach(doc => {
                    items.push({ id: doc.id, ...doc.data() })
                })
                setArticles(items)

            }

            getArticle()

        } catch (err) {
            console.log(err)
        }
        console.log(articles)

    }, [])
    return (
        <MainContainer>
            <Title>Articles Recents</Title>
            <ArticlesContainer>
                {articles.map(art => {
                    return (
                        <ArticleContainer>
                            <P>{art.enteredTitle}</P>
                            <Image src={art.imgUrl} />
                        </ArticleContainer>

                    )
                })}
            </ArticlesContainer>

        </MainContainer>
    )
}

export default LatestArticles;