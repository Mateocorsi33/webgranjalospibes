import React from "react";
import styled from "styled-components";
import imagenlogo from "../../../assest/logoglp.png";

const BoxLogo = styled.div` 
    display: flex;
    align-items: center;
    width: 15%;
    height: 4.5rem;
    background-color: #586E66;
    @media (max-width: 800px) {
        display: flex;
        justify-content:center;
        width: 100%;
    }
`
const BoxImgText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0 1rem 15%;
    @media (max-width: 800px) {
        margin:0;
    }
`
const ImgLogo = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);
`
const DivText = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #ffffff;

    @media (max-width: 800px) {
        display: none;
    }
`

const TextLogo1 = styled.h2`
    font-weight: 600;
    margin:0;
    font-size: 0.8rem;
`
const TextLogo2 = styled.h1`
    font-weight: 600;
    margin:0;
    font-size: 1rem;
`

const Logo = () => {
    return(
        <BoxLogo>
            <BoxImgText>
                <ImgLogo src={imagenlogo} alt="Logo"/>
                <DivText>
                    <TextLogo1>GRANJA</TextLogo1>
                    <TextLogo2>LOS PIBES</TextLogo2>
                </DivText>
            </BoxImgText>
        </BoxLogo>
    )
}

export default Logo
