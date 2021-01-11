import React from 'react'
import Img from 'gatsby-image'

const InstructorHero = (props) => {
    const data = props.data;

    return (
        <section className="instructor-hero">
            <div className="instructor-hero__image-container">
                <Img className="instructor-hero__image" fluid={data.instructorImage.fluid} />
            </div>
            <div className="instructor-hero__header">
                <div className="wrapper instructor-hero__header-container">
                    <h1 className="instructor-hero__instructor-name">{data.instructorName}</h1>
                    <figure className="instructor-hero__arrow">
                        <svg width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M80.6928 8.93499L20.7583 68.8695L74.8111 68.8903L74.8064 80.8903L0.280965 80.8616L0.252197 6.3361L12.2522 6.33147L12.2731 60.3842L72.2076 0.449707L80.6928 8.93499Z" fill="black" />
                        </svg>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default InstructorHero;

