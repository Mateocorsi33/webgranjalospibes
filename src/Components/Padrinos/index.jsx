import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondopa.png";

const BackG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 22rem;
    background: url(${fondo});
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
`

const Padrinos = () => {
    return (
        <>
            <BackG>
                <Titulo>Padrinos</Titulo>
            </BackG>
        </>
    )
}

export default Padrinos