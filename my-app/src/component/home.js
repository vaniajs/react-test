import React from 'react';
import Etalase from './../component/etalase';
import { Carousel } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (

            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/homeslider/745232e6f624f05ea09385f74d26543bb08de10a_W3_WP_PRO_PP_Holika-Holika_MainBanner_120319.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/homeslider/d951f9decdc0fe335609690b235e17b8ffdc0214_W2_Promotion_MAYBELLINE_MainBanner_080319.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://s3-ap-southeast-1.amazonaws.com/img-sociolla/img/homeslider/eb189dc2bc183938bfcb989462adf56ce6a86f0e_W2_LOREAL-DD_MainBanner_060319.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

            <Etalase/>

            </div>
        )
    }
}

export default Home;

