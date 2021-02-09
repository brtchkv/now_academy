exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions;
  const result = await graphql(
    `
    query Pages {
      cryptocurrencyIn3Minutes: strapiCryptocurrencyIn3Minutes {
        terms {
          id
        }
      }
      strapiTerms: allStrapiTerm {
        nodes {
          id
          strapiId
          name
          term_type {
            name
          }
          level {
            name
            slug
          }
          shortDescription
          description
        }
      }
      levels: allStrapiLevel {
        edges {
          node {
            strapiId
            name
            slug
          }
        }
      }
      allStrapiArticle {
        edges {
          node {
            id
            slug
            title
            strapiId
            level {
              name
              id
              slug
            }
          }
        }
      }
    }
    `
  );

  if (result.errors) {
    throw result.errors
  }

  const levels = result.data.levels.edges;
  const articles = result.data.allStrapiArticle.edges.sort(function(a, b) {
    if (a.node.strapiId < b.node.strapiId) return -1;
    if (a.node.strapiId > b.node.strapiId) return 1;
    return 0;
  });
  const allStrapiTerm = result.data.strapiTerms.nodes;
  const cryptocurrencyMainTerms = result.data.cryptocurrencyIn3Minutes.terms;

  const mainTerms = cryptocurrencyMainTerms.map(term => {
    return allStrapiTerm.find(t => t.strapiId === term.id);
  });

  createPage({
    path: `/`,
    component: require.resolve("./src/templates/index.jsx"),
    context: {
      mainTerms,
    },
  });

  articles.forEach((article, i) => {
    const prev = articles[i - 1] ? {
      title: articles[i - 1].node.title,
      slug: articles[i - 1].node.slug
    } : undefined;
    const next = articles[i + 1] ? {
      title: articles[i + 1].node.title,
      slug: articles[i + 1].node.slug
    } : undefined;
    createPage({
      path: `/${article.node.level.slug}/${article.node.slug}`,
      component: require.resolve("./src/templates/article.jsx"),
      context: {
        prev,
        next,
        id: article.node.strapiId,
      },
    })
  });

  levels.forEach((level) => {
    createPage({
      path: `/${level.node.slug}`,
      component: require.resolve("./src/templates/level.jsx"),
      context: {
        id: level.node.strapiId,
      },
    });

    createPage({
      path: `/search`,
      component: require.resolve("./src/templates/search.jsx"),
    })
  });

  createPage({
    path: `/glossary`,
    component: require.resolve("./src/templates/glossary.jsx"),
  });

};

exports.onCreateBabelConfig = ({
  actions
}) => {
  actions.setBabelPlugin({
    name: 'babel-plugin-import',
    options: {
      libraryName: 'antd',
      style: true
    }
  })
};