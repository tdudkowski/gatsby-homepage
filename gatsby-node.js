// https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/

const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

const getCurrentDate = () => {
  const d = new Date()
  let month = (d.getMonth() + 1).toString()
  if (month.length < 2) {
    month = `0${month}`
  }
  let day = d.getDate().toString()
  if (day.length < 2) {
    day = `0${day}`
  }
  return `${d.getFullYear()}-${month}-${day}`
}

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `blog` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogFBTemplate.js");
  const articleTemplate = path.resolve("./src/templates/articleFBTemplate.js");
  return graphql(`	{
    blogs: allMdx(
      filter: { fileAbsolutePath: { glob: "**/src/pages/festung-breslau/posts/*.mdx" }, frontmatter: {published:{ eq: true} } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
              nodes {
          fields {
            slug
            currentDate
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            relativeDate:  date(fromNow: true locale: "de-DE")
            date1945
            published
          }
        }
      }

      articles: allMdx(
        filter: { fileAbsolutePath: { glob: "**/src/pages/festung-breslau/articles/*.mdx" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
                nodes {
            fields {
              slug
              currentDate
            }
            frontmatter {
              title
              date(formatString: "YYYY-MM-DD")
              published
            }
          }
        }
    }
  `).then((result) => {
    if (result.errors) {
      // throw result.errors;
      Promise.reject(result.errors);
    }
    const posts = result.data.blogs.nodes;
    const currentDate = getCurrentDate();
    // const postFiltered = posts.filter(item => item.frontmatter.date <= currentDate)
    const postFiltered = posts;
    const articles = result.data.articles.nodes;

    // const posts = result.data.allMarkdownRemark.edges
    const postsPerPage = 10
    const numPages = Math.ceil(postFiltered.length / postsPerPage)
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `festung-breslau/0` : `festung-breslau/${i}`,
        component: path.resolve("./src/templates/blogFBListTemplate.js"),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
        },
      })
    });

    postFiltered.forEach(post => {
      createPage({
        path: "festung-breslau/blog" + post.fields.slug,
        component: blogTemplate,
        ...post,
        context: {
          ...post.context,
          slug: post.fields.slug,
          currentDate: post.fields.currentDate,
          // currentDate: getCurrentDate(),
        },
      });
    });

    articles.forEach(article => {
      createPage({
        path: "festung-breslau/article" + article.fields.slug,
        component: articleTemplate,
        ...article,
        context: {
          ...article.context,
          slug: article.fields.slug,
          currentDate: article.fields.currentDate,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
    createNodeField({
      name: `currentDate`,
      node,
      value: getCurrentDate(),
    });
  }
};

// ARTICLES

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions

  //   const getArticles = makeRequest(
  //     graphql,
  //     `
  //     {
  //       mdx {
  //         edges {
  //           node {
  //             id
  //           }
  //         }
  //       }
  //     }
  //     `
  //   ).then(result => {
  //     // Create pages for each article.
  //     result.data.allMdx.edges.forEach(({ node }) => {
  //       createPage({
  //         path: `articles/${node.id}`,
  //         component: path.resolve(`./src/templates/articleFBTemplate.js`),
  //         context: {
  //           id: node.id,
  //         },
  //       })
  //     })
  //   })

  //   // Query for articles nodes to use in creating pages.
  //   return getArticles
// }