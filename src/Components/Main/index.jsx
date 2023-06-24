import React from "react";
import styled from "styled-components";
import Portada from "./Portada";
import Presentacion from "./Presentacion";

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
        </BoxMain>
    )
}

export default Main