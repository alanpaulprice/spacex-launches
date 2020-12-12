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

	function buildResultsListItems(launches: Array<ILaunchDataItem>): Array <JSX.Element> {
		return buildResultsListData(launches)
			.map(({ number, name, dateUnix, rocket }: ILaunchDataItem, index: number) => (
			<ResultsListItem
				key={index}
				number={number}
				launch={name}
				dateUnix={dateUnix}
				rocket={rocket} />
			))
	}

	return (
		<ul className="results-list">
			{buildResultsListItems(launches)}
		</ul>
	);
}