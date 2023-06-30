import React from 'react';
import styled from 'styled-components';
import imagenlogo from "../../assest/logoglp.png";
import fotoform from "../../assest/fotoform.png";

const FondoForm = styled.div`
  width: auto;
  height: auto;
  background-color: #F5F5F5;
  padding: 6% 15%;

  @media (max-width: 800px) {
        padding: 1rem;
    }
`

const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: auto;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
        width: 100%;
        margin: 0;
    }
`

const Encabezado = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  width: 100%;
  height: 98px;
  border-radius: 10px 10px 0px 0px;
  background: #D6D582;

  @media (max-width: 800px) {
        height: 4rem;
    }
`

const ImgLogo = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.6);

    @media (max-width: 800px) {
        margin-left: 1rem;
    }
`

const TextLogo = styled.h2`
    display: flex;
    flex-direction: column;
    width: 5rem;
    font-weight: 500;
    margin:0;
    font-size: 1rem;
    color: #ffffff;
`

const ImgForm = styled.img`
  width: 100%;
  height: 20rem;

  @media (max-width: 800px) {
        width: 100%;
        height: 10rem;
    }
`

const Titulo = styled.h1`
    color: #D6D582;
    text-align: center;
    margin-top: 2rem;
    font-size: 2rem;
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
        font-weight: 500;
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
    }
`

const Parrafo = styled.h3`
  color: #464646;
  text-align: center;
  width: 80%;
  font-size: 1rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.54px;

  @media (max-width: 800px) {
        width: 90%;
    }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: 0;
  @media (max-width: 800px) {
        width: 90%;
    }
`;

const H2 = styled.h2`
  color: #000;
  font-size: 1.5rem;
  font-family: Manrope;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.42px;
`

const DivIP = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  height: auto;
  
`

const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  width:19rem;
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

  @media (max-width: 800px) {
        width: 10rem;
        font-size: 1rem;
    }
`;

function Donar() {
  return (
    <FondoForm>
      <DivForm>
        <Encabezado>
          <ImgLogo src={imagenlogo} alt="Logo"/>
          <TextLogo>GRANJA LOS PIBES</TextLogo>
        </Encabezado>
        <ImgForm src={fotoform}/>
        <Titulo>Dona hoy a Granja Los Pibes</Titulo>
        <Parrafo1>Cada donación nos permite continuar nuestro trabajo y garantizar un futuro más prometedor para la fauna silvestre y los niños.</Parrafo1>
        <Parrafo>Únete a nuestra misión y se parte del cambio positivo en la vida de los niños y la conservación de la fauna silvestre. Tu apoyo es fundamental para lograr un futuro más justo y sostenible. ¡Juntos podemos marcar la diferencia!</Parrafo>
        <Parrafo1>¡Únete como padrino hoy mismo y sé parte del cambio!</Parrafo1>
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
          <DivIP>
            <Input type="text" placeholder="Número de Tarjeta" />
            <Input type="text" placeholder="Fecha de Expiración (MM/AA)" />
            <Input type="text" placeholder="Código de Seguridad (CVV/CVC)" />
            <Input type="text" placeholder="Número de Documento" />
          </DivIP>
          <Button>Donar</Button>
        </Form>
      </DivForm>
    </FondoForm>
  );
}

export default Donar;


