import React from "react"; 
import styled from "styled-components";
import fotofooter from "../../assest/footer.png";

const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
`

const ImgFooter = styled.img`
    width: 100%;
    margin-top: 14rem;
    margin-bottom: 0;
    vertical-align: middle;
`

const DivImg = styled.div`
    margin-bottom: 0;
`

const DivF = styled.div`
    display: flex;
    margin: 0;
    width: 100%;
    height: 20rem;
    background-color: #42534E;
`

const Footer = () => {
    return(
        <DivFooter>
            <DivImg><ImgFooter src={fotofooter}/></DivImg>
            <DivF>
            </DivF>
        </DivFooter>
    )
}

export default Footer