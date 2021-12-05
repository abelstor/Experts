import React from 'react';
import { Carousel } from 'react-bootstrap';
import Agua3 from '../assets/img/agua3.jpg';
import Agua6 from '../assets/img/agua6.jpg';
import Lag from '../assets/img/lag.jpg';
import SignInButton from './SignInButton';

const LandingImages = () => {
    const carCaption = (
        <>
            <h1>Experts</h1>
            <h3>Conocimiento especializado a tu alcance!</h3>
        </>
    );
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Agua3}
                        alt="First slide"
                        width="400px"
                        height="500px"
                    />
                    <Carousel.Caption style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                        {carCaption}
                        <SignInButton />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Agua6}
                        alt="Second slide"
                        width="400px"
                        height="500px"
                    />

                    <Carousel.Caption>
                        {carCaption}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Lag}
                        alt="Third slide"
                        width="400px"
                        height="500px"
                    />

                    <Carousel.Caption>
                        {carCaption}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
}

export default LandingImages;