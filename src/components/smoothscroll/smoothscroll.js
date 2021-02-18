import React, { useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';

const SmoothScroll = ({ children }) => {

    useEffect(() => {

        if(!window.matchMedia("(pointer: coarse)").matches) {
            var scrollbar = Scrollbar.init(
                document.querySelector('.scroll-container'), {
                damping: 0.1,
                renderByPixels: true,
                continuousScrolling: false,
                alwaysShowTracks: false
            }
            );
        }

    },[]);

    return (
        <div className="scroll-container">
            <div className="smooth-scroll">
                {children}
            </div>
        </div>
    )
}

export default SmoothScroll;
