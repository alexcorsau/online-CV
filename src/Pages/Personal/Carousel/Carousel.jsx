import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from 'react-bootstrap';
import {CarouselPictures} from "./CarouselPictures"

import "./Carousel.css"

console.log(CarouselPictures);

export class DemoCarousel extends Component {
    // const [index, setIndex] = useState(0);
    // const handleSelect = (selectedIndex, e) => {
    //     setIndex(selectedIndex);
    // };

    // handleClick=(index,item)=> {
    //     console.log("clicked on a picture", index, item);
    // };
    render() {
        return (
            <Carousel pause="hover" controls="true">
                {
                    CarouselPictures.sources.map((element)=>(
                        <CarouselItem key={CarouselPictures.sources.indexOf(element)}>
                            <img className="carousel-picture" src={process.env.PUBLIC_URL+element} alt={element}/>
                            <Carousel.Caption>
                                <p>Image number {CarouselPictures.sources.indexOf(element)+1}/{CarouselPictures.sources.length}</p>
                            </Carousel.Caption>
                        </CarouselItem>
                    ))
                }
            </Carousel>
        );
    }
};

// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));