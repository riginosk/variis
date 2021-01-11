import React, { useEffect } from "react"
import Scrollbar from 'smooth-scrollbar';

const SmoothScroll = ({ children }) => {

    useEffect(() => {

        var scrollbar = Scrollbar.init(
            document.querySelector('.scroll-container'), {
            damping: 0.1,
            renderByPixels: true,
            continuousScrolling: false,
            alwaysShowTracks: false
        }
        );

        function smoothscrollbar() {
            if (typeof window !== 'undefined') {
                if (window.innerWidth <= 768) {
                    scrollbar.destroy('.scroll-container');
                }
            }

            if (typeof window !== 'undefined') {
                if (window.innerWidth > 768) {
                    scrollbar = Scrollbar.init(
                        document.querySelector('.scroll-container'), {
                        damping: 0.1,
                        renderByPixels: true,
                        continuousScrolling: false,
                        alwaysShowTracks: false
                    }
                    );
                }
            }

        }

        smoothscrollbar();

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', smoothscrollbar)
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
