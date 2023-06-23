import React from "react";
import styled from "styled-components";

const BoxBarraNav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #647F76;
    width: 85%;
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    color: #ffffff;
`

const DivBarra1 = styled.div`
    display: flex;
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


const Boton = styled.button`
    background-color: #D6D582;
    border-radius: 20px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    width: 6rem;
    height: 2rem;
    border: none;
    font-weight: 600;
    color: #586E66;
    cursor: pointer;
    &:hover {
        transition: .3s;
        background-color: #D9B36F;
    }
`


const BarraNav = () => {
    return(
        <BoxBarraNav>
                <DivBarra1>
                    <Link>INICIO</Link>
                    <Link>QUIENES SOMOS</Link>
                    <Link>CONTACTO</Link>
                </DivBarra1>
                <DivBarra2>
                    <Link>PADRINOS</Link>
                    <Link><Boton>DONAR</Boton></Link>
                </DivBarra2>
        </BoxBarraNav>
    )
}

export default BarraNav