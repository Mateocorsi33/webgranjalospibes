import React from "react";
import styled from "styled-components";
import divfoto from "../../../assest/divisoruno.png";


const DivImg = styled.img`
    display: flex;
    width: 100%;
    margin: 1rem 0 8rem;
`

const Divisor = () => {
    return(
        <DivImg src={divfoto}/>
    )
}

export default Divisor