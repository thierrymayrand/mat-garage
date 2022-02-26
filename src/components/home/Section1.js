import styled from "styled-components"


const SectionContainer = styled.div`
background-color: rgb(12,86,159);
margin: 0 20px;
 `
const Title = styled.h1`
font-size: 2.5em;
font-weight: 300;
line-height: 1.2;
color: rgb(249,249,248);
`
function Section1() {
    return (
        <SectionContainer>
            <Title>Decouvrez nos articles</Title>
        </SectionContainer>

    )
}

export default Section1;