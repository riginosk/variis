import React, { useEffect } from "react";
import Img from 'gatsby-image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AppHero = (props) => {
    const data = props.data;
    const id = props.data.id;
    const scrollbar = props.scrollbar;
    const scroller = props.scroller;

    useEffect(() => {
        if (scrollbar && scroller) {
                const target = document.getElementById(id);
                const targetImageBack = target.querySelector('.app-hero__image--back');
                const targetImageFront = target.querySelector('.app-hero__image--front');
                const targetText = target.querySelector('.app-hero__text-ticker');


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
                    .to(targetText, { x: "-5%"}, "start")

            }
    
    }, [scroller,scrollbar, id]);

    return (
        <section className="app-hero" id={id}>
            <div className="app-hero__images">
                <div className="app-hero__image app-hero__image--back">
                    <Img className="app-hero__image-inner" fluid={data.backgroundImage.fluid} />
                </div>
                <div className="app-hero__text-ticker">
                    Equinox App — Equinox App
                </div>
                <div className="app-hero__image app-hero__image--front">
                    <Img fluid={data.foregroundImage.fluid} />
                </div>
            </div>
            <div className="app-hero__container grid wrapper">
                <div className="app-hero__text">
                    <p className="app-hero__title">{data.title}</p>
                    <p className="app-hero__subtitle">{data.subtitle}</p>
                </div>
            </div>
        </section>
    )
}

export default AppHero;

