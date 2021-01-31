import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

import * as React from 'react';
import {Link} from 'gatsby';

export const CartIcon: React.FunctionComponent<{quantity?: number}> = ({quantity}) => (
	<Link to={'/cart/'}>
		<Badge count={quantity}>
				<ShoppingCartOutlined style={{ fontSize: '20px', color: '#fff' }}/>
		</Badge>
	</Link>
);

export default CartIcon;
