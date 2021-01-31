import { Col, Row } from 'antd';
import * as React from 'react';

interface Props {
	attribute: string;
	value: string;
}

export const Attribute: React.FunctionComponent<Props> = ({ attribute, value, }) => {
	return (
		<Row>
			<Col span={12}>
				<div className="attribute-name">
					<span style={{lineHeight: '23px'}}>{attribute}</span>
				</div>
			</Col>
			<Col span={12}>
				<span style={{lineHeight: '23px'}} className="attribute-value">{value}</span>
			</Col>
		</Row>
	);
};

export default Attribute;
