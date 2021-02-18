import React, { useEffect, useState } from "react";
import Img from 'gatsby-image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from '../button/button'

const TwoUp = (props) => {
    const data = props.data;
    const imageLeft = data.imageLeft.fluid;
    const imageRight = data.imageRight.fluid;
    const titleLeft = data.titleLeft;
    const titleRight = data.titleRight;
    const subtitleLeft = data.subtitleLeft;
    const subtitleRight = data.subtitleRight;
    const linkUrlLeft = data.linkUrlLeft;
    const linkUrlRight = data.linkUrlRight;
    const ctaTextLeft = data.ctaTextLeft;
    const ctaTextRight = data.ctaTextRight;
    const ctaTextColor = data.ctaTextColor;
    const ctaBackgroundColor = data.ctaBackgroundColor;

    const scrollbar = props.scrollbar;
    const scroller = props.scroller;
    const [blockMargin, setBlockMargin] = useState(0);


    useEffect(() => {
        if (scrollbar && scroller) {
            let blockHeight = document.querySelector('.two-up__title-cta').offsetHeight;

            setBlockMargin(blockHeight);

            let h = window.innerHeight;
            let offsetStart = h - blockHeight;

            window.addEventListener('resize',function(){
                h = window.innerHeight;
                offsetStart = h - blockHeight;
            });
            
                gsap.utils.toArray(".two-up__description").forEach((section, i) => {


           ScrollTrigger.scrollerProxy(scroller, {
                    scrollTop(value) {
                        if (arguments.length) {
                            scrollbar.scrollTop = value;
                        }
                        return scrollbar.scrollTop
                    }
                });

                scrollbar.addListener(ScrollTrigger.update);
                ScrollTrigger.defaults({ scroller: scroller })

                ScrollTrigger.create({
                    trigger: '.two-up__item',
                    start: () => "0 " + offsetStart,
                    end: "bottom bottom",
                    pin: section,
                    invalidateOnRefresh:true
                  });
            
                });

            }
    
    }, [scroller,scrollbar]);

    return (
        <section className="two-up wrapper">
            <div className="two-up__item two-up__item--left" id={data.imageLeft.id} style={{marginBottom:blockMargin}}>
                {imageLeft !== null &&
                    <div className="two-up__image-container">
                        <Img className="two-up__image" fluid={imageLeft} />
                    </div>
                }
                <div className="two-up__description" style={{backgroundColor:ctaBackgroundColor}}>
                    <div className="two-up__title-cta">
                        {titleLeft !== null &&
                            <p className="two-up__title">{titleLeft}</p>
                        }
                        {linkUrlLeft && ctaTextLeft &&
                            <Button value={ctaTextLeft} to={linkUrlLeft} color={ctaBackgroundColor} backgroundColor={ctaTextColor} className="two-up__button" />
                        }
                    </div>
                    <div className="two-up__subtitle-container">
                        {subtitleLeft !== null &&
                            <p className="two-up__subtitle">{subtitleLeft}</p>
                        }
                    </div>
                </div>

            </div>
            <div className="two-up__item two-up__item--right" id={data.imageRight.id}>
                {imageRight !== null &&
                    <div className="two-up__image-container">
                        <Img className="two-up__image" fluid={imageRight} />
                    </div>
                }
                <div className="two-up__description" style={{backgroundColor:ctaBackgroundColor}}>

                    <div className="two-up__title-cta">
                        {titleRight !== null &&
                            <p className="two-up__title">{titleRight}</p>
                        }
                        {linkUrlRight && ctaTextRight &&
                            <Button value={ctaTextRight} to={linkUrlRight} color={ctaBackgroundColor} backgroundColor={ctaTextColor} className="two-up__button" />
                        }
                    </div>
                    <div className="two-up__subtitle-container">
                        {subtitleRight !== null &&
                            <p className="two-up__subtitle">{subtitleRight}</p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwoUp;

