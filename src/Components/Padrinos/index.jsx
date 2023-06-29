import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondopa.png";


const ImgBack = styled.img`
    width: 100%;
`

const Padrinos = () => {
    return (
        <>
            <ImgBack src={fondo} />
        </>
    )
}

export default Padrinos