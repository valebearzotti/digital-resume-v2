import React from 'react'
import styled from 'styled-components'

export const Skills = () => {
    return (
        <Container>
            <Headline>
                Skills & Qualifications
            </Headline>
            <List>
                <Skill>✔️ Advanced Systems Engineering student</Skill>
                <Skill>✔️ 2.5 years experience with front & backend development</Skill>
                <Skill>✔️ Experience with dApps development and handling smart contract events</Skill>
                <Skill>✔️ Knowledge in ETH Blockchain & its ecosystem</Skill>
                <Skill>✔️ C2 English level - Proficient</Skill>
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
    flex-direction: column;
    padding-left: 30px;
    gap: 6px;
`

const Skill = styled.span`
    color: #adb0b1;
    font-weight: 300;
    line-height: 150%;
`