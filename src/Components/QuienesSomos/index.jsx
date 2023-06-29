import React from "react";
import styled from "styled-components";
import fondoM from "../../assest/fotoMovil.png";
import fondo from "../../assest/fondoqs.png";
import foto1 from "../../assest/foto.gif";
import foto2 from "../../assest/foto2.jpg";
import foto3 from "../../assest/imgdivvv.png";


const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const BackGM = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    background: url(${fondoM});

@media (max-width: 800px) {
    display: flex;
    background-size:100%;
    background-repeat:no-repeat;
    width:100%;
    height:16rem;
}
`

const BackG = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20rem;
    background: url(${fondo});

    @media (max-width: 800px) {
        display: none;
    }
`

const Titulo = styled.h1`
    color: #FFF;
    text-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);
    font-size: 5.2rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.02em;

    @media (max-width: 800px) {
        font-size: 2.5rem;
        text-align: center;
        font-weight: 600;
    }
`

const DivQS = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3rem 10rem;
    gap: 2rem;

    @media (max-width: 800px) {
        margin: 1.5rem 1rem;
        gap: 1rem;
    }
`

const Encabe = styled.h1`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #D6D582;
    text-shadow: 0px 4px 100px 0px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    padding-top: 2rem;
    border-top: 2px solid #D6D582;

    @media (max-width: 800px) {
        font-size: 2rem;
    }
`

const Parrafo = styled.p`
    display: flex;
    text-align: center;
    width: 100%;
    height: auto;
    flex-direction: column;
    color: #464646;
    font-size: 1.6rem;
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`

const Fotos = styled.img`
    width: 100%;
    height: auto;
    margin: 1rem 0;
`

const QuienesSomos = () => {
    return (
        <Div>
            <BackGM>
                    <Titulo>Quiénes Somos</Titulo>
            </BackGM>
            <BackG>
                <Titulo>Quiénes Somos</Titulo>
            </BackG>
            <DivQS>
                <Encabe>La Asociación Civil Casa del Niño en la Calle: Respuestas integrales para niños y familias en situación de vulnerabilidad.</Encabe>
                <Parrafo>La asociación trabaja desde hace más de 30 años para brindar respuestas a las necesidades de niños y familias en situación de vulnerabilidad y exclusión, priorizando la promoción y protección de los derechos del niño.</Parrafo>
                <Parrafo>A lo largo de su trayectoria, han atendido a más de 1000 niños en diferentes modalidades, como el Hogar Convivencial, Casa de los Niños y Centro de Desarrollo Infantil. Además, han generado mecanismos de transferencia que han impactado en las familias de los niños.</Parrafo>
                <Fotos src={foto1}/>
                <Encabe>Vínculo con el Centro de Rescate de Animales Silvestres:</Encabe>
                <Parrafo>Muchos de los niños que fueron atendidos por la asociación continúan trabajando en el lugar, desempeñándose como educadores, constructores, personal de mantenimiento y atención en el Centro de Rescate de Animales Silvestres.</Parrafo>
                <Parrafo>Actualmente, la asociación cuenta con una matrícula de 80 niños de 3 a 18 años, provenientes de los barrios periféricos de la ciudad. Los ejes pedagógicos de su trabajo incluyen la reorganización de la vida cotidiana y la formación integral de los niños, preparándolos para ser miembros activos en una sociedad laboral. Se busca resolver las necesidades inmediatas de manera organizada en tiempo y espacio, y proporcionar las herramientas necesarias para que los niños sean agentes de cambio frente a la injusticia y la desigualdad.</Parrafo>
                <Parrafo>La asociación promueve el contacto constante con la naturaleza y el respeto absoluto hacia todas sus manifestaciones. Han creado una granja educativa para generar aprendizaje sobre técnicas agrícolas sostenibles, el cuidado de los animales y la utilización racional de los recursos naturales.</Parrafo>
                <Encabe>Centro de Rescate de Animales Silvestres</Encabe>
                <Fotos src={foto2}/>
                <Parrafo>Ante la necesidad de abordar la problemática de la fauna silvestre, la asociación ha construido un centro de rescate. Allí se han recuperado más de 60 especies víctimas del tráfico ilegal, y se lleva a cabo educación ambiental para concienciar sobre el mascotismo, la contaminación y la expansión urbana/agrícola. También se realizan trabajos de investigación, rehabilitación y liberación de fauna autóctona.</Parrafo>
                <Parrafo>Conservación del humedal: La asociación ve la oportunidad de contribuir a la conservación y protección del humedal ubicado en el kilómetro 139 de la ruta nacional 226. Se lleva a cabo una investigación y monitoreo de la diversidad de especies presentes, respetando la conservación de la biodiversidad.</Parrafo>
                <Fotos src={foto3}/>
                <Parrafo>Sendero ambiental y programa socioeducativo: En colaboración con el Ministerio de Ambiente de la Nación, se ha construido un sendero ambiental para que las escuelas de la región conozcan la importancia y problemáticas de estos espacios naturales. También se implementa un programa socioeducativo para formación y divulgación sobre la conservación y la importancia de estos ambientes, a través de charlas en las escuelas de la ciudad. Los profesionales de la asociación, con su experiencia en biología, veterinaria, manejo de fauna y conservación, están comprometidos en despertar el interés de los estudiantes hacia el cuidado y protección de los ambientes naturales.</Parrafo>
                <Encabe>¡Dando Respuestas y Construyendo Futuros!</Encabe>
            </DivQS>
        </Div>
    )
}

export default QuienesSomos