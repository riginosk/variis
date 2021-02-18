import React from 'react'
import InlineVideoPlayer from '../video-player/inline-player'
import Img from 'gatsby-image'

const ClassPreview = (props) => {
  const data = props.data;
  console.log(data);

  return (
    <section className="class-preview">
        <div className="wrapper grid class-preview__container">
            <div className="class-preview__featured-class grid">
                <div className="class-preview__featured-video">
                    <InlineVideoPlayer className="content-preview__image" url={data.featuredClassMedia.file.url} />
                </div>
                <div className="class-preview__featured-class-details">
                    <p className="class-preview__featured-class-title">{data.featuredClassTitle}</p>
                    <p className="class-preview__featured-class-meta">
                        <span className={data.featuredClassModality}>{data.featuredClassModality}</span>
                        <span className='class-preview__featured-class-intensity'> • {data.featuredClassLevel}</span>
                    </p>
                    <p className="class-preview__featured-class-description">{data.featuredClassDescription}</p>
                    <div className="class-preview__featured-class-instructor">
                        <Img className="class-preview__featured-class-instructor-image" fluid={data.featuredClassInstructorImage.fluid} />
                        <p className="class-preview__featured-class-instructor-name">{data.featuredClassInstructor}</p>
                    </div>
                </div>
            </div>
            <div className="class-tiles grid">
                <div className="class-tile class-tile--class-1">
                    <div className="class-tile__video">
                        <InlineVideoPlayer className="content-preview__image" url={data.classTiles[0].classMedia.file.url} />
                    </div>
                    <p className="class-tile__title">{data.classTiles[0].classTitle}</p>
                    <p className="class-tile__meta">
                        <span className={data.classTiles[0].classModality}>{data.classTiles[0].classModality}</span>
                        <span className='class-tile__intensity'> • {data.classTiles[0].classLevel}</span>
                    </p>
                </div>
                <div className="class-tile class-tile--class-2">
                    <div className="class-tile__video">
                        <InlineVideoPlayer className="content-preview__image" url={data.classTiles[1].classMedia.file.url} />
                    </div>
                    <p className="class-tile__title">{data.classTiles[1].classTitle}</p>
                    <p className="class-tile__meta">
                        <span className={data.classTiles[1].classModality}>{data.classTiles[1].classModality}</span>
                        <span className='class-tile__intensity'> • {data.classTiles[1].classLevel}</span>
                    </p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default ClassPreview;

