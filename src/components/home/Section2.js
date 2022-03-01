import styled from "styled-components";
import img from "../../images/resume.jpg"


const SectionContainer = styled.div`
margin: 50px 40px;
 `
const Title = styled.h1`
 font-size: 2.5em;
 font-weight: 300;
 line-height: 1.2;
 color: black;
 
 `
const PlaylistContainer = styled.div`
display: flex;
`
const Img = styled.img`
width: 40%;
height: auto;
margin-top: 40px;
`

const TextContainer = styled.div`
`

const ResumeTitle = styled.h2`
font-weight: 400;
font-size: 1.8em
`
function Section2() {
    return (
        <SectionContainer>
            <Title>Podcast: Resume de livres</Title>
            <PlaylistContainer>
                <Img src={img} />

            </PlaylistContainer>
        </SectionContainer>
    )
}

export default Section2;