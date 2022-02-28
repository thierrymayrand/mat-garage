import styled from "styled-components";
import { db } from "../store/Firebase"
import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
width: 100%;

`

const ArticleRecentTitle = styled.h4`
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

const linkStyle = {
    marginTop: '0',
    textDecoration: "none",
    color: 'black',



    fontSize: "1.1em",
    fontWeight: "600"
};

function LatestArticles() {
    const [articles, setArticles] = useState([])


    useEffect(() => {

        try {
            async function getArticle() {
                let items = []
                const snapshot = await getDocs(collection(db, 'article'));
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
            <ArticleRecentTitle>Articles Recents</ArticleRecentTitle>
            <ArticlesContainer>
                {articles.map(art => {
                    return (
                        <Link to={`/article/${art.id}`} style={linkStyle} >
                            <P>{art.title}</P>
                            <Image src={art.imgUrl} />
                        </Link>

                    )
                })}
            </ArticlesContainer>

        </MainContainer>
    )
}

export default LatestArticles;