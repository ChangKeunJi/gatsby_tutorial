import { graphql, Link } from "gatsby"
import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/Layout"
import { portfolio, projects } from "../../styles/projects.module.css"

export default function Projects({ data }) {
  console.log(data)
  const projectsList = data.projects.nodes
  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites</h3>
        <div className={projects}>
          {projectsList.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <GatsbyImage
                  image={getImage(project.frontmatter.thumb)}
                  alt="Banner"
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* <p>Like what you see? Email me at {contact} for a quote</p> */}
      </div>
    </Layout>
  )
}

// export page query // 컴포넌트의 prop으로 들어간다.
export const query = graphql`
  query ProjectQuery {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              gatsbyImageData(
                formats: [AUTO, WEBP, AVIF]
                placeholder: BLURRED
                layout: FULL_WIDTH
              )
            }
          }
        }
        id
      }
    }
  }
`
// 메타 데이터도 함께 담을 수 있다.
