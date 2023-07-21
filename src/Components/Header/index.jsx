import React from "react";
import styled from "styled-components";
import Logo from "../Header/Logo/Index";
import BarraNav from "./BarraNav/Index";

const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.1);


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