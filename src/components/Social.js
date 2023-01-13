import React from 'react'
import styled from 'styled-components'

export const Social = () => {
    return (
        <Container>
            <Link href="https://www.linkedin.com/in/valentinabearzotti/">LinkedIn</Link>
            <Link href="https://github.com/valebearzotti">GitHub</Link>
            <Link href="https://twitter.com/valebearzotti">Twitter</Link>
            <Link href="https://www.instagram.com/valebearzotti/">Instagram</Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 0px;
`

const Link = styled.a`
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    color: #adb0b1;
    cursor: pointer;
    transition: .1s color ease-in-out;
    &:hover{
        color: #ED12BD;
    }
`