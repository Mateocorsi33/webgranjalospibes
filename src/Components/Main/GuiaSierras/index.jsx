import React from "react";
import styled from "styled-components";


const DivGuia = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50rem;
    padding: 5% 15%;
    background-color: #525445;
`

const BoxGuia = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50rem;
    margin: 5%;
    background-color: #000;
    opacity: 15%;
`

const Guia = () => {
    return(
        <DivGuia>
            <BoxGuia>

            </BoxGuia>
        </DivGuia>
    )
}

export default Guia