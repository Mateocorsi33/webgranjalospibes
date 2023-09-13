import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondoc.png";
import Maps from "./maps";
import Redes from "./redes";

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
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.02em;

    @media (max-width: 800px) {
        display: flex;
        font-size: 2rem;
        text-align: center;
        align-items: center;
        font-weight: 500;
        padding: 1rem;
    } 
`

const DivCont = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 10rem;
    gap: 2rem;

    @media (max-width: 800px) {
        margin: 1.8rem 1rem 2rem 1rem;
        gap: 2rem;
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
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 3rem 0 0 0;
    padding-top: 2rem;
    border-top: 2px solid #D6D582;

    @media (max-width: 800px) {
        font-size: 1.5rem;
        margin: 1rem 0 0 0;
    }
`

const Parrafo = styled.p`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #557153;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 2.5rem;
    margin: 0;

    @media (max-width: 800px) {
        font-size: .9rem;
        line-height: 2rem;
        font-weight: 400;
    }
`

const Contacto = () => {
    return (
        <>
            <BackG>
                <Titulo>Contacto</Titulo>
            </BackG>
            <DivCont data-aos="zoom-in">
                <Encabe>NUESTROS LUGARES</Encabe>
                <Maps/>
            </DivCont>
            <DivCont>
                <Encabe data-aos="zoom-in">HORARIOS DE LA GRANJA LOS PIBES</Encabe>
                <Parrafo data-aos="zoom-in"><strong>LUNES A DOMINGO DE 10:00 - 18:30 HS</strong></Parrafo>
                <Parrafo data-aos="zoom-in">LAS ENTRADAS PARA VISITAR EL COMPLEJO TIENE UN VALOR DE <strong>$1000 PARA ADULTOS</strong> Y DE <strong>$500 MENORES DE 10 AÑOS.</strong> SE PUEDEN ADQUIRIR EN EL MISMO LUGAR, SIN NECESIDAD DE RESERVA PREVIA. <strong>¡ESTACIONAMIENTO LIBRE Y GRATUITO!</strong></Parrafo>
            </DivCont>
            <DivCont>
                <Encabe data-aos="zoom-in">ENCONTRANOS EN</Encabe>
                <Redes></Redes>
            </DivCont>
        </>
    )
}

export default Contacto