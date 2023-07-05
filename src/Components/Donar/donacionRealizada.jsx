import React from 'react';
import styled from 'styled-components';


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
  margin-bottom: 1rem;
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


export default function DonacionRealizada() {
    return (
          <>
            <Titulo>¡AGRADECEMOS MUCHO TU DONACIÓN!</Titulo>
            <Parrafo>Tu apoyo como padrino marcará la diferencia en la vida de los animales rescatados y en la conservación de nuestro valioso patrimonio natural. Al unirte a nuestra campaña, te convertirás en parte esencial de nuestro equipo de rescate y en un defensor activo de la biodiversidad.</Parrafo>
            <Parrafo>Tu compromiso como padrino no solo impactará en la vida de los animales rescatados, sino también en la transformación social de niños y niñas en situación de vulnerabilidad. Serás parte de nuestra misión de brindarles oportunidades, educación y un entorno seguro que les permita crecer y desarrollarse plenamente.</Parrafo>
            <Parrafo1>Gracias por tu generosidad y por ser un aliado en nuestra lucha por un mundo más justo y equitativo. Juntos, podemos hacerlo posible.</Parrafo1>
            <Parrafo1>GRANJA LOS PIBES</Parrafo1>
          </>
    );
  }
  
  
  
  