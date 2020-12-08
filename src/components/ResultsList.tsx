import React from 'react'
import ResultsListItem from './ResultsListItem';

export default function ResultsList(): JSX.Element {
	return (
		<ul className="results-list">
			<ResultsListItem
				number={1}
				launch="FalconSat"
				date="24th March 2006"
				rocket="Falcon 1" />
		</ul>
	);
}
