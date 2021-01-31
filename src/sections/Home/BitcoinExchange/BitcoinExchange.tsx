import Iframe from 'react-iframe'
import styled from 'styled-components';
import * as React from 'react';

export const BitcoinExchange = () => {
	const onLoad = () => {
		window.scrollTo(0, 0);
	};
  return (
	  <StyledContainer>
		  <Iframe id='iframe-widget'
		          src='https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=0.1&from=btc&link_id=f85e498645e8f3&to=eth&FAQ=true&logo=true'
		          width='100%' height='100%' frameBorder='0' onLoad={onLoad}></Iframe>
		  <script type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
	  </StyledContainer>
  );
};

const StyledContainer = styled.div`
   max-width: 617px;
   min-height: 350px;
   height: 100%;
   margin: 0 auto;
`;
