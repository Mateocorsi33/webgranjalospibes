import React from 'react';
import styled from 'styled-components';
import imagenlogo from "../../assest/logoglp.png";
import fotoform from "../../assest/fotoform.png";
import fondo from "../../assest/fondo.png";
// import SelectableButtons from "../Donar/botones.jsx";
import Opciones from './Opciones';
import whatsapp from "../../assest/waboton.png";


const FondoForm = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${fondo});
  padding: 6% 0%;

  @media (max-width: 800px) {
        width: auto;
        padding: 2rem .5rem 8rem .5rem;
    }
`

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 74%;
  height: auto;
  margin: 0 13%;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 800px) {
        width: 100%;
        gap: 1rem;
        margin: 0;
    }
`

const Encabezado = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-start;
  gap: .8rem;
  width: 100%;
  height: 98px;
  border-radius: 10px 10px 0px 0px;
  background: #ffffff;

  @media (max-width: 800px) {
        justify-content: center;
        height: auto;
        padding-top: 1rem;
    }
`

const ImgLogo = styled.img`
    width: 4rem;
    height: 4rem;
    margin-left: 2rem;
    border-radius: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);

    @media (max-width: 800px) {
        width: 3rem;
        height: auto;
    }
`

const TextLogo = styled.h2`
    display: flex;
    flex-direction: column;
    width: 5rem;
    font-weight: 600;
    margin:0;
    font-size: 1rem;
    color: #464646;

    @media (max-width: 800px) {
        width: 5rem;
        font-size: .9rem;
    }
`

const ImgForm = styled.img`
  width: 100%;
  height: 18rem;

  @media (max-width: 800px) {
        width: 100%;
        height: 10rem;
    }
`

const TamañoCuerpo = styled.div`
  display:flex;
  flex-direction:column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 0 4rem 0;

  @media (max-width: 800px) {
      padding: 1rem 0 4rem 0;
    }
`

const Titulo = styled.h1`
    color: #D6D582;
    text-align: center;
    margin-top: 1.5rem;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    letter-spacing: 0.9px;
    animation: tada;
    animation-duration: 2s;

    @media (max-width: 800px) {
        display: flex;
        font-size: 2rem;
        text-align: center;
        align-items: center;
        font-weight: 800;
        padding: 0 1rem 0 1rem;
        margin: 0;
    }
`

const Parrafo1 = styled.h2`
  color: #464646;
  text-align: center;
  width: 80%;
  font-size: .9rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.6px;

  @media (max-width: 800px) {
        width: 90%;
        font-size: .8rem;
        margin: 0;
    }
`

const Parrafo = styled.h3`
  color: #464646;
  text-align: center;
  width: 80%;
  margin: 0;
  font-size: .8rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.54px;

  @media (max-width: 800px) {
        width: 90%;
        font-size: .8rem;
        margin: 0 0 1rem 0;
    }
`

const DivCuanto = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  gap: 30%;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #D6D582;
  margin: 2rem 0 3rem 0; 

  @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content:center;
        margin: 1.5rem 0 1.5rem 0; 
    }
`

const Letrachica = styled.h3`
  color: #464646;
  width: fit-content;
  margin: 0;
  font-size: .9rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  @media (max-width: 800px) {
       text-align: center;
       font-size: .7rem
    }
`

const Recomendaciones = styled.div`
  display: none;

  @media (max-width: 800px) {
      display: flex;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      font-size: .7rem
    }
`

const Whatsapp = styled.button`
  display: flex; 
  align-items: center;
  gap: 1rem;
  border: none;
  padding: .9rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: #67C15E;
  margin: 1rem 0 2rem 0;
  cursor: pointer;

  &:hover {
        transition: .3s;
        opacity: 90%;
        transform: scale(1.1);
    }

    @media (max-width: 800px) {
        
    }
`

const ImgWA = styled.img`
  display: flex;
  width: 2rem;
  height: 2rem;
`
const Link = styled.a`
  display: flex;
  text-decoration: none;
  &:hover {
        text-decoration: none;
    }
`


function Donar() {

  return (
    <FondoForm>
      <DivForm>
        <Encabezado id="encabezado">
          <ImgLogo src={imagenlogo} alt="Logo"/>
          <TextLogo>GRANJA LOS PIBES</TextLogo>
        </Encabezado>
        <ImgForm src={fotoform}/>
        <TamañoCuerpo>
            <Titulo>ÚNETE A GRANJA LOS PIBES</Titulo>
            <DivCuanto>
              <Letrachica><strong>¿CUÁNTO QUERÉS DONAR?</strong></Letrachica>
              <Letrachica>Montos expresados en Pesos Argentinos (ARS $)</Letrachica>
            </DivCuanto>
            <Opciones/>
            <Parrafo1>SI TENÉS INCOVENIENTES PARA REALIZAR LA TRANSACCIÓN, COMUNÍCATE CON NOSOTROS POR WHATSAPP, PARA PODER RESOLVERLO.</Parrafo1>
            <Link href="https://wa.me/message/MGKRGV2LBP5CK1"><Whatsapp><ImgWA src={whatsapp}/>Contactanos</Whatsapp></Link>
            <Parrafo>SE PARTE DEL CAMBIO POSITIVO EN LA VIDA DE LOS NIÑOS Y LA CONSERVACIÓN DE LA FAUNA SILVESTRE. TU APOYO ES FUNDAMENTAL PARA LOGRAR UN FUTURO MÁS JUSTO Y SOSTENIBLE.</Parrafo>
            <Parrafo1>¡ÚNETE COMO PADRINO HOY MISMO Y SÉ PARTE DEL CAMBIO!</Parrafo1>
        </TamañoCuerpo>
      </DivForm>
    </FondoForm>
  );
}

export default Donar;


