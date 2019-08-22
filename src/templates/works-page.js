import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Works from '../components/Works'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const WorksPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  works,
  main,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
          backgroundColor: 'rgb(24, 28, 92)',
          height: '200px',
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          boxShadow: '0.5rem 0 0 #333, -0.5rem 0 0 #444',
          backgroundColor: '#222',
          color: 'white',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Works gridItems={works} />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

// WorksPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   heading: PropTypes.string,
//   description: PropTypes.string,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array,
//   }),
//   main: PropTypes.shape({
//     heading: PropTypes.string,
//     description: PropTypes.string,
//     image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//     image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   }),
//   testimonials: PropTypes.array,
//   fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   pricing: PropTypes.shape({
//     heading: PropTypes.string,
//     description: PropTypes.string,
//     plans: PropTypes.array,
//   }),
// }

const WorksPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <WorksPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        works={frontmatter.works}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

WorksPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default WorksPage

export const worksPageQuery = graphql`
  query WorksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        description
        main {
          heading
          description
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        works {
          title
          job
          year
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
