import React from 'react'
import styled from 'styled-components'

import Pic from '../assets/profile.png'

export const Hero = () => {
    return (
        <Container>
            <Profile src={Pic}/>
            <Information>
                <Name>
                    Valentina Bearzotti
                </Name>
                <Biography>
                    Frontend Engineer specialized in <Highlight>Web3</Highlight> 👩🏻‍💻
                </Biography>
                <Email>
                    📩 <Link href="mailto:valebearzotti1@gmail.com">valebearzotti1@gmail.com</Link>
                </Email>
            </Information>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    @media(max-width: 570px){
        flex-direction: column;
        gap: 20px;
    }
`

const Profile = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
`

const Information = styled.div`
    display: flex;
    flex-direction: column;
    @media(max-width: 570px){
        width: 100%;
    }
`

const Name = styled.span`
    font-size: 48px;
    font-weight: 600;
    @media(max-width: 420px){
        font-size: 32px;
    }
`

const Biography = styled.p`
    font-weight: 300;
    line-height: 22px;
    color: #adb0b1;
    padding: 16px 0px;
`

const Email = styled.span`
    display: flex;
    gap: 8px;
    align-items: center;
`

const Link = styled.a`
    text-decoration: none;
    color: white;
`

const Highlight = styled.span`
    color: #BB1FCA;
`