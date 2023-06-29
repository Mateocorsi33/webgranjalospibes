import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 4rem 0;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border-color: #D6D582;
  width: 80%;
  height: 2rem;
`;

const Button = styled.button`
    margin: 2.5rem 2rem;
    background-color: #F48020;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    width: 19rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    font-family: Manrope;
    letter-spacing: 2.56px;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        transition: .3s;
        opacity: 70%;
    }

    @media (max-width: 800px) {
        width: 90%;
    }
`;

function Donar() {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [donationType, setDonationType] = React.useState('one-time');
  const [email, setEmail] = React.useState('');
  const [cardNumber, setCardNumber] = React.useState('');
  const [cardExpirationDate, setCardExpirationDate] = React.useState('');
  const [cardSecurityCode, setCardSecurityCode] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      donationType,
      email,
      cardNumber,
      cardExpirationDate,
      cardSecurityCode,
    });
    // Aquí puedes enviar los datos del formulario a tu servidor
    // usando fetch o axios.
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Nombre"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Apellido"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
      />
      <label>
        <input
          type="radio"
          name="donation-type"
          value="one-time"
          checked={donationType === 'one-time'}
          onChange={(event) => setDonationType(event.target.value)}
        />
        Donación única vez
      </label>
      <label>
        <input
          type="radio"
          name="donation-type"
          value="monthly"
          checked={donationType === 'monthly'}
          onChange={(event) => setDonationType(event.target.value)}
        />
        Donación mensual
      </label>
      <Input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Número de tarjeta"
        value={cardNumber}
        onChange={(event) => setCardNumber(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Fecha de vencimiento (MM/AA)"
        value={cardExpirationDate}
        onChange={(event) => setCardExpirationDate(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Código de seguridad (CVV)"
        value={cardSecurityCode}
        onChange={(event) => setCardSecurityCode(event.target.value)}
      />
      <Button type="submit">Donar</Button>
    </Form>
  );
}

export default Donar;
