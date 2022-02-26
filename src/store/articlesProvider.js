import { createContext, useState, useEffect } from "react";
import { db } from "./Firebase"
import { collection, getDocs } from "firebase/firestore"

export const articlesContext = createContext()
function ArticlesProvider(props) {

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
    const value = {
        articles,
        title: "hi"
    }

    return (
        <articlesContext.Provider value={"hi"}>
            {props.children}
        </articlesContext.Provider>
    )
}

export default ArticlesProvider;