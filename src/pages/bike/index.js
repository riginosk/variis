import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import Modules from '../../components/modules'
import { CSSTransition } from 'react-transition-group';
import BikeSpecs from '../../components/bike-specs/bike-specs'

class BikePage extends React.Component {
  constructor(){
    super()
    this.activeTab = this.activeTab.bind(this);
  }

  state = {
    ShowFeatures: true,
    ShowSpecs: false
  };
    
  activeTab(e) {
    var elems = document.querySelector(".is-active");
    if(elems !==null){
     elems.classList.remove("is-active");
    }
   e.target.classList.add("is-active");
  }

  showSpecs = (e) => {
    
    this.activeTab(e);
    this.setState({
      ShowFeatures: false,
      ShowSpecs: true
    })
  }

  showFeatures = (e) => {
    
    this.activeTab(e);
    this.setState({
      ShowFeatures: true,
      ShowSpecs: false
    })
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const { data } = this.props;
    const moduleData = data.allContentfulPage.edges[0].node;
    const pageName = moduleData.pageName;

    return (
      <Layout location={this.props.location} pageName={pageName} showFeatures={this.showFeatures} showSpecs={this.showSpecs}>
        <Helmet title={siteTitle} />
        <CSSTransition in={this.state.ShowFeatures} timeout={1000} unmountOnExit classNames="my-node">
          <Modules location={this.props.location} moduleData={moduleData} />
        </CSSTransition>
        <CSSTransition in={this.state.ShowSpecs} timeout={1000} unmountOnExit classNames="my-node">
          <BikeSpecs />
        </CSSTransition>
      </Layout>
    )
  }
}

export default BikePage

export const pageQuery = graphql`
  query BikeQuery {
    allContentfulPage(filter: {pageName: {eq: "Bike Page"}}) {
        nodes {
            id
          }
          edges {
            node {
              id
              pageName
              modules {
                __typename
                ... on Node {
                  ... on ContentfulContentPreview {
                    id
                    content {
                      title
                      video {
                        file {
                          url
                        }
                      }
                      description {
                        description
                      }
                      image {
                        fluid {
                          ...GatsbyContentfulFluid
                        }
                      }
                    }
                    sectionText {
                      childContentfulRichText {
                        html
                      }
                    }
                  }
                  ... on ContentfulCarousel {
                    id
                    slides {
                      id
                      title
                      text {
                        childContentfulRichText {
                          html
                        }
                      }
                      image {
                        fluid {
                          ...GatsbyContentfulFluid
                        }
                      }
                    }
                  }
                  ... on ContentfulVideoScrub {
                    id
                  }
                  ... on ContentfulBikeHero {
                    id
                    images {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                    }
                    subtitle
                    title
                  }
                  ... on ContentfulReviews {
                    id
                    addReviews {
                      id
                      text
                      title
                      user
                      date
                    }
                  }
                  ... on ContentfulFullWidthMedia {
                    id
                    media {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                      file {
                        contentType
                        url
                      }
                    }
                  }
                  ... on ContentfulTwoUp {
                    id
                    imageLeft {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                    }
                    imageRight {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                    }
                    linkUrlLeft
                    linkUrlRight
                    subtitleLeft
                    subtitleRight
                    titleLeft
                    titleRight
                    ctaTextRight
                    ctaTextLeft
                    ctaTextColor
                    ctaBackgroundColor
                  }
                  ... on ContentfulBrandsCarousel {
                    id
                  }
                  ... on ContentfulSpace {
                    id
                    spaceSize
                  }
                  ... on ContentfulHomeHero {
                    id
                    title
                    media {
                      fluid {
                        ...GatsbyContentfulFluid
                      }
                    }
                  }
                  ... on ContentfulTextBreaker {
                    id
                    textColor
                    highlightColor
                    childContentfulTextBreakerTextBreakerRichTextNode {
                      id
                      childContentfulRichText {
                        html
                      }
                    }
                  }
                  ... on ContentfulSection {
                    id
                    backgroundColor
                    textColor
                    modules {
                      __typename
                      ... on Node {
                        ... on ContentfulContentPreview {
                          id
                          content {
                            title
                            video {
                              file {
                                url
                              }
                            }
                            description {
                              description
                            }
                            image {
                              fluid {
                                ...GatsbyContentfulFluid
                              }
                            }
                          }
                          sectionText {
                            childContentfulRichText {
                              html
                            }
                          }
                        }
                        ... on ContentfulCarousel {
                          id
                          slides {
                            id
                            title
                            text {
                              childContentfulRichText {
                                html
                              }
                            }
                            image {
                              fluid {
                                ...GatsbyContentfulFluid
                              }
                            }
                          }
                        }
                        ... on ContentfulReviews {
                          id
                          addReviews {
                            id
                            text
                            title
                            user
                            date
                          }
                        }
                      }
                      ... on ContentfulFullWidthMedia {
                        id
                        media {
                          fluid {
                            ...GatsbyContentfulFluid
                          }
                          file {
                            contentType
                            url
                          }
                        }
                      }
                      ... on ContentfulTwoUp {
                        id
                        imageLeft {
                          fluid {
                            ...GatsbyContentfulFluid
                          }
                        }
                        imageRight {
                          fluid {
                            ...GatsbyContentfulFluid
                          }
                        }
                        linkUrlLeft
                        linkUrlRight
                        subtitleLeft
                        subtitleRight
                        titleLeft
                        titleRight
                        ctaTextRight
                        ctaTextLeft
                        ctaTextColor
                        ctaBackgroundColor
                      }
                      ... on ContentfulBrandsCarousel {
                        id
                      }
                      ... on ContentfulSpace {
                        id
                        spaceSize
                      }
                      ... on ContentfulTextBreaker {
                        id
                        textColor
                        highlightColor
                        childContentfulTextBreakerTextBreakerRichTextNode {
                          id
                          childContentfulRichText {
                            html
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
