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
				number={launch.flight_number}
				launch={launch.mission_name}
				date={launch.launch_date_unix}
				rocket={launch.rocket.rocket_name} />)}
		</ul>
	);
}