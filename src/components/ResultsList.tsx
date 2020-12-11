import React from 'react'
import ResultsListItem from './ResultsListItem';
import { ILaunchDataItem } from '../interfaces/ILaunchDataItem';

interface IResultsListProps
{
	launches: Array<ILaunchDataItem>
}
export default function ResultsList({ launches }: IResultsListProps): JSX.Element {
	return (
		<ul className="results-list">
			{launches.map((launch, index) => <ResultsListItem
				key={index}
				flightNumber={launch.flightNumber}
				launch={launch.missionName}
				date={launch.launchDateUnix}
				rocket={launch.rocketName} />)}
		</ul>
	);
}