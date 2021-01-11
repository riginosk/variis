import React from 'react'

const Review = (props) => {
    const review = props.review;

    return (
        <div className="review">
            <div className="review__rating">
                <figure>
                    <svg width="120" height="22" viewBox="0 0 120 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.0001 0L14.6942 8.2918H23.4128L16.3593 13.4164L19.0535 21.7082L12.0001 16.5836L4.94666 21.7082L7.64082 13.4164L0.587402 8.2918H9.30591L12.0001 0ZM36.0001 0L38.6942 8.2918H47.4128L40.3593 13.4164L43.0535 21.7082L36.0001 16.5836L28.9467 21.7082L31.6408 13.4164L24.5874 8.2918H33.3059L36.0001 0ZM62.6942 8.2918L60.0001 0L57.3059 8.2918H48.5874L55.6408 13.4164L52.9467 21.7082L60.0001 16.5836L67.0535 21.7082L64.3593 13.4164L71.4128 8.2918H62.6942ZM84.0001 0L86.6942 8.2918H95.4128L88.3593 13.4164L91.0535 21.7082L84.0001 16.5836L76.9467 21.7082L79.6408 13.4164L72.5874 8.2918H81.3059L84.0001 0ZM110.694 8.2918L108 0L105.306 8.2918H96.5874L103.641 13.4164L100.947 21.7082L108 16.5836L115.053 21.7082L112.359 13.4164L119.413 8.2918H110.694Z" fill="#959383" />
                    </svg>
                </figure>
            </div>
            <div className="review__content">
                <p className="review__title">{review.title}</p>
                <p className="review__text">{review.text}</p>
            </div>
            <div className="review__meta">
                <p className="review__date">{review.date}</p>
                <p className="review__user">{review.user}</p>
            </div>
        </div>
    )
}

export default Review;