import * as React from 'react';

interface Props {
	className: string;
	content: string;
}

export const HTMLContent: React.FunctionComponent<Props> = ({ content, className }) => (
	<div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const Content: React.FunctionComponent<Props> = ({ content, className }) => (
	<div className={className}>{content}</div>
);

export default HTMLContent;
