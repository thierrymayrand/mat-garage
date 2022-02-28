import { useContext, useState, useEffect } from "react"
import { articlesContext } from '../store/articlesProvider'
import styled from "styled-components"
import { db } from "../store/Firebase"
import { collection, getDocs } from "firebase/firestore"
import ArticleItem from "./home/ArticleItem"
import { Link } from "react-router-dom"

const ArticleContainer = styled.div`
margin-top: 20px

`
const Section1 = styled.div`
background-color: rgb(150,179,222);
height: 40vh;
`

const Section2 = styled.div`

`


// PLAYLIST CONTAINER
const PlaylistContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`


const Image = styled.img`
width: 50vw;
height: auto;
`


const PlaylistRightContainer = styled.div`
margin-left: 40px;
align-self: top;
width: 30%;
`
const TitleContainer = styled.div`
display: flex;
justify-content: space-between;
`
const PlaylistTitle = styled.h2`
margin: 0;
`
const NumberOfVid = styled.p`
margin-top: 5px;
margin-left: 15px;
font-size: 1.2em;
font-weight: 500;
color: grey;
`
const PlaylistSubtitle = styled.p`
margin: 0;
`
const AWrap = styled.div`
margin-top: 25px;
`
const A = styled.a`
background-color: black;
color: white;
border: none;
padding: 10px 15px;
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


function Youtube() {

    const [articles, setArticles] = useState([])
    useEffect(() => {

        try {
            async function getArticle() {
                let items = []
                const snapshot = await getDocs(collection(db, 'youtube'));
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
            <Section2>
                {articles.map(playlist => {
                    return (
                        <PlaylistContainer>
                            <Link to={`/youtube/${playlist.id}`} style={linkStyle}>
                                <Image src={playlist.imgUrl} />
                            </Link>
                            <PlaylistRightContainer>
                                <TitleContainer>
                                    <PlaylistTitle>{playlist.title}</PlaylistTitle>
                                    <NumberOfVid>75 Videos</NumberOfVid>
                                </TitleContainer>

                                <PlaylistSubtitle>{playlist.description}</PlaylistSubtitle>
                                <AWrap>
                                    <A href={playlist.url}>Acceder la Playlist</A>
                                </AWrap>
                            </PlaylistRightContainer>

                        </PlaylistContainer>
                    )
                })}
            </Section2>
        </ArticleContainer>
    )
}

export default Youtube;