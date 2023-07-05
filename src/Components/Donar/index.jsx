import React from 'react';
import styled from 'styled-components';
import imagenlogo from "../../assest/logoglp.png";
import fotoform from "../../assest/fotoform.png";
import fondo from "../../assest/fondo.png";
import SelectableButtons from "../Donar/botones.jsx";
import StyledCheckbox from "../Donar/verificaciones.jsx";
import visa from "../../assest/206684_visa_method_card_payment_icon.png";
import master from "../../assest/70593_mastercard_curved_icon.png";
import paypal from "../../assest/206675_paypal_method_payment_icon.png";


const FondoForm = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${fondo});
  padding: 6% 0%;

  @media (max-width: 800px) {
        width: auto;
        padding: 1.5rem 1rem 4rem 1rem;
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
  height: 20rem;

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
  padding: 1rem;

  @media (max-width: 800px) {
        padding: 0;
    }
`

const Titulo = styled.h1`
    color: #D6D582;
    text-align: center;
    margin-top: 1.5rem;
    font-size: 2.5rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.9px;

    @media (max-width: 800px) {
        display: flex;
        font-size: 2rem;
        text-align: center;
        align-items: center;
        font-weight: 600;
        padding: 0 1rem 0 1rem;
        margin: 0;
    }
`

const Parrafo1 = styled.h2`
  color: #464646;
  text-align: center;
  width: 80%;
  font-size: 1.2rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.6px;

  @media (max-width: 800px) {
        width: 90%;
        font-size: 1rem;
        margin: 0;
    }
`

const Parrafo = styled.h3`
  color: #464646;
  text-align: center;
  width: 80%;
  margin: 0;
  font-size: 1rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;

  @media (max-width: 800px) {
        width: 90%;
        font-size: .9rem;
        margin: 0;
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
  
  @media (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content:center;
    }
`

const Letrachica = styled.h3`
  color: #464646;
  width: fit-content;
  margin: 0;
  font-size: .9rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;
  @media (max-width: 800px) {
       text-align: center;
       font-size: .8rem
    }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 0;
  @media (max-width: 800px) {
        width: 90%;
    }
`;

const H2 = styled.h2`
  color: #000;
  text-align: center;
  font-size: 1rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.42px;
`

const DivIP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  flex-wrap: wrap;
  height: auto;
  gap: 0 1rem;
`

const DivTarjetas = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  margin: 1rem;
  gap: 2rem;
  padding: 0.5rem;
  border-radius: 10px;
  border: 1px solid #4F8A7E;
  background: #FFF;
`

const ImgTarj = styled.img`
  width: 3rem;
  height: 2.5rem;
  border-radius: 10px;
`

const Input = styled.input`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 40%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #4F8A7E;
  background: #FFF;

  @media (max-width: 800px) {
        width: 100%;
        font-size: 1rem;
    }
`;

const Button = styled.button`
  margin: 2rem 0 2rem 0;
  width: 14rem;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: #F58220;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
    &:hover {
        transition: .3s;
        opacity: 70%;
    }

  @media (max-width: 800px) {
        width: 10rem;
        font-size: 1rem;
    }
`;



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
            <Titulo>Dona a Granja Los Pibes</Titulo>
            <Parrafo1>Cada donación nos permite continuar nuestro trabajo y garantizar un futuro más prometedor para la fauna silvestre y los niños.</Parrafo1>
            <Parrafo>Se parte del cambio positivo en la vida de los niños y la conservación de la fauna silvestre. Tu apoyo es fundamental para lograr un futuro más justo y sostenible.</Parrafo>
            <Parrafo1>¡Únete como padrino hoy mismo y sé parte del cambio!</Parrafo1>
            <DivCuanto>
              <Letrachica><strong>¿CUÁNTO QUERÉS DONAR?</strong></Letrachica>
              <Letrachica>Los montos están expresados en Pesos Argentinos (ARS $)</Letrachica>
            </DivCuanto>
            <SelectableButtons/>
            <StyledCheckbox/>
            <Form>
              <H2>Información Personal</H2>
              <DivIP>
                <Input type="text" placeholder="Nombre" />
                <Input type="text" placeholder="Apellido" />
                <Input type="email" placeholder="Correo Electrónico" />
                <Input type="tel" placeholder="Teléfono" />
                <Input type="text" placeholder="País" />
                <Input type="text" placeholder="Provincia/Estado" />
                <Input type="text" placeholder="Ciudad" />
                <Input type="text" placeholder="Dirección" />
                <Input type="text" placeholder="Código Postal" />
              </DivIP>
              <H2>Información de Pago</H2>
              <DivTarjetas>
                <ImgTarj src={visa}/>
                <ImgTarj src={master}/>
                <ImgTarj src={paypal}/>
              </DivTarjetas>
              <DivIP>
                <Input type="text" placeholder="Número de Tarjeta" />
                <Input type="text" placeholder="Fecha de Expiración (MM/AA)" />
                <Input type="text" placeholder="Código de Seguridad (CVV/CVC)" />
                <Input type="text" placeholder="Número de Documento" />
              </DivIP>
              <Button>Donar</Button>
            </Form>
        </TamañoCuerpo>
      </DivForm>
    </FondoForm>
  );
}

export default Donar;


