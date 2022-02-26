import { useEffect, useState } from "react"
import styled from "styled-components"
import { db } from "../../store/Firebase"
import { collection, getDocs } from "firebase/firestore"
import ArticleItem from "./ArticleItem"


const SectionContainer = styled.div`
background-color: rgb(12,86,159);
margin: 0 20px;
display: flex;
flex-direction: column;
padding: 0 20px;

 `
const Title = styled.h1`
font-size: 2.5em;
font-weight: 300;
line-height: 1.2;
color: rgb(249,249,248);

`

const RecentArticleContainer = styled.div`
display: block;

width: 70%;


`
function Section1() {

    const [articles, setArticles] = useState([])
    useEffect(() => {

        try {
            async function getArticle() {
                let items = []
                const snapshot = await getDocs(collection(db, 'ebook'));
                snapshot.forEach(doc => {
                    items.push(doc.data())
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
            <RecentArticleContainer>
                {articles.map((article) => {
                    return (
                        <ArticleItem title={article.enteredTitle} image={article.imgUrl} description={article.enteredDescription}></ArticleItem>
                    )
                })}
            </RecentArticleContainer>

        </SectionContainer>

    )
}

export default Section1;