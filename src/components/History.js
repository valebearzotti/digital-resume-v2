import React from 'react'
import styled from 'styled-components'

export const History = () => {
    return (
        <Container>
            <Headline>
                Work History
            </Headline>
            <Work>
                <Title>
                    ➡️ Frontend Engineer @ Learning Nodes
                </Title>
                <Date>
                    August 2022 - Present
                </Date>
                <Description>

                </Description>
            </Work>
            <Work>
                <Title>
                    ➡️ Full Stack Developer @ <Link href="https://www.linkedin.com/company/agenciaclica/">Clica</Link>
                </Title>
                <Date>
                    May 2022 - August 2022
                </Date>
                <Description>
                    E-commerce website design and development. Maintenance and development of functionalities for CalificApp app using Node.js.
                </Description>
            </Work>
            <Work>
                <Title>
                    ➡️ Full Stack Developer @ <Link href="https://www.linkedin.com/school/unroficial/">UNR</Link>
                </Title>
                <Date>
                    March 2021 - April 2022
                </Date>
                <Description>
                    System mockups with flow charts and information diagrams. Web applications design in Figma. Frontend development with React.js.
                    Backend development with Express.js. MySQL databases management.
                    Scalable development. Maintenance of current websites developed in WordPress.
                </Description>
            </Work>
            <Work>
                <Title>
                    ➡️ Freelance Teacher @ <Link href="https://www.linkedin.com/company/superprof/">Superprof</Link>
                </Title>
                <Date>
                    June 2020 - December 2020
                </Date>
                <Description>
                    Featured teacher badge. More than 20 students with positive feedback. +50 hours of lessons given related to programming (Python and C) and mathematics.
                </Description>
            </Work>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    gap: 40px;
`

const Headline = styled.span`
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 20px;
`

const Work = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 10px 20px;
    border-left: 1px solid #adb0b166;
`

const Title = styled.span`
    text-transform: uppercase;
`

const Date = styled.span`
    color: #adb0b1;
    font-size: 14px;
`

const Description = styled.p`
    color: #adb0b1;
    line-height: 150%;
    font-weight: 300;
    margin-top: 0;
`

const Link = styled.a`
    text-decoration: none;
    color: #FFFFFF;
    cursor: pointer;
    transition: .1s color ease-in-out;
    &:hover{
        color: #ED12BD;
    }
`