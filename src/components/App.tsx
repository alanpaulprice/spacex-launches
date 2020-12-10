import React, { useState, useEffect } from 'react';
import { fetchLaunches, sortLaunchesByDate, filterLaunchesByYear, removeArrayDuplicates, sortNumbers } from '../Utilities';
import Header from './Header';
import Button from './Button';
import Select from './Select';
import ResultsList from './ResultsList';
import { ILaunchDataItem } from '../interfaces/ILaunchDataItem';
import LaunchImage from '../assets/images/launch-home.png';
import SelectIcon from '../assets/icons/select@2x.png';
import SortIcon from '../assets/icons/sort.png';

export default function App(): JSX.Element {
	const [launches, setLaunches] = useState<Array<ILaunchDataItem>>([]);
	const [sortDateDescending, setSortDateDescending] = useState<boolean>(false);
	const [launchYearFilterParameter, setLaunchYearFilterParameter] = useState<string>('All');

	useEffect(() => {
		updateLaunches();
	}, []);

	function updateLaunches(): void {
		fetchLaunches().then((launches: Array<ILaunchDataItem>) => setLaunches([...launches]));
	}

	function toggleSortAscending(): void {
		setSortDateDescending(!sortDateDescending);
	}

	function updateFilter(option: string): void {
		setLaunchYearFilterParameter(option);
	}

	function buildFilterDropdownListOptions(launches: Array<ILaunchDataItem>): Array<string> {
		const years: Array<number> = launches.map((launch: ILaunchDataItem): number => parseInt(launch.launch_year));
		const unique: Array<number> = removeArrayDuplicates(years);
		const sorted: Array<number> = sortNumbers(unique, true);
		const strings: Array<string> = sorted.map((year: number): string => String(year));
		strings.unshift('All');
		return strings;
	}

	function buildResultsListData(launches: Array<ILaunchDataItem>): Array<ILaunchDataItem> {
		const filtered = filterLaunchesByYear(launches, launchYearFilterParameter);
		const sorted = sortLaunchesByDate(filtered, sortDateDescending);
		return sorted;
	}

	return (
		<div className="app">
			<Header updateLaunches={updateLaunches} />
			<main className="app__main">
				<div className="app__filter-sort">
					<Select
						dropdownListOptions={buildFilterDropdownListOptions(launches)}
						onOptionSelect={(option: string) => updateFilter(option)}>
						Filter by Year
						<img className="header__logo-image" src={SelectIcon} alt="Select" />
					</Select>
					<Button onClick={toggleSortAscending}>
						Sort {sortDateDescending ? 'Ascending' : 'Descending'}
						<img className="header__logo-image" src={SortIcon} alt="Sort" />
					</Button>
				</div>
				<div className="app__left-column">
					<img className="app__main-image" src={LaunchImage} alt="A rocket launching" />
				</div>
				<div className="app__right-column">
					<ResultsList launches={buildResultsListData(launches)} />
				</div>
			</main>
		</div>
	);
}