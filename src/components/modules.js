import React, { useEffect } from "react"
import SmoothScroll from './smoothscroll/smoothscroll'
import Scrollbar from 'smooth-scrollbar';

import Hero from "./home-hero/home-hero"
import Section from "./section/section";
import Space from "./space/space"
import TextBreaker from "./text-breaker/text-breaker"
import BrandCarousel from './brands-carousel/brands-carousel'
import TwoUp from "./two-up/two-up"
import FullWidthMedia from "./full-width-media/full-width-media";
import Reviews from "./reviews/reviews";
import BrandHero from "./brand-hero/brand-hero";
import InstructorHero from "./instructor-hero/instructor-hero";
import InstructorGrid from "./instructors-grid/instructors-grid";
import Footer from './footer/footer'
import BikeHero from "./bike-hero/bike-hero";
import VideoScrub from "./video-scrub/video-scrub";
import Carousel from "./carousel/carousel";
import ContentPreview from "./content-preview/content-preview";

const Modules = (props) => {
    const moduleData = props.moduleData;

    let content;
    const [location, setLocation] = React.useState();
    const [scroller, setScroller] = React.useState();
    const [scrollbar, setScrollbar] = React.useState();

    useEffect(() => {
        setLocation(props.location)
        setScroller(document.querySelector('.scroll-container'))
        setScrollbar(Scrollbar.get(scroller))
    },[props.location, scroller]);

    if (moduleData.modules !== null) {
        content = moduleData.modules.map((module, index) => {

            if (module.__typename === 'ContentfulHomeHero') {
                return (
                    <Hero key={moduleData.id + module.id} data={module} />
                )
            }

            if (module.__typename === 'ContentfulSpace') {
                return (
                    <Space key={moduleData.id + module.id + index} data={module} />
                )
            }

            if (module.__typename === 'ContentfulTextBreaker') {
                return (
                    <TextBreaker key={moduleData.id + module.id + index} data={module} />
                )
            }

            if (module.__typename === 'ContentfulSection') {
                return (
                    <Section key={moduleData.id + module.id + index} moduleDataId={moduleData.id} data={module} scrollbar={scrollbar} scroller={scroller} />
                )
            }

            if (module.__typename === 'ContentfulBrandsCarousel') {
                return (
                    <BrandCarousel key={moduleData.id + module.id + index} />
                )
            }

            if (module.__typename === 'ContentfulTwoUp') {
                return (
                    <TwoUp key={moduleData.id + module.id + index} data={module} />
                )
            }

            if (module.__typename === 'ContentfulFullWidthMedia') {
                return (
                    <FullWidthMedia key={moduleData.id + module.id + index} data={module} scrollbar={scrollbar} scroller={scroller} />
                )
            }

            if (module.__typename === 'ContentfulReviews') {
                return (
                    <Reviews key={moduleData.id + module.id + index} location={location} moduleDataId={moduleData.id + index} data={module} scrollbar={scrollbar} scroller={scroller} />
                )
            }

            if (module.__typename === 'ContentfulBrandHero') {
                return (
                   <BrandHero key={moduleData.id + module.id + index} location={location} data={module} scrollbar={scrollbar} scroller={scroller} />
                )
            }

            if (module.__typename === 'ContentfulInstructorHero') {
                return (
                    <InstructorHero key={moduleData.id + module.id + index} location={location} data={module} scrollbar={scrollbar} scroller={scroller} />
                )
            }

            if (module.__typename === 'ContentfulInstructorsGrid') {
                return (
                    <InstructorGrid key={moduleData.id + module.id + index} location={location} data={module} />
                )
            }

            if (module.__typename === 'ContentfulBikeHero') {
                return (
                    <BikeHero key={moduleData.id + module.id + index} location={location} data={module} scrollbar={scrollbar} scroller={scroller}/>
                )
            }

            if (module.__typename === 'ContentfulVideoScrub') {
                return (
                    <VideoScrub key={moduleData.id + module.id + index} location={location} data={module} scrollbar={scrollbar} scroller={scroller} />
                )
            }

            if (module.__typename === 'ContentfulCarousel') {
                return (
                    <Carousel key={moduleData.id + module.id + index} location={location} data={module} />
                )
            }

            if (module.__typename === 'ContentfulContentPreview') {
                return (
                    <ContentPreview key={moduleData.id + module.id + index} location={location} data={module} scrollbar={scrollbar} scroller={scroller} />
                )
            } else {
                return null
            }

        })
    }


    return (
        <SmoothScroll>
            <section className="project-content">
                <>{content}</>
            </section>
            <Footer/>
        </SmoothScroll>

    );
}

export default Modules;
