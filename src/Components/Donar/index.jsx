import React from 'react';
import styled from 'styled-components';
import imagenlogo from "../../assest/logoglp.png";
import fotoform from "../../assest/fotoform.png";

const FondoForm = styled.div`
  width: 100%;
  height: auto;
  background-color: #F5F5F5;
  padding: 6% 15%;
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
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin: 0;
`;

const Input = styled.input`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width:18rem;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0070f3;
  color: #fff;
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
          <h2>Información Personal</h2>
          <Input type="text" placeholder="Nombre" />
          <Input type="text" placeholder="Apellido" />
          <Input type="email" placeholder="Correo Electrónico" />
          <Input type="tel" placeholder="Teléfono" />
          <Input type="text" placeholder="País" />
          <Input type="text" placeholder="Provincia/Estado" />
          <Input type="text" placeholder="Ciudad" />
          <Input type="text" placeholder="Dirección" />
          <Input type="text" placeholder="Código Postal" />

          <h2>Información de Pago</h2>
          <Input type="text" placeholder="Número de Tarjeta" />
          <Input type="text" placeholder="Fecha de Expiración (MM/AA)" />
          <Input type="text" placeholder="Código de Seguridad (CVV/CVC)" />
          <Input type="text" placeholder="Número de Documento" />

          <Button>Donar</Button>
        </Form>
      </DivForm>
    </FondoForm>
  );
}

export default Donar;


