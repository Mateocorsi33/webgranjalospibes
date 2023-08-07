import React, { useState } from 'react';
import styled from 'styled-components';

const DivUnico = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    gap: 2rem;
    padding: 1rem 0 4rem 0;

    @media (max-width: 800px) {
        width: auto;
        padding: 0;
    }
`
const DivMensual = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    gap: 2rem;
    padding: 1rem 0 4rem 0;

    @media (max-width: 800px) {
        width: auto;
        padding: 0;
    }
`


const Parrafo1 = styled.h2`
  color: #557153;
  text-align: center;
  width: 80%;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  letter-spacing: 0.6px;

  @media (max-width: 800px) {
        width: 90%;
        font-size: 1rem;
        margin: 0;
    }
`

const DivBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: auto;
    margin: 1rem 0;
    gap: 2rem;
    padding: 1rem 0 4rem 0;
    border-bottom: 1px solid #D6D582;

    @media (max-width: 800px) {
        flex-direction:column;
        align-items: center;
        justify-content: center;
        width: 75%;
        gap: 2rem;
    }
`

const DivBtn2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: auto;
    margin: 1rem 0;
    gap: 2rem;
    padding: 1rem 0 4rem 0;
    border-bottom: 1px solid #D6D582;

    @media (max-width: 800px) {
        flex-direction:column;
        width: 60%;
        gap: 2rem;
    }
`

const Link = styled.a`
    display: flex;
    text-decoration: none;
    margin: 0;
    padding: 0;
    &:hover{
        text-decoration: none;
    }

`


const Button = styled.button`
    border: 2px solid #D6D582;
    margin: 0 1em;
    padding: 1em 1.5em;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #000;
    text-align: center;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.6px;
    cursor: pointer;

    && {
    background-color: ${(props) =>
      props.variant === 'contained' ? '#D6D582' : '#ffffff'};
    color: ${(props) => (props.variant === 'contained' ? '#ffffff' : '#464646')};
    &:hover {
      background-color: ${(props) =>
        props.variant === 'contained' ? '#D6D582' : '#ffffff'};
      color: ${(props) =>
        props.variant === 'contained' ? '#ffffff' : '#000000'};
        transform: scale(1.1);
    }
  }

    @media (max-width: 800px) {
        width:100%;
    }
`;

export default function Opciones() {

    const [selectedButton, setSelectedButton] = useState('');
    const [amount, setAmount] = useState('');

    const handleButtonClick = (event) => {
      if (selectedButton === event.target.value) {
        setSelectedButton('');
      } else {
        setSelectedButton(event.target.value);
      }
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    

  return (
    <>
      <Parrafo1>Selecciona de qué manera quieres hacer tu donación. Puedes <strong>DONAR POR ÚNICA VEZ</strong> o <strong>CONVERTIRTE EN PADRINO</strong> donando mensualmente.</Parrafo1>
      <DivBtn>
        <Button
          variant={selectedButton === "button1" ? "contained" : "outlined"}
          color="primary"
          value="button1"
          onClick={handleButtonClick}
        >
          {" "}
          ÚNICA VEZ{" "}
        </Button>
        <Button
          variant={selectedButton === "button2" ? "contained" : "outlined"}
          color="primary"
          value="button2"
          onClick={handleButtonClick}
        >
          {" "}
          SER PADRINO{" "}
        </Button>
      </DivBtn>

      {selectedButton === "button1" && 
        <DivUnico>
        <Parrafo1>SELECCIONA UNO DE LOS LINKS DE PAGO PARA <strong>DONAR POR UNICA VEZ</strong> Y TERMINA DE REALIZAR TU DONACIÓN A TRAVÉS DE MERCADO PAGO.</Parrafo1>
        <DivBtn2>
          <Link href='http://mpago.la/2hqn9Bo'>
          <Button
            variant={selectedButton === 'button1' ? 'contained' : 'outlined'}
            color="primary"
            value="button1"
            onClick={handleButtonClick}
          >
            $ 500,00
          </Button>
          </Link>
          <Link href='http://mpago.la/2armr4H'>
          <Button
            variant={selectedButton === 'button2' ? 'contained' : 'outlined'}
            color="primary"
            value="button2"
            onClick={handleButtonClick}
          >
            $ 1000,00
          </Button>
          </Link>
          <Link href='http://mpago.la/1VVfhTQ'>
          <Button
            variant={selectedButton === 'button3' ? 'contained' : 'outlined'}
            color="primary"
            value="button3"
            onClick={handleButtonClick}
          >
            $ 2000,00
          </Button>
          </Link>
          <Link href='https://link.mercadopago.com.ar/granjalospibes'>
          <Button
            variant={selectedButton === 'button4' ? 'contained' : 'outlined'}
            color="primary"
            value="button4"
            onClick={handleButtonClick}
          >
            Definir monto
          </Button>
          </Link>
        </DivBtn2>
        </DivUnico>
      }
      {selectedButton === "button2" && 
      <DivMensual>
        <Parrafo1>SELECCIONA UNO DE LOS LINKS DE PAGO PARA <strong>DONAR MENSUALMENTE COMO PADRINO</strong> Y TERMINA DE REALIZAR TU DONACIÓN A TRAVÉS DE MERCADO PAGO.</Parrafo1>
        <DivBtn2>
          <Link href='https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808489c5b1700189cbb4017e0219'>
          <Button
            variant={selectedButton === 'button1' ? 'contained' : 'outlined'}
            color="primary"
            value="button1"
            onClick={handleButtonClick}
          >
            $ 500,00
          </Button>
          </Link>
          <Link href='https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808489c01bd80189cc89ea0b044a'>
          <Button
            variant={selectedButton === 'button2' ? 'contained' : 'outlined'}
            color="primary"
            value="button2"
            onClick={handleButtonClick}
          >
            $ 1000,00
          </Button>
          </Link>
          <Link href='https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c93808489c5b1700189cc8aca790275'>
          <Button
            variant={selectedButton === 'button3' ? 'contained' : 'outlined'}
            color="primary"
            value="button3"
            onClick={handleButtonClick}
          >
            $ 2000,00
          </Button>
          </Link>
        </DivBtn2>
      </DivMensual>
      }
    </>
  );
}