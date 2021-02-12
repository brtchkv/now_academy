import styled from 'styled-components';
import * as React from 'react';

import { GlossaryList } from '@glossary/GlossaryList';

export const FoundTerms = ({ terms }) => {
	const termById = terms.reduce((acc, term) => {
		acc[term.id] = term;
		return acc;
	}, {});
	return (
		<>
			{terms.length ? <h2>Found terms:</h2> : undefined}
			<GlossaryList terms={terms} termById={termById}/>
		</>
	)
};

