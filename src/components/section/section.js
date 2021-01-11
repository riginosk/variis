import React from 'react'
import Space from "../space/space"
import TextBreaker from "../text-breaker/text-breaker"
import BrandCarousel from '../brands-carousel/brands-carousel'
import TwoUp from "../two-up/two-up"
import FullWidthMedia from "../full-width-media/full-width-media"
import InstructorGrid from "../instructors-grid/instructors-grid";
import Carousel from "../carousel/carousel";
import ContentPreview from '../content-preview/content-preview'

const Section = (props) => {
    const sectionModules = props.data;
    const backgroundColor = props.data.backgroundColor;
    const textColor = props.data.textColor;
    const moduleDataId = props.moduleDataId; 
    let content;
    const scrollbar = props.scrollbar;
    const scroller = props.scroller;

    content = sectionModules.modules.map((module, index) => {

        if (module.__typename === 'ContentfulSpace') {
            return (
                <Space key={moduleDataId + module.id + index} data={module} />
            )
        }

        if (module.__typename === 'ContentfulTextBreaker') {
            return (
                <TextBreaker key={moduleDataId + module.id} data={module} />
            )
        }

        if (module.__typename === 'ContentfulBrandsCarousel') {
            return (
            <BrandCarousel key={moduleDataId + module.id} />
            )
        }

        if (module.__typename === 'ContentfulTwoUp') {
            return (
            <TwoUp key={moduleDataId + module.id} data={module} />
            )
        }

        if (module.__typename === 'ContentfulFullWidthMedia') {
            return (
            <FullWidthMedia  key={moduleDataId + module.id} data={module} scrollbar={scrollbar} scroller={scroller} />
            )
        }

        if (module.__typename === 'ContentfulInstructorsGrid') {
            return (
                <InstructorGrid key={moduleDataId + module.id + index} data={module} />
            )
        }

        if (module.__typename === 'ContentfulCarousel') {
            return (
                <Carousel key={moduleDataId + module.id + index} data={module} />
            )
        }

        if (module.__typename === 'ContentfulContentPreview') {
            return (
                <ContentPreview key={moduleDataId + module.id + index} data={module} scrollbar={scrollbar} scroller={scroller} />
            )
        } else {
            return null
        }

    })

    return (
        <section style={{color: textColor, backgroundColor: backgroundColor}} className="project-content">
            {content}
        </section>
    )
}

export default Section;

