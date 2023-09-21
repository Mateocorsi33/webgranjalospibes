import React from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import foto1 from "../../assest/p2.jpg";
import foto2 from "../../assest/p1.jpg";
import foto3 from "../../assest/p6.jpg";
import foto4 from "../../assest/p3.jpg";
import foto5 from "../../assest/p4.jpg";
import foto6 from "../../assest/p5.jpg";
import foto7 from "../../assest/p7.jpg";
import foto8 from "../../assest/p8.jpg";
import foto9 from "../../assest/p9.jpg";
import foto10 from "../../assest/foto2.jpg";
import foto11 from "../../assest/p10.jpg";



const StyledCarousel = styled(Carousel)`
    display: flex;
    width: 80%;
    
    @media (max-width: 800px) {
        display: flex;
        margin:0;
        width: 100%;
    }
`

const Img = styled.img`
    display: none;
    
    @media (max-width: 800px) {
        display: flex;
        margin:0;
        width: 100%;
    }
`




function CarouselImg() {
  return (
    <StyledCarousel interval={3000} fade={true} >
        <Carousel.Item>
            <Img className="d-block w-100" src={foto2} alt="Second slide"/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto3} alt="Third slide"/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto4} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto5} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto6} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto7} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto8} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto9} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto10} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Img className="d-block w-100" src={foto11} alt=""/>
            <Carousel.Caption><h3></h3><p></p></Carousel.Caption>
        </Carousel.Item>
    </StyledCarousel>
  );
}

export default CarouselImg;
