import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
// import * as styles from '../styles/home.module.css'
// => 최상위 컴포넌트에 한번만 적용시키면 된다.

export default function Home() {
  // const { title, description } = data.site.siteMetadata
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
        <img src="/banner.png" alt="banner" style={{ maxWidth: "100%" }} />
      </section>
    </Layout>
  )
}

// graphql에서 가져온 아래 데이터는 컴포넌트의 Prop으로 들어간다.
// export const query = graphql`
//   query SiteInfo {
//     site {
//       siteMetadata {
//         description
//         title
//       }
//     }
//   }
// `
