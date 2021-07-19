// 파일이 매번 빌드되면서 한번 실행되는 파일.

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query ProjectQuery {
      projects: allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.projects.nodes.forEach(node => {
    createPage({
      path: "/projects/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/project-detail.js"),
      context: { slug: node.frontmatter.slug },
      // 컴포넌트 쿼리의 인수로 들어간다.
    })
  })
}
