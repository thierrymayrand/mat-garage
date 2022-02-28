import { useEffect, useState } from "react"
import styled from "styled-components"
import { db } from "../../store/Firebase"
import { collection, getDocs } from "firebase/firestore"
import ArticleItem from "./ArticleItem"


const SectionContainer = styled.div`

margin: 0 20px;
display: flex;
flex-direction: column;
padding: 0 20px;
margin-top: 40px;

 `
const Title = styled.h1`
font-size: 2.5em;
font-weight: 300;
line-height: 1.2;
color: black;

`

const RecentArticlesContainer = styled.div`
display: flex;



`
function Section1() {

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
        <SectionContainer>
            <Title>Decouvrez nos articles</Title>
            <RecentArticlesContainer>
                {articles.map((article) => {
                    return (
                        <ArticleItem desicription={article.enteredDescription} title={article.enteredTitle} image={article.imgUrl} description={article.enteredDescription}></ArticleItem>
                    )
                })}
            </RecentArticlesContainer>

        </SectionContainer>

    )
}

export default Section1;