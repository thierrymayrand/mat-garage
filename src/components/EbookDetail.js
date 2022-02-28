import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { db } from "../store/Firebase"
import { doc, getDoc } from "firebase/firestore"
import styled from "styled-components"
import LatestArticles from "./LatestArticles";

//MAIN CONTAINER
const EbookMainContainer = styled.div`
padding: 10px 20px;
display: flex;

`
// SECTION 1
const EbookDetailContainer = styled.div`

`
//LEFT CONTAINER
const LeftContainer = styled.div`
width: 30%;
`

const DetailImage = styled.img`
width: 80%;
height: auto;
`

// CENTER CONTAINER
const CenterContainer = styled.div`
width: 50%;
`

const ResumeContainer = styled.div`
`
const Title = styled.h1`
`
const ResumeTitle = styled.p`
`
const ResumeSubtitle = styled.p`
`

const ResumeText = styled.p`
`
// RIGHT CONTAINER
const RightContainer = styled.div`
background-color: rgb(251, 251, 251);
align-self: top;
`
const BuyTitle = styled.h4`
margin: 0;

`
const BuyButton = styled.a`
width: 100%;
margin: 10px 0;

background-color: black;

color: white;
font-weight: 600;
border-radius: 5px;
`
const SubTitle = styled.h4`

`

const TitleContainer = styled.div`

`

const ImageContainer = styled.div`

`



const P = styled.p`
font-size: 1;
font-weight: 300;
line-height: 1;
margin-top: 0;
`
function EbookDetail() {

    const { ebookId } = useParams()
    const [ebook, setEbook] = useState({})

    useEffect(() => {

        try {
            async function getEbook() {
                const docRef = doc(db, "ebook", ebookId);
                const docSnap = await getDoc(docRef);


                setEbook(docSnap.data())

            }

            getEbook()
            console.log(ebook)

        } catch (err) {
            console.log(err)
        }
    }, [ebookId])


    return (
        <EbookMainContainer>
            <LeftContainer>
                <DetailImage src={ebook.imgUrl} />

            </LeftContainer>

            <CenterContainer>
                <Title>{ebook.enteredTitle}</Title>
                <P>de Mattieu Dubreucq</P>
                <ResumeContainer>
                    <ResumeTitle>Resume</ResumeTitle>
                    <ResumeSubtitle>Sequel to the #1 New York Times bestseller!
                        Sarah J. Maas's sexy, groundbreaking CRESCENT CITY series continues with the
                        second installment</ResumeSubtitle>
                    <ResumeText>
                        {ebook.enteredDescription}
                    </ResumeText>
                </ResumeContainer>
            </CenterContainer>

            <RightContainer>
                <BuyTitle>Acheter ce livre</BuyTitle>
                <BuyButton href="https://buy.stripe.com/test_14kg145bZ0pj2Z2aEE">Acheter</BuyButton>
            </RightContainer>
        </EbookMainContainer>
    )
}

export default EbookDetail;