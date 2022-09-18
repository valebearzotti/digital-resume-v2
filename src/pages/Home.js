import styled, { createGlobalStyle } from 'styled-components'
import { Footer } from '../components/Footer'

// Components
import { Hero } from '../components/Hero'
import { History } from '../components/History'
import { Skills } from '../components/Skills'
import { Social } from '../components/Social'
import { Tech } from '../components/Tech'

function Home() {
    return (
        <>
            <Global />
            <Container>
                <Hero />
                <Social />
                <Skills />
                <Tech />
                <History />
                <Footer />
            </Container>
        </>
    )
}

const Global = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #131415;
        font-family: 'Readex Pro', sans-serif;
        color: #FFFFFF;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    max-width: 660px;
    margin: 0 auto;
    padding: 50px 30px;
`


export default Home