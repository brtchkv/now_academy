import { Col, Row } from 'antd';
import * as React from 'react';
import {CSSProperties} from 'react';

export const KeyValueText: React.FunctionComponent<{ text: string, value: string, colStyle?: Partial<CSSProperties>}> = ({ text, value, colStyle }) => (
	<Row>
		<Col span={6}>
			<div>
				<span style={{lineHeight: '25px', fontSize: 16}}>{text}</span>
			</div>
		</Col>
		<Col span={18}>
			<p style={{lineHeight: '25px', fontSize: 16, ...(colStyle || {})}}><b>{value}</b></p>
		</Col>
	</Row>
);
