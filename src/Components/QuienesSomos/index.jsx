import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondoqs.png";

const ImgBack = styled.img`
    width: 100%;
`

const QuienesSomos = () => {
    return (
        <>
            <ImgBack src={fondo} />
        </>
    )
}

export default QuienesSomos