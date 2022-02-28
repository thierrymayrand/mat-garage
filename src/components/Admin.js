import styled from "styled-components";
import { doc, addDoc, collection, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../store/Firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../store/Firebase"

const MainSection = styled.div`
`
const ArticlesSection = styled.div`
`
const EbookSection = styled.div`
`
const YoutubeSection = styled.div`
`
const Title = styled.h2`
`
const Form = styled.form`

`
const Input = styled.input`

`
const Button = styled.button`
`

const TextArea = styled.textarea`
`


function Admin() {


    const [youtubeTitle, setYoutubeTitle] = useState("")
    const [youtubeDescription, setYoutubeDescription] = useState("")
    const [youtubeUrl, setYoutubeUrl] = useState("")
    const [youtubeImage, setYoutubeImage] = useState()

    const [ebookTitle, setEbookTitle] = useState("")
    const [ebookCover, setEbookCover] = useState("")
    const [ebookUrl, setEbookUrl] = useState("")
    const [ebookSubtitle, setEbookSubtitle] = useState("")
    const [ebookImage, setEbookImage] = useState()



    // Youtube
    const youtubeTitleHandler = (event) => {
        event.preventDefault()
        setYoutubeTitle(event.target.value)
    }

    const youtubeDescriptionHandler = (event) => {
        event.preventDefault()
        setYoutubeDescription(event.target.value)
    }
    const youtubeUrlHandler = (event) => {
        event.preventDefault()
        setYoutubeUrl(event.target.value)
    }

    const youtubeImageHandler = (event) => {
        event.preventDefault()

        setYoutubeImage(event.target.files[0])
        console.log(youtubeImage)
    }

    // ADD YOUTUBE
    const addYoutubePlaylist = async (event) => {
        event.preventDefault()

        const docRef = await addDoc(collection(db, "youtube"), {
            title: youtubeTitle,
            description: youtubeDescription,
            url: youtubeUrl
        })
        const storageRef = ref(storage, docRef.id);
        uploadBytes(storageRef, youtubeImage)
            .then(snapshot => {
                getDownloadURL(storageRef).then(async imgurl => {
                    await updateDoc(doc(db, "youtube", docRef.id), {
                        imgUrl: imgurl
                    })
                }

                )

            })

    }


    //ARTICLE START 

    //ARTICLE STATE
    const [articleTitle, setArticleTitle] = useState("")
    const [articleDescription, setArticleDescription] = useState("")
    const [articleContent, setArticleContent] = useState("")
    const [articleImage, setArticleImage] = useState()

    //ARTICLE TITLE
    const articleTitleHandler = (event) => {
        event.preventDefault()
        setArticleTitle(event.target.value)
    }
    //DESCRIPTION
    const articleDescriptionHandler = (event) => {
        event.preventDefault()
        setArticleDescription(event.target.value)
    }
    //CONTENT
    const articleContentHandler = (event) => {
        event.preventDefault()
        setArticleContent(event.target.value)
    }
    //IMAGE
    const articleImageHandler = (event) => {
        event.preventDefault()

        setArticleImage(event.target.files[0])

    }
    //ADD ARTICLE
    const addArticle = async (event) => {
        event.preventDefault()

        const docRef = await addDoc(collection(db, "article"), {
            title: articleTitle,
            description: articleDescription,
            articleContent: articleContent,
        })
        const storageRef = ref(storage, docRef.id);
        uploadBytes(storageRef, articleImage)
            .then(snapshot => {
                getDownloadURL(storageRef).then(async imgurl => {
                    await updateDoc(doc(db, "article", docRef.id), {
                        imgUrl: imgurl
                    })
                }

                )

            })

    }


    // EBOOK START

    //EBOOK-TITLE
    const ebookTitleHandler = (event) => {
        event.preventDefault()
        setEbookTitle(event.target.value)
    }

    // EBOOK-SUBTITLE   
    const ebookSubtitleHandler = (event) => {
        event.preventDefault()
        setEbookSubtitle(event.target.value)
    }
    //EBOOK-DESCRIPTION
    const ebookCoverHandler = (event) => {
        event.preventDefault()
        setEbookCover(event.target.value)
    }


    //EBOOK-IMAGE
    const ebookImageHandler = (event) => {
        event.preventDefault()

        setEbookImage(event.target.files[0])
    }

    //ADD EBOOK
    const addEbook = async (event) => {
        event.preventDefault()

        const docRef = await addDoc(collection(db, "ebook"), {
            title: ebookTitle,
            cover: ebookCover,
            url: ebookUrl
        })
        const storageRef = ref(storage, docRef.id);
        uploadBytes(storageRef, ebookImage)

            .then(snapshot => {
                getDownloadURL(storageRef).then(async imgurl => {
                    await updateDoc(doc(db, "ebook", docRef.id), {
                        imgUrl: imgurl
                    })
                }

                )

            })

    }


    return (
        <MainSection>
            <ArticlesSection>
                <Title>Article Section</Title>
                <Form onSubmit={addArticle}>
                    <Input onChange={articleTitleHandler} type="text" placeholder="Article Title"></Input><br></br>
                    <Input onChange={articleDescriptionHandler} type="text" placeholder="Article Subtitle"></Input><br></br>
                    <label>Image</label>
                    <Input type="file" onChange={articleImageHandler} ></Input><br></br>
                    <TextArea onChange={articleContentHandler} placeholder="Article Content"></TextArea><br></br>
                    <Button>Submit</Button>
                </Form>
            </ArticlesSection>
            <EbookSection>
                <Title >Ebook Section</Title>
                <Form onSubmit={addEbook}>
                    <Input type="text" onChange={ebookTitleHandler} placeholder="Ebook Title"></Input><br></br>
                    <Input type="text" onChange={ebookSubtitleHandler} placeholder="Ebook SubTitle"></Input><br></br>
                    <label>Image</label>
                    <Input type="file" onChange={ebookImageHandler} ></Input><br></br>
                    <TextArea placeholder="Ebook Cover" onChange={ebookCoverHandler}></TextArea><br></br>
                    <Button>Submit</Button>
                </Form>
            </EbookSection>

            <YoutubeSection>
                <Title>Youtube Section</Title>
                <Form onSubmit={addYoutubePlaylist}>
                    <Input type="text" onChange={youtubeTitleHandler} placeholder="Playlist Title"></Input><br></br>
                    <Input type="text" onChange={youtubeDescriptionHandler} placeholder="Playlist Description "></Input><br></br>
                    <Input type="text" onChange={youtubeUrlHandler} placeholder="Playlist Url "></Input><br></br>
                    <label>Image</label>
                    <Input type="file" onChange={youtubeImageHandler}></Input><br></br>

                    <Button>Submit</Button>
                </Form>

            </YoutubeSection>
        </MainSection>

    )
}

export default Admin;