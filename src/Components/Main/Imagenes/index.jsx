import React from "react";
import styled from "styled-components";
import flecha from "../../../assest/flecha.png";
import fondo from "../../../assest/fondo9.png";


const DivImg = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 4rem 0;
    width: 100%;
    height: auto;
    padding: 5rem 5%;
    background-image: url(${fondo});
    background-attachment: fixed;
    background-size: cover;

    @media (max-width: 800px) {
        width: 95%;
        padding: 1.5rem 5%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: .5rem;

    @media (max-width: 800px) {
        width: 95%;
        gap:1rem;
    }
`

const Titu = styled.h1`
    display: flex;
    width: 100%;
    flex-direction: column;
    color: #D6D582;
    font-weight: 800;
    margin: 0;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    line-height: 2.5rem;
    letter-spacing: 2px;
    border-bottom: 2px  #D6D582;
    

    @media (max-width: 800px) {
        letter-spacing: 0.5px;
        width: 100%;
        font-size: 1.7rem;
        line-height: 1.5rem;
        font-weight: 600;
        text-align: center;
        margin-bottom: 1rem;
    }
`

const Parra = styled.p`
    display: flex;
    width: 80%;
    flex-direction: column;
    margin: 0;
    color: #464646;
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 0.9px;
    padding-top: .5rem;

    @media (max-width: 800px) {
        width: 100%;
        font-size: 1rem;
        line-height: 2rem;
        font-weight: 400;
        letter-spacing: 0;
        text-align: center;
    }
`

const Img = styled.img`
    display: flex;
    width: 40%;
    margin-left: 40%;

    @media (max-width: 800px) {
        display: none;
    }
`

const Video = styled.iframe`
    margin-top: 1.5rem;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 1px rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        width: 100%;
    }
`


const DivImgVideo = () => {
    return(
        <DivImg>
            <DivText>
                <Titu>PRESERVAR PARA VIVIR</Titu>
                <Parra>Te invitamos a mirar nuestro nuevo documental para poder conocer, cuidar y conservar el lugar del cual somos parte.</Parra>
                <Parra>Cortometraje documental sobre el ambiente de Tandil, para mirarnos y reconocernos en lo nuestro, en lo próximo, en lo cercano que, al fin de cuentas, nos constituye.</Parra>
                <Img src={flecha}/>
            </DivText>
            <Video  width="620" 
                    height="349" 
                    src="https://www.youtube.com/embed/AHZFRtVyC48?si=7ltCQSB4Beq__pSD" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
            </Video>   
        </DivImg>
    )
}

export default DivImgVideo