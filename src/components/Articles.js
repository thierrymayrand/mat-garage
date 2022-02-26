import { useContext, useState, useEffect } from "react"
import { articlesContext } from '../store/articlesProvider'
import styled from "styled-components"
import { db } from "../store/Firebase"
import { collection, getDocs } from "firebase/firestore"
import ArticleItem from "./home/ArticleItem"
import { Link } from "react-router-dom"

const ArticleContainer = styled.div`

`
const Section1 = styled.div`
background-color: rgb(150,179,222);
height: 40vh;
`

const Section2 = styled.div`
display: flex;
gap: 60px;
margin-left: 20px;
margin-top: 20px;
`

const Image = styled.img`
width: 20vw;
height: auto;
`
const linkStyle = {
    marginTop: '10px',
    textDecoration: "none",
    color: 'black',
    backgroundColor: 'white',

    borderRadius: '8px',
    fontSize: "1.1em",
    fontWeight: "600"
};
function Articles() {

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

        <ArticleContainer>
            <Section1>

            </Section1>
            <Section2>
                {articles.map(article => {
                    return (
                        <Link to={`/article/${article.id}`} style={linkStyle}>
                            <Image src={article.imgUrl} />
                            <p>{article.enteredTitle}</p>
                        </Link>

                    )
                })}
            </Section2>
        </ArticleContainer>
    )
}

export default Articles;