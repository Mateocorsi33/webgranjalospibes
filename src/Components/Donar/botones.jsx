import React, { useState } from 'react';
import styled from 'styled-components';

const DivBtn = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width:90%;
    margin: 1rem 0;
    gap: 1rem;
    padding: 1rem 0;

    @media (max-width: 800px) {
        flex-direction:column;
        width: auto;
        margin: 0;
    }
`

const Button = styled.button`
    border: 2px solid #D6D582;
    margin: 0 1em;
    padding: 0.25em 1em;
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
    }
  }

    @media (max-width: 800px) {
        width: 60%;
    }
`;

const Input = styled.input`
    border: 2px solid #D6D582;
    margin: 0 1em;
    padding: 0.25em 1em;
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

    @media (max-width: 800px) {
        width: 60%;
    }
`;

export default function SelectableButtons() {

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
    <DivBtn>
      <Button
        variant={selectedButton === 'button1' ? 'contained' : 'outlined'}
        color="primary"
        value="button1"
        onClick={handleButtonClick}
      >
        $ 500,00
      </Button>
      <Button
        variant={selectedButton === 'button2' ? 'contained' : 'outlined'}
        color="primary"
        value="button2"
        onClick={handleButtonClick}
      >
        $ 1000,00
      </Button>
      <Button
        variant={selectedButton === 'button3' ? 'contained' : 'outlined'}
        color="primary"
        value="button3"
        onClick={handleButtonClick}
      >
        $ 2000,00
      </Button>
      <label htmlFor="amount"></label>
      <Input
        placeholder='Otro monto'
        type="number"
        id="amount"
        name="amount"
        value={amount}
        onChange={handleAmountChange}
      />
    </DivBtn>
  );
}
