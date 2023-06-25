import React from "react";
import styled from "styled-components";
import Portada from "./Portada";
import Presentacion from "./Presentacion";
import NuestraMision from "./NuestraMision";
import divImg from "../../assest/imgdivvv.png";


const BoxMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const DivImg = styled.img`
    width: 80%;
    margin: 4rem 0 8rem 0;
`


const Main = () => {
    return(
        <BoxMain>
            <Portada/>
            <Presentacion/>
            <DivImg src={divImg}/>
            <NuestraMision/>
        </BoxMain>
    )
}

export default Main