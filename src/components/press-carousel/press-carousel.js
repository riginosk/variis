import React, { useEffect } from "react"
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper.use([Autoplay])

const PressCarousel = (props) => {

    const slides = props.data.pressSlides;
    console.log(props.data.pressSlides);
    
    const carouselSlide = slides.map((slide) => {
        return (
            <div className="swiper-slide press-carousel-slide" key={slide.id}>
                <div className="press-carousel-slide__container">
                    <div className="press-carousel-slide__image-container">
                        <img className="press-carousel-slide__image" alt="" src={slide.companyLogo.file.url} />
                    </div>
                    <div className="press-carousel-slide__description">
                        <p className="press-carousel-slide__date">{slide.publicationDate}</p>
                        <p className="press-carousel-slide__title">{slide.quote}</p>
                    </div>
                </div>
            </div>
        )
    })

    useEffect(() => {
        var autoplay = 5000;
        var speed = 1000;
        new Swiper('.swiper-press-carousel', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween:0,
            speed: speed,
            loop:true,
            loopAdditionalSlides:6,
            autoplay: {
                delay: autoplay,
                disableOnInteraction: false,
              },
              on: {
                slideChangeTransitionEnd: move
              }
        })

        function move() {
            let start;
            let element = document.getElementById("progress-bar");
            function step(timestamp) {
                if (start === undefined)
                    start = timestamp;
                const elapsed = timestamp - start;

                element.style.width = (100 / autoplay) * elapsed + "%";

                if (elapsed < autoplay) {
                    window.requestAnimationFrame(step);
                } else {
                    element.style.width = 0;
                }
            }

            window.requestAnimationFrame(step);
        }
     
    }, []);

    return (
        <section className="press-carousel drag-cursor">
            <div className="swiper-press-carousel">
                <div className="swiper-wrapper">
                    {carouselSlide}
                </div>
            </div>
            <div className="press-carousel__progress-container">
                <div className="press-carousel__progress">
                    <div id="progress-bar"></div>
                </div>
            </div>
        </section>
    )

}

export default PressCarousel;
