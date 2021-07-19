import React from "react"
import Layout from "../components/Layout"
import { details, featured } from "../styles/project-details.module.css"
import { GatsbyImage, getImage, html } from "gatsby-plugin-image"
import { graphql } from "gatsby"

export default function projectDetail({ data }) {
  const featuredImage = getImage(
    data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData
  )
  const htmlText = data.markdownRemark.html
  const { title, stack } = data.markdownRemark.frontmatter
  return (
    <Layout>
      <div className={details}>
        <h2>title</h2>
        <h3>stack</h3>
        <div className={featured}>
          <GatsbyImage image={featuredImage} alt="Banner" />
        </div>
        <div className={html} dangerouslySetInnerHTML={{ __html: htmlText }} />{" "}
      </div>
    </Layout>
  )
}

// query 다음의 이름은 유니크해야 한다.
export const query = graphql`
  query ProjectDetail($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
              layout: FULL_WIDTH
            )
          }
        }
      }
    }
  }
`
