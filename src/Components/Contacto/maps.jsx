import React from "react";
import styled from "styled-components";
import mapaGranja from "../../assest/maps-granja.png";
import mapaHumedal from "../../assest/maps-humedal.png";


const DivMapas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 8rem;
    width: 100%;
    height: auto;
    background-color:#ffffff;
    
    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0;
    }
`

const DivCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20rem;
    height: auto;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 3rem 0;
    &:hover {
        transform: scale(1.1);
    }
    
    @media (max-width: 800px) {
        width: 90%;
        margin: 1rem 0;
    }
`

const DivGranja = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        width: 90%;
        }
`

const DivHumedal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
        width: 90%;
        }
`

const ImgMapa = styled.img`
    display: flex;
    width: 90%;
    height: auto;
    border-radius: 5px;
    margin-top: 1rem;
`

const Titulo = styled.h1`
    color: #557153;
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 1rem 0 0 0;
    padding-inline: .5rem;
`

const Parrafo = styled.p`
    color: #464646;
    text-align: center;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0.3rem 0 1rem 0;
    width: 80%;
`

const LinkMapa = styled.a`
    color: #F58220;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 1rem;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        transition: .3s;
        opacity: 70%;
        text-decoration: none;
        color: #F58220;
    }
`

export default function Maps() {
    return(
        <DivMapas>
            <DivCard>
                <DivGranja>
                    <ImgMapa src={mapaGranja}/>
                    <Titulo>Granja Los Pibes:</Titulo>
                    <Parrafo>Pje El Centinela, Tandil, Buenos Aires.</Parrafo>
                    <LinkMapa href="https://goo.gl/maps/NsSM96JGPmbQ9DVY6">Ver en mapa</LinkMapa>
                </DivGranja>
            </DivCard>
            <DivCard>
                <DivHumedal>
                    <ImgMapa src={mapaHumedal}/>
                    <Titulo>Humedal - Los Coipos:</Titulo>
                    <Parrafo>Km 139 de la ruta Nacional 226.</Parrafo>
                    <LinkMapa href="https://goo.gl/maps/gnQSLhbHuYQH8ZuA8">Ver en mapa</LinkMapa>
                </DivHumedal>
            </DivCard>
        </DivMapas>
    )
}