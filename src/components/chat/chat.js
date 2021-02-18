import React, { useState, useEffect } from "react"
import Scrollbar from 'smooth-scrollbar'
import { debounce } from '../../utilities/helpers'

const Chat = (props) => {
    const [scroller, setScroller] = React.useState();
    const [scrollbar, setScrollbar] = React.useState();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [chatHeight, setChatHeight] = useState(0);

    useEffect(() => {
        const chat = document.querySelector('.chat');
        var chatPos = window.innerHeight - chat.offsetTop + chat.offsetHeight
        setChatHeight(chatPos);
        setScroller(document.querySelector('.scroll-container'))
        setScrollbar(Scrollbar.get(scroller))

        if (scrollbar != null) {

            const handleScroll = debounce(() => {
                // find current scroll position
                let currentScrollPos = scrollbar.offset.y;
                // set state based on location info
                setVisible((prevScrollPos > currentScrollPos) || currentScrollPos < 10);
                // set state to new scroll position
                setPrevScrollPos(currentScrollPos);
            }, 10);

            scrollbar.addListener(handleScroll);

            return () => scrollbar.removeListener(handleScroll);

        }

    }, [scroller, scrollbar, prevScrollPos, visible]);

    return (
        <div className="chat" style={{bottom: visible ? 40 : -chatHeight }}>
            <figure>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.68182 14.6512L0 18V2C0 0.895431 0.89543 0 2 0H16C17.1046 0 18 0.895432 18 2V12.6512C18 13.7557 17.1046 14.6512 16 14.6512H3.68182Z" fill="white" />
                </svg>
            </figure>
        </div>
    )
}

export default Chat;

