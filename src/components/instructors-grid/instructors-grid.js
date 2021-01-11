import React from 'react'
import Img from 'gatsby-image'
import Transition from '../page-transition/page-transition';

const InstructorsGrid = (props) => {
    const data = props.data;
    const instructors = data.instructors;
    const NumInstructors = instructors.length;
    console.log(data);
    //   const instructorName = data.instructorName;
    //   const instructorImage = data.instructorImage.fluid

    return (
        <div className='instructors wrapper'>
            <div className="instructors__grid">
            <div className="instructors__number">
                <p><span>{NumInstructors}</span><br/>Instructors</p>
            </div>
            <div className="instructors__container">
                <div className="instructors__header">
                    <h2 className="instructors__title">{data.brandName}<br/><span>Instructors</span></h2>
                    <p className="instructors__description">{data.description.description}</p>

                </div>
                <ul className="instructors__list">
                    {instructors.map((instructor) => (
                        <li className="instructors__instructor">
                            <Transition to={`/${instructor.slug}`}>
                                <Img className="instructors__image" fluid={instructor.instructorImage.fluid} />
                                <p className="instructors__text">{instructor.instructorName}<br/><span>{instructor.numberOfClasses} Classes</span></p>
                            </Transition>
                        </li>
                    ))}
                </ul>
            </div>
            </div>

        </div>

    )
}


export default InstructorsGrid;

