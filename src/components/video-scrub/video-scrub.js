import React, { useEffect } from "react"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VideoScrub = (props) => {

    const scrollbar = props.scrollbar;
    const scroller = props.scroller;

    useEffect(() => {
        if (scrollbar && scroller) {
            const canvas = document.getElementById("hero-lightpass");
            const context = canvas.getContext("2d");

            canvas.width = 1158;
            canvas.height = 770;

            const frameCount = 147;
            const currentFrame = index => (
            `/video/video${(index + 1).toString().padStart(3, '0')}.jpg`
            );

            const images = []
            const airpods = {
            frame: 0
            };

            for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            images.push(img);
            }

              
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

            gsap.to(airpods, {
            frame: frameCount - 1,
            snap: "frame",
            scrollTrigger: {
                scrub: 0.5,
                pin:true,
                trigger: ".video-scrub",
                start: "top top",
                end: "bottom top",
            },
            onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
            });

            images[0].onload = render;

            function render() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(images[airpods.frame], 0, 0); 
            }
            }
    
    }, [scroller,scrollbar]);

  return (
    <section className="video-scrub">
        <canvas id="hero-lightpass" />
    </section>
  )
}

export default VideoScrub;

