import React, { useEffect } from "react";
import Img from 'gatsby-image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const BikeHero = (props) => {
    const data = props.data;
    const id = props.data.id;
    const scrollbar = props.scrollbar;
    const scroller = props.scroller;

    useEffect(() => {
        if (scrollbar && scroller) {
                const target = document.getElementById(id);
                const targetImageBack = target.querySelector('.bike-hero__image--back');
                const targetImageFront = target.querySelector('.bike-hero__image--front');

                ScrollTrigger.scrollerProxy(scroller, {
                    scrollTop(value) {
                        if (arguments.length) {
                            scrollbar.scrollTop = value;
                        }
                        return scrollbar.scrollTop
                    }
                });

                scrollbar.addListener(ScrollTrigger.update);
                ScrollTrigger.defaults({ scroller: scroller });

                let tl = gsap.timeline({
                    scrollTrigger: {
                        id: id,
                        trigger: target,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    }
                });


                tl.addLabel("start")
                    .to(targetImageBack, { y: "50%"}, "start")
                    .to(targetImageFront, { y: "10%"}, "start")

            }
    
    }, [scroller,scrollbar, id]);

    return (
        <section className="bike-hero" id={id}>
            <div className="bike-hero__images">
                <div className="bike-hero__image bike-hero__image--back">
                    <Img className="bike-hero__image-inner" fluid={data.images[0].fluid} />
                </div>
                <div className="bike-hero__image bike-hero__image--middle">
                    <Img className="bike-hero__image-inner" fluid={data.images[1].fluid} />
                </div>
                <div className="bike-hero__image bike-hero__image--front">
                    <Img fluid={data.images[2].fluid} />
                </div>
            </div>
            <div className="bike-hero__container grid wrapper">
                <div className="bike-hero__text">
                    <p className="bike-hero__title">{data.title}</p>
                    <p className="bike-hero__subtitle">{data.subtitle}</p>
                </div>
            </div>
        </section>
    )
}

export default BikeHero;

