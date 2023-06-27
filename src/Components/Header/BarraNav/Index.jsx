import React from "react";
import styled from "styled-components";

const BoxBarraNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    width: 85%;
    font-family: Manrope;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: #464646;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`

const DivBarra1 = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 4%;
`
const DivBarra2 = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-right: 4%;
`
const Link = styled.a`
    cursor: pointer;
`

const Marcador = styled.div`
    &:hover{
        border-bottom: 2px solid #D6D582;
    }
`


const Boton = styled.button`
    background-color: #D6D582;
    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    width: 8rem;
    height: 2rem;
    border: none;
    font-family: Manrope;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: #464646;
    cursor: pointer;
    &:hover {
        transition: .3s;
        background-color: #D9B36F;
        color: #ffffff;
    }
`


const BarraNav = () => {
    return(
        <BoxBarraNav>
                <DivBarra1>
                    <Link><Marcador>INICIO</Marcador></Link>
                    <Link><Marcador>QUIÉNES SOMOS</Marcador></Link>
                    <Link><Marcador>CONTACTO</Marcador></Link>
                </DivBarra1>
                <DivBarra2>
                    <Link><Marcador>PADRINOS</Marcador></Link>
                    <Link><Boton>DONAR</Boton></Link>
                </DivBarra2>
        </BoxBarraNav>
    )
}

export default BarraNav