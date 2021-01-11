import React from 'react'
import Img from 'gatsby-image'
import Modal from 'react-modal'
import VideoPlayer from '../video-player/video-player'
import InlineVideoPlayer from '../video-player/inline-player'

const ContentPreview = (props) => {
    const data = props.data;
    const content = data.content;
    const text = data.sectionText.childContentfulRichText.html;
    const scrollbar = props.scrollbar;
    const scroller = props.scroller;
    let modal, element;

    Modal.setAppElement('#___gatsby')

    const [modalIsOpen, setIsOpen] = React.useState(false);
    if (typeof window !== 'undefined') {
        modal = document.querySelector('.ReactModalPortal');
        element = document.querySelector(".inline-video-player__play-pause");
    }

    function openModal() {
        element = document.querySelector(".inline-video-player__play-pause");
        
        element.style.opacity=0;
        setIsOpen(true);
    }

    function closeModal() {
        element.style.opacity=1;
        modal.classList.add('is-close');
        setTimeout(() => {
            setIsOpen(false);
            modal.classList.remove('is-close');

        }, 500);
    }
    

    return (
        <section className="content-preview wrapper grid">
            { content[0] &&
                <div className="content-preview__tile content-preview__tile--first">
                    {content[0].video &&
                        <>
                            <button className="content-preview__image-container" onKeyDown={openModal} onClick={openModal}>
                                <InlineVideoPlayer className="content-preview__image" url={content[0].video.file.url} scrollbar={scrollbar} scroller={scroller} />
                            </button>
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" className="Modal" overlayClassName="Overlay">
                                <button className="Modal__close" onClick={closeModal}>
                                    <div className="Modal__close-container">
                                        <svg width="12" height="12" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.8351 16.6023L27.8958 29.6631L29.6636 27.8954L16.6028 14.8346L29.6631 1.77428L27.8954 0.00651042L14.8351 13.0668L1.76825 0L0.000479322 1.76777L13.0673 14.8346L0 27.9019L1.76777 29.6696L14.8351 16.6023Z" fill="white" />
                                        </svg>
                                        <span>Close</span>
                                    </div>
                                </button>
                                <div className="Modal__video-container">
                                    <VideoPlayer className="Modal__video" url={content[0].video.file.url} />
                                </div>
                            </Modal>
                        </>
                    }
                    {!content[0].video &&
                        <div className="content-preview__image-container">
                            <Img className="content-preview__image" fluid={content[0].image.fluid} />
                        </div>
                    }
                    <div className="content-preview__description">
                        <p className="content-preview__title">{content[0].title}</p>
                        <p className="content-preview__text">{content[0].description.description}</p>
                    </div>
                </div>
            }
            <div className="content-preview__section-title-container">
                <div className="content-preview__section-title" dangerouslySetInnerHTML={{ __html: text }} ></div>
            </div>

            { content[1] &&
                <div className="content-preview__tile content-preview__tile--second">
                    {content[1].video &&
                        <>
                            <button className="content-preview__image-container" onKeyDown={openModal} onClick={openModal}>
                                <div className="play-button">
                                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.75 14.583V-0.000366211L12.7083 7.2913L0.75 14.583Z" fill="black" />
                                    </svg>
                                </div>
                                <Img className="content-preview__image" fluid={content[1].image.fluid} />
                            </button>
                            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal" className="Modal" overlayClassName="Overlay">
                                <button onClick={closeModal}>close</button>
                                <video className="Modal__video" width="100%" preload='auto' autoPlay>
                                    <source src={content[1].video.file.url} type="video/mp4" />
                                </video>
                            </Modal>
                        </>
                    }
                    {!content[1].video &&
                        <div className="content-preview__image-container">
                            <Img className="content-preview__image" fluid={content[1].image.fluid} />
                        </div>
                    }
                    <div className="content-preview__description">
                        <p className="content-preview__title">{content[1].title}</p>
                        <p className="content-preview__text">{content[1].description.description}</p>
                    </div>
                </div>
            }

            { content[2] &&
                <div className="content-preview__tile content-preview__tile--third">
                    <button className="content-preview__image-container" onKeyDown={openModal} onClick={openModal}>
                        {content[2].video &&
                            <div className="play-button">
                                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.75 14.583V-0.000366211L12.7083 7.2913L0.75 14.583Z" fill="black" />
                                </svg>
                            </div>
                        }
                        <Img className="content-preview__image" fluid={content[2].image.fluid} />
                    </button>
                    <div className="content-preview__description">
                        <p className="content-preview__title">{content[2].title}</p>
                        <p className="content-preview__text">{content[2].description.description}</p>
                    </div>
                </div>
            }
        </section>
    )
}

export default ContentPreview;

