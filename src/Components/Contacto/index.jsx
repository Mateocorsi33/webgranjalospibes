import React from "react";
import styled from "styled-components";
import fondo from "../../assest/fondoc.png";


const ImgBack = styled.img`
    width: 100%;
`

const Contacto = () => {
    return (
        <>
            <ImgBack src={fondo} />
        </>
    )
}

export default Contacto