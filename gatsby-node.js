exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
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
      }
    `
  );

  if (result.errors) {
    throw result.errors
  }

  const levels = result.data.levels.edges;
  const allStrapiTerm = result.data.strapiTerms.nodes;
  const cryptocurrencyMainTerms = result.data.cryptocurrencyIn3Minutes.terms;
  console.log('cryptocurrencyMainTerms === ', cryptocurrencyMainTerms);
  console.log('allStrapiTerm === ', allStrapiTerm);

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

	levels.forEach((level) => {
		// const articles = level.node.orderedArticles.map(({article}) => article);
		// articles.forEach((article, i) => {
		// 	const prev = articles[i - 1] ? { title: articles[i - 1].title, slug: articles[i - 1].slug }  : undefined;
		// 	const next = articles[i + 1] ? { title: articles[i + 1].title, slug: articles[i + 1].slug }  : undefined;
		// 	createPage({
		// 		path: `/${level.node.slug}/${article.slug}`,
		// 		component: require.resolve("./src/templates/article.jsx"),
		// 		context: {
		// 			prev,
		// 			next,
		// 			id: article.id,
		// 		},
		// 	})
		// });

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

exports.onCreateBabelConfig = ({ actions }) => {
	actions.setBabelPlugin({
		name: 'babel-plugin-import',
		options: {
			libraryName: 'antd',
			style: true
		}
	})
};
