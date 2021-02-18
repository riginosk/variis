import React, { useEffect } from "react"
import Img from 'gatsby-image'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FullWidthMedia = (props) => {
    const data = props.data;
    const id = props.data.id;
    const contentType = data.media.file.contentType;
    const image = data.media.fluid;
    const url = data.media.file.url;
    const scrollbar = props.scrollbar;
    const scroller = props.scroller;

    useEffect(() => {
        setTimeout(function () {

            if (scrollbar && scroller) {
                const target = document.getElementById(id);
                const targetImage = target.querySelector('.target-' + id);


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
                        end: 'bottom top',
                        scrub: true,
                        invalidateOnRefresh: true
                    }
                });


                gsap.utils.toArray(targetImage).forEach(layer => {
                    const depth = layer.dataset.depth;
                    const movement = (layer.offsetHeight * depth)
                    tl.to(layer, { y: movement, opacity: 0, ease: "none" }, 0)
                });

            }
        }, 1000);

    }, [scroller, scrollbar, id]);

    return (
        <section className="full-width-media" id={id}>
            <div className={"full-width-media__container target-" + id} data-depth='1.0'>
                {contentType.includes("image") &&
                    <div className={'full-width-media__holder parallax-' + id}>
                        <Img className='full-width-media__image' fluid={image} />
                    </div>
                }
                {contentType.includes("video") &&
                    <video className={"full-width-media__video parallax-" + id} width="100%" preload='auto' loop autoPlay muted>
                        <source src={url} type="video/mp4" />
                    </video>
                }
            </div>
        </section>
    )
}

export default FullWidthMedia;

