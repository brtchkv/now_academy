import { graphql } from 'gatsby';

export const imageSharpFluid = graphql`
	fragment ImageSharpFluid on ImageSharp {
		fluid(webpQuality: 100, quality: 100) {
			base64
			tracedSVG
			aspectRatio
			src
			srcSet
			srcWebp
			srcSetWebp
			sizes
			originalImg
			originalName
			presentationWidth
			presentationHeight
		}
	}
`;
