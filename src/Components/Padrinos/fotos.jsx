import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from "../../assest/foto2.jpg";
import foto2 from "../../assest/opt2.jpg";
import foto3 from "../../assest/opt5.jpg";
import foto4 from "../../assest/opt6.jpg";


const StyledCarousel = styled(Carousel)`
    display: none;
    
    @media (max-width: 800px) {
        display: flex;
        margin: 3rem 0;
        transition: .1s;
        width: 100%;
    }
`


function CarouselImg() {
  return (
    <StyledCarousel>
        <Carousel.Item>
            <img className="d-block w-100" src={foto1} alt="Granja"/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={foto3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h3></h3>
            <p></p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={foto4} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
    </StyledCarousel>
  );
}

export default CarouselImg;
