import React from 'react'
import styled from 'styled-components'

export const Footer = () => {
    return (
        <Container>
            <Span>Inspired by <Link href="https://www.dennisivy.com/">Dennis Ivy</Link> design.</Span>
            <Span>Last updated on September 2022.</Span>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0px;
    color: #adb0b1;
    @media(max-width: 420px){
        flex-direction: column;
        gap: 20px;
    }
`


const Link = styled.a`
    text-decoration: none;
    color: #adb0b1;
    cursor: pointer;
    transition: .1s color ease-in-out;
    &:hover{
        color: #ED12BD;
    }
`

const Span = styled.span`
    color: #adb0b1;
    font-size: 12px;
`