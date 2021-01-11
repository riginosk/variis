import React, { useEffect } from "react";

const TextBreaker = (props) => {
    const text = props.data.childContentfulTextBreakerTextBreakerRichTextNode.childContentfulRichText.html;
    const textColor = props.data.textColor;
    const highlightColor = props.data.highlightColor;
    const textBreakerId = props.data.childContentfulTextBreakerTextBreakerRichTextNode.id;

    useEffect(() => {
        const textBreakerElement = document.getElementById(textBreakerId);
        const highlightedText = textBreakerElement.querySelector('b');
        highlightedText.style.color = highlightColor;
    });

    return (
        <section style={{color: textColor}} className="text-breaker grid wrapper">
            <div className="text-breaker__inner" id={textBreakerId} dangerouslySetInnerHTML={{ __html: text }} />
        </section>
    )
}

export default TextBreaker;

