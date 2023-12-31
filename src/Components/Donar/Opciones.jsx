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
  color: #464646;
  text-align: center;
  width: 80%;
  font-size: 1.1rem;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  letter-spacing: 0.6px;

  @media (max-width: 800px) {
        width: 90%;
        font-size: .8rem;
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
    border-bottom: 1px solid #9FB23B;

    @media (max-width: 800px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 90%;
        gap: 1rem;
        padding: 1rem 0 2rem 0;
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
    border-bottom: 1px solid #9FB23B;

    @media (max-width: 800px) {
        flex-direction: row;
        flex-wrap: wrap;
        width: 90%;
        padding: 0 0 4rem 0;
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
    border: 2px solid #9FB23B;
    margin: 0 1em;
    padding: 1.2em 1.7em;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #000;
    text-align: center;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.6px;
    cursor: pointer;

    && {
    background-color: ${(props) =>
      props.variant === 'contained' ? '#9FB23B' : '#ffffff'};
    color: ${(props) => (props.variant === 'contained' ? '#ffffff' : '#464646')};
    &:hover {
      background-color: ${(props) =>
        props.variant === 'contained' ? '#9FB23B' : '#ffffff'};
      color: ${(props) =>
        props.variant === 'contained' ? '#ffffff' : '#9FB23B'};
        transform: scale(1.1);
    }
  }

    @media (max-width: 800px) {
        width:100%;
        font-size: .9rem;
        padding: .8rem 1rem;
        letter-spacing: 0px;
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
        <Parrafo1>Selecciona uno de los links de pago para <strong>DONAR POR UNICA VEZ</strong> y termina de realizar tu donación de manera segura a través de <strong>MERCADO PAGO</strong>.</Parrafo1>
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
        <Parrafo1>Selecciona uno de los links de pago para <strong>DONAR MENSUALMENTE COMO PADRINO</strong> y termina de realizar tu donación de manera segura a través de <strong>MERCADO PAGO</strong>.</Parrafo1>
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