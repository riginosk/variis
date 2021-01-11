import React, { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Review from './review';

const Reviews = (props) => {
    const location = props.location;
    const data = props.data;
    const moduleDataId = props.moduleDataId;
    const id = moduleDataId + props.data.id;
    const scrollbar = props.scrollbar;
    const scroller = props.scroller;

    useEffect(() => {
        if (scrollbar && scroller) {
                const target = document.getElementById(id);
                const targetTicker = target.querySelector('.reviews__ticker');

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
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                    }
                });


                tl.addLabel("start")
                    .to(targetTicker, { x: "-50%"}, "start")
            }
    
    }, [scroller,scrollbar,location,id]);

    return (
        <section className="reviews" id={id} >
            <div className="reviews__ticker">
                <p>Member</p>
                <p>Reviews</p>
                <p>Member</p>
                <p>Reviews</p>
                <p>Member</p>
                <p>Reviews</p>
            </div>
            <div className="wrapper grid">
                <div className="reviews__content">
                    {
                        data.addReviews.map((review, index) => {
                            return (
                                <Review key={review.id  + index} review={review} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Reviews;