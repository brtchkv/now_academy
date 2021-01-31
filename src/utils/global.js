import { Layout } from 'antd';
import styled from 'styled-components';

const { Content } = Layout;

export const Container = styled(Content)`
	width: 100% !important;
  margin: 0 auto;
  background: ${({theme}) => theme.color.blue.regular};
	
  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }
  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }
	@media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }
	@media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1152px;
  }
  @media (min-width: ${props => props.theme.screen.xlg}) {
    max-width:1344px
  }
  
  ${props =>
	props.fluid &&
	`
    max-width: 1200px !important;
  `};
`;

export const Section = styled.section`
  padding: 64px 0;
  overflow: hidden;
  background: ${({theme}) => theme.color.blue.regular};
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }
  background: ${({theme}) => theme.color.blue.regular};

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;

export const SectionWithoutPadding = styled.section`
  overflow: hidden;
  background: ${({theme}) => theme.color.blue.regular};
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 96px 0;
  }
  background: ${({theme}) => theme.color.blue.regular};

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === 'secondary'
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`;

export const Title = styled.h2`
  padding-bottom: 36px;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
`;
