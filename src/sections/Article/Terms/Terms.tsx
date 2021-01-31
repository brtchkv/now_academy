import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

import * as React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

import { TermsModal } from '@components/Modal/TermsModal';
import { Tag } from '@components/global';

export const Terms: React.FunctionComponent = ({ terms }) => {
	const childRef = useRef();

	return (
		<div>
			{terms.map((term, i) => (
				<Tag key={i} onClick={() => childRef.current.showModal(i)}>{term ? term.name : ''}</Tag>
			))}

			<TermsModal ref={childRef} terms={terms}/>
		</div>
	);
};


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
    }
`;
