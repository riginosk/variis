import React, { useEffect } from "react"
import Img from 'gatsby-image'
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Carousel = (props) => {

    const slides = props.data.slides;
    const carouselSlide = slides.map((slide) => {
        return (
            <div className="swiper-slide carousel-slide" key={slide.id}>
                <div className="carousel-slide__container">
                    <div className="carousel-slide__image-container">
                        <Img className="carousel-slide__image" fluid={slide.image.fluid} />
                    </div>
                    <div className="carousel-slide__description">
                        <p className="carousel-slide__title">{slide.title}</p>
                        <div className="carousel-slide__text" dangerouslySetInnerHTML={{ __html: slide.text.childContentfulRichText.html }} ></div>
                    </div>
                </div>
            </div>
        )
    })

    useEffect(() => {
        new Swiper('.swiper-carousel', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 60,
            speed: 500,
        })
    }, []);

    return (
        <section className="carousel">
            <div className="swiper-carousel">
                <div className="swiper-wrapper">
                    {carouselSlide}
                </div>
            </div>
        </section>
    )

}

export default Carousel;
