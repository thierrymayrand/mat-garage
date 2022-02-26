import styled from "styled-components"
import { Link } from "react-router-dom"

const MainContainer = styled.div`
display: flex;
justify-content: center;
gap 5px;
margin-top: 20px
`
const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'black',
    fontSize: "1.1em",
    fontWeight: "400"
};
const menuItems = [
    {
        title: "home"
    },
    {
        title: "articles"
    },
    {
        title: "ebook"
    },
    {
        title: "youtube"
    },

]

function Navbar() {
    return (
        <MainContainer>
            {menuItems.map((item, index) => {
                return (
                    <Link to={`/${item.title}`} style={linkStyle} >{item.title}</Link>
                )
            })}
        </MainContainer>
    )
}

export default Navbar;