import { Modal } from 'antd';
import Slider from 'react-slick';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'gatsby';

import linkSvg from '@assets/images/link.svg';

const { forwardRef, useImperativeHandle } = React;

export const TermsModal: React.FunctionComponent = forwardRef(({ terms }, ref) => {
	const [visible, setVisible] = useState(false);
	const [slideIndex, setSlideIndex] = useState(0);

	const showModal  = (index) => {
		setSlideIndex(index);
		setVisible(true);
	};

	const handleOk = () => {
		setVisible(false);
	};

	const handleCancel = () => {
		setVisible(false);
	};

	useImperativeHandle(ref, () => ({
		showModal(index) {
			setSlideIndex(index);
			setVisible(true);
		}
	}));

	return (
		<Modal
			visible={visible}
			onOk={handleOk}
			onCancel={handleCancel}
			destroyOnClose
			footer={null}
		>
			<Slider
				speed={500}
				initialSlide={slideIndex || 0}
				draggable={false}
				infinite={false}
				prevArrow={<StyledArrowLeftOutlined/>}
				nextArrow={<StyledArrowRightOutlined/>}
			>
				{terms.map((term, j) => (
					<div key={j}>
						<div style={{marginBottom: 20}}>
							<TermAttribute to={'/glossary'} state={{level: term.level.name}} onClick={() => setVisible(false)}>{term.level.name}</TermAttribute>
							<TermAttribute to={'/glossary'} state={{type: term.term_type.name}} onClick={() => setVisible(false)}>{term.term_type.name}</TermAttribute>
						</div>
						<TermTitle>{term.name}</TermTitle>
						<TermDescription dangerouslySetInnerHTML={{ __html: term.shortDescription }}/>
						<TermDescription dangerouslySetInnerHTML={{ __html: term.description }}/>
					</div>
				))}
			</Slider>
		</Modal>
	);
});

const StyledArrowLeftOutlined = styled(ArrowLeftOutlined)`
		&.slick-disabled {
      & svg {
	      color: #ccc;
	      cursor: default;
	    }
    }
    & svg {
	    color: #fff;
	    width: 30px;
	    height: 30px;
	    position: absolute;
	    right: 40px;
      cursor: pointer;
      @media (max-width: ${props => props.theme.screen.sm}) {
		    display: none;
		  }
    }
    
    @media (max-width: ${props => props.theme.screen.sm}) {
	    display: none!important;
	  }
`;

const StyledArrowRightOutlined = styled(ArrowRightOutlined)`
    &.slick-disabled {
      & svg {
	      color: #ccc;
	      cursor: default;
	    }
    }
    & svg {
	    color: #fff;
	    width: 30px;
	    height: 30px;
	    position: absolute;
	    left: 40px;
      @media (max-width: ${props => props.theme.screen.sm}) {
		    display: none;
		  }
    }

    @media (max-width: ${props => props.theme.screen.sm}) {
	    display: none!important;
	  }
`;

const TermArticleImg = styled.img`
	display: inline-block!important;
`;

const TermArticle = styled.div`
	padding-bottom: 7px;
`;

const LearnMore = styled.p`
	font-weight: bold;
	margin-bottom: 5px;
	color: #6A6A6A;
`;

const TermArticleLink = styled(Link)`
	color: #6A6A6A;
	text-decoration: underline!important;
	padding-right: 7px;
`;

const TermTitle = styled.p`
	font-weight: bold;
	font-size: 24px;
	line-height: 28px;
	color: #515151;
`;

const TermDescription = styled.p`
	font-size: 14px;
	line-height: 140%;
	color: #6A6A6A;
`;

const TermAttribute = styled(Link)`
	font-size: 14px;
	line-height: 140%;
	text-align: right;
	color: #909090;
	padding: 6px 12px;
	margin-right: 4px;
	display: inline-block;
	background: rgba(144, 144, 144, 0.2);
	border-radius: 2px;
`;
