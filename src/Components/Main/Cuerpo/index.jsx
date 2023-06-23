import React from "react";
import styled from "styled-components";
import gif1 from "../../../assest/emergencia.gif";
import gif2 from "../../../assest/estetoscopio.gif";

const BoxCuerpo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 3rem;
    width: 100%;
    height: auto;
    background-color: #ffffff;
`

const DivContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: fit-content;
`

// const DivContent2 = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     width: 100%;
//     height: fit-content;
// `

const DivText = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    border-top: 4px solid #D6D582;
    width: 20%;
    gap: 3.5rem;
    padding-bottom: 2rem;
    margin-left: 7rem;
`

const Titu = styled.h1`
    display: flex;
    width: 40rem;
    height: 187px;
    flex-direction: column;
    color: #464646;
    font-size: 40px;
    font-weight: 400;
    font-family: Manrope;
    line-height: 42px;
    letter-spacing: 2px;
`

const Parra = styled.p`
    display: flex;
    width: 40rem;
    flex-direction: column;
    margin: 0;
    color: #586E66;
    font-size: 20px;
    font-family: Manrope;
    line-height: 27px;
    letter-spacing: 0.7px;
`

const Gif = styled.img`
    width: 28rem;
    height: 28rem; 
    padding-right: 4.5rem;
`

const Cuerpo = () => {
    return (
        <BoxCuerpo>

            <DivContent>
                <DivText>
                    <Titu>GRANJA LOS PIBES ES UN FARO DE ESPERANZA Y ACCIÓN EN LA BÚSQUEDA DE CONCIENTIZAR SOBRE LOS CUIDADOS Y CONSERVACIÓN  DE LA FLORA Y FAUNA SILVESTRE.</Titu>
                    <Parra> 
                    El centro de rescate Granja los pibes, ha asumido la importante tarea de concientizar a la comunidad sobre los cuidados y conservación de la flora y fauna de nuestra region. A través de su incansable labor, el centro busca preservar la riqueza y la biodiversidad que nos rodea.
                    Su enfoque principal radica en la conservación de la flora y fauna autóctonas, consideradas tesoros vivos de nuestra región.
                    </Parra>
                </DivText>
                <Gif src={gif1}/>
            </DivContent>

            <DivContent>
                <DivText>
                    <Titu>Granja los Pibes: Un faro de esperanza y acción en la búsqueda de CONCIENTIZAR SOBRE LOS CUIDADOS Y CONSERVACIÓN de la flora y fauna silvestre</Titu>
                    <Parra> 
                    El centro de rescate Granja los pibes, ha asumido la importante tarea de concientizar a la comunidad sobre los cuidados y conservación de la flora y fauna de nuestra region. A través de su incansable labor, el centro busca preservar la riqueza y la biodiversidad que nos rodea.
                    Su enfoque principal radica en la conservación de la flora y fauna autóctonas, consideradas tesoros vivos de nuestra región.
                    </Parra>
                </DivText>
                <Gif src={gif2}/>
            </DivContent>
            
        </BoxCuerpo>
    )
}

export default Cuerpo