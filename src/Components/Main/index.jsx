import React from "react";
import styled from "styled-components";
import Portada from "./Portada";
import Presentacion from "./Presentacion";
import NuestraMision from "./NuestraMision";
// import Guia from "./GuiaSierras";
// import Imagenes from "./Imagenes";

const BoxMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Main = () => {
    return(
        <BoxMain>
            <Portada/>
            <Presentacion/>
            {/* <Guia/> */}
            <NuestraMision/>
            {/* <Imagenes/> */}
        </BoxMain>
    )
}

export default Main