import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondoc.png";

const BackG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 22rem;
    background: url(${fondo});

    @media (max-width: 800px) {
        display: flex;
        height: auto;
        background-size: 100%;
    }
`

const Titulo = styled.h1`
    color: #FFF;
    text-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);
    font-size: 5.2rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.02em;

    @media (max-width: 800px) {
        display: flex;
        font-size: 2rem;
        text-align: center;
        align-items: center;
        font-weight: 500;
    } 
`

const DivCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 10rem;
    gap: 2rem;

    @media (max-width: 800px) {
        margin: 1.5rem 1rem;
        gap: 1rem;
    }
`



const Encabe = styled.h1`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #D6D582;
    text-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    padding-top: 2rem;
    border-top: 2px solid #D6D582;

    @media (max-width: 800px) {
        font-size: 2rem;
    }
`

const Parrafo = styled.p`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #464646;
    font-size: 1.6rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`

const Contacto = () => {
    return (
        <>
            <BackG>
                <Titulo>Contacto</Titulo>
            </BackG>
            <DivCont>   
                <Encabe>Granja Los Pibes</Encabe>
                <Parrafo>Pje el Centinela - Tandil</Parrafo>
                <Encabe>Humedal</Encabe>
                <Parrafo>Km 139 de la ruta Nacional 226.</Parrafo>
            </DivCont>
        </>
    )
}

export default Contacto