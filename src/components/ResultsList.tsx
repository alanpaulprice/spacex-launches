import React from 'react'
import { sortLaunchesByDate, filterLaunchesByYear } from '../Utilities';
import ResultsListItem from './ResultsListItem';
import { ILaunchDataItem } from '../interfaces/ILaunchDataItem';

interface IResultsListProps
{
	launches: Array<ILaunchDataItem>
	sortDateDescending: boolean;
	filterYear: string;
}
export default function ResultsList({ launches, sortDateDescending, filterYear }: IResultsListProps): JSX.Element {
	function buildResultsListData(launches: Array<ILaunchDataItem>): Array<ILaunchDataItem> {
		const filtered = filterLaunchesByYear(launches, filterYear);
		const sorted = sortLaunchesByDate(filtered, sortDateDescending);
		return sorted;
	}

	return (
		<ul className="results-list">
			{buildResultsListData(launches).map((launch: ILaunchDataItem, index: number) => <ResultsListItem
				key={index}
				flightNumber={launch.flightNumber}
				launch={launch.missionName}
				date={launch.launchDateUnix}
				rocket={launch.rocketName} />)}
		</ul>
	);
}