import styled from 'styled-components';
import React from 'react';

    const RadioInput = styled.input.attrs({ type: 'radio' })`
        margin: 0 8px;
        width: 1.5rem;
        height: 1.5rem;
        @media (max-width: 800px) {
            width: fit-content;
            height: fit-content;
            justify-content: center;
        }
    `;

    const RadioLabel = styled.label`
        display: flex;
        align-items: center;
        color: #000;
        text-align: center;
        font-size: 20px;
        font-family: Manrope;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.6px;
        margin: 0;
        @media (max-width: 800px) {
            width: fit-content;
            justify-content: center;
            font-weight: 600;
            font-size: 1rem;
        }
    `;

    const RadioContainer = styled.div`
        display: flex;
        align-items: center;
        width: fit-content;
        @media (max-width: 800px) {
            flex-direction:column;
        }
    `;

const DivCheck = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin: 1rem;
gap: 4rem;
@media (max-width: 800px) {
            flex-direction:column;
            width: 90%;
            gap:1rem;
            margin-top:2rem;
            margin-bottom: 0;
        }
`

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    margin: 0 8px;
    width: 1rem;
    height: 1rem;
`;

const CheckboxLabel = styled.label`
display: flex;
align-items: center;
color: #464646;
text-align: center;
font-size: 1rem;
font-family: Manrope;
font-style: normal;
font-weight: 400;
line-height: normal;
margin: 0;
`;

const CheckboxContainer = styled.div`
display: flex;
align-items: center;
width: fit-content;
@media (max-width: 800px) {
            flex-direction:column;
            width: 90%;
            margin: 0;
            gap:.5rem;
            margin-bottom: 1rem;
        }
`;


    const StyledRadio = ({ className, children, ...props }) => (
        <RadioContainer className={className}>
        <RadioInput id={props.id} {...props} />
        <RadioLabel htmlFor={props.id}>{children}</RadioLabel>
        </RadioContainer>
        );


    const StyledCheckbox = ({ className, children, ...props }) => (
    <CheckboxContainer className={className}>
        <Checkbox id={props.id} {...props} />
        <CheckboxLabel htmlFor={props.id}>{children}</CheckboxLabel>
    </CheckboxContainer>
    );

    const DonarMensualmente = () => (
        <StyledRadio id="donar-mensualmente" name="donacion" value="mensualmente">
          Donar mensualmente
        </StyledRadio>
      );
      
      const DonarUnicaVez = () => (
        <StyledRadio id="donar-unica-vez" name="donacion" value="unica-vez">
          Donar una vez
        </StyledRadio>
      );

    const AumentoDonacion = () => (
    <StyledCheckbox id="aumento-donacion" name="aumento-donacion" value="aumento-donacion">
        Acepto aumentar la donación un 30% cada 6 meses
    </StyledCheckbox>
    );

    export default function App() {
    return (
        <>
            <DivCheck>
                <DonarUnicaVez />
                <DonarMensualmente />
            </DivCheck>
            <AumentoDonacion />
        </>
    );
    }

