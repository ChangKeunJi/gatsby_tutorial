import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  // console.log(data)
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & web developer based in UK</p>
          <Link className={btn} to="/projects">
            My Portfolio Project
          </Link>
        </div>
        {/* <Banner fluid={data.file.childImageSharp.fluid} /> */}
        <StaticImage
          src="../images/banner.png"
          alt="Banner"
          placeholder="blurred"
        />
      </section>
    </Layout>
  )
}

// static 이미지 같은 경우, doc에 따르면 graphql에서 data를 가져올 필요 없이
// 바로 파일 경로를 통해서 가져온다.

// export const query = graphql`
//   query Banner {
//     file(relativePath: { eq: "banner.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
