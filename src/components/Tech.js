import React from 'react'
import styled from 'styled-components'

export const Tech = () => {
    return (
        <Container>
            <Headline>
                Tech stack
            </Headline>
            <List>
                <Tag>React, NodeJS, Express</Tag>
                <Tag>HTML, CSS, JavaScript</Tag>
                <Tag>Postgres & MySQL</Tag>
                <Tag>Figma & AdobeXd</Tag>
            </List>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`

const Headline = styled.span`
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 20px;
`

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media(max-width: 420px){
        flex-direction: column;
    }
`

const Tag = styled.span`
    padding: 12px 20px;
    border: 1px solid #BB1FCA;
    border-radius: 50px;
    width: fit-content;
    font-size: 14px;
    color: #adb0b1;
`