import React from "react";
import styled from "styled-components";
import video from "../../../assest/movie.webm";
import 'animate.css';


const BoxPortada = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
`
const VideoBackground = styled.div`
  display: flex;
  width: 100%;
`;
const Video = styled.video`
    position: relative;
    width: 100%;
    z-index: -1;

    @media (max-width: 800px) {
        width: 110%;
        height: auto;
    }
`
const DivText = styled.div`
    margin: 23% 12% 0;
    position: absolute;
    z-index: 2;
`
const Titulo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
    font-size: 5rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    line-height: 6rem;
    width: 100%;
    margin: 0;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.6);
    animation: bounceInLeft;
    animation-duration: 1s;

    @media (max-width: 800px) {
        display: none;
    }
`
const GradientOverlay = styled.div`  
    position: absolute;
    top: 80%;   
    bottom: 0;   
    left: 0;   
    width: 100%;   
    height: 55%;   
    content: '';   
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 61.84%);
    @media (max-width: 800px) {
        display: none;
    }
`


export default function Portada () {
    return (
        <BoxPortada>
            <VideoBackground>
                <Video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </Video>
                <DivText>
                    <Titulo>CONOCER PARA</Titulo>
                    <Titulo>CUIDAR Y CONSERVAR</Titulo>
                </DivText>
                <GradientOverlay />
            </VideoBackground>
        </BoxPortada>
    )
}
