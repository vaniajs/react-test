import React from 'react';
import { Carousel } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            
            
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.static-src.com/siva/asset//03_2019/HomepageDesktopfwa840x280.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.static-src.com/siva/asset//01_2019/Q1Gaji5Juta_MainBannerCarousel840x280.gif"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.static-src.com/siva/asset//02_2019/840X280_Main_Banner_Travel_Fest_Mudik.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
        
            
        )
    }
}

export default Home;

