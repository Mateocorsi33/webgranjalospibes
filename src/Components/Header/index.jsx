import React from "react";
import styled from "styled-components";
import Logo from "../Header/Logo/Index";
import BarraNav from "./BarraNav/Index";

const DivHeader = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const Header = () => {
    return(
        <DivHeader>
            <Logo/>
            <BarraNav/>
        </DivHeader>
    )
}

export default Header