import React from "react";
import styled from "styled-components";
import Logo from "../Header/Logo/Index";
import BarraNav from "./BarraNav/Index";

const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
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