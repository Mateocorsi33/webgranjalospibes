import React from "react";
import styled from "styled-components";
import facebook from "../../assest/w-facebook.png";
import instagram from "../../assest/w-instagram.png";
import youtube from "../../assest/w-youtube.png";
import whatsapp from "../../assest/w-whatsapp.png";
import email from "../../assest/w-email.png";



const DivRedes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:3rem;
    padding: 3rem 0 6rem 0;

    @media (max-width: 800px) {
        margin: 1rem 0 3rem 0;
        gap: 1rem;
        padding: 0;
    }
`

const LinkRedes = styled.a`
     &:hover {
        transform: scale(1.1);
    }
    
    @media (max-width: 800px) {
                
    }
`

const ImgRedes = styled.img`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    &:hover{
        transition: .3s;
        opacity: 70%;
    }
    @media (max-width: 800px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`


export default function Redes() {
    return(
        <DivRedes>
            <LinkRedes href='https://www.facebook.com/GranjaLosPibes/'><ImgRedes src={facebook}/></LinkRedes>
            <LinkRedes href='https://instagram.com/granja_los_pibes/'><ImgRedes src={instagram}/></LinkRedes>
            <LinkRedes href='https://www.youtube.com/@granjalospibes/'><ImgRedes src={youtube}/></LinkRedes>
            <LinkRedes href="https://wa.me/message/MGKRGV2LBP5CK1"><ImgRedes src={whatsapp}/></LinkRedes>
            <LinkRedes href="mailto: granjalospibesong@gmail.com"><ImgRedes src={email}/></LinkRedes>
        </DivRedes>
    )
}