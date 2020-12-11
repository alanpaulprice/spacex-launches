import React, { useState, useEffect } from 'react';
import { fetchLaunches, sortLaunchesByDate, filterLaunchesByYear } from '../Utilities';
import Header from './Header';
import Button from './Button';
import Filter from './Filter';
import ResultsList from './ResultsList';
import Loading from './Loading';
import { ILaunchDataItem } from '../interfaces/ILaunchDataItem';
import LaunchImage from '../assets/images/launch-home.png';
import SortIcon from '../assets/icons/sort.png';

export default function App(): JSX.Element {
	const [launches, setLaunches] = useState<Array<ILaunchDataItem>>([]);
	const [sortDateDescending, setSortDateDescending] = useState<boolean>(false);
	const [launchYearFilterParameter, setLaunchYearFilterParameter] = useState<string>('All');
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		updateLaunches();
	}, []);

	function updateLaunches(): void {
		setLoading(true);
		fetchLaunches()
			.then((launches: Array<ILaunchDataItem>) => setLaunches([...launches]))
			.then(() => setLoading(false));
	}

	function toggleSortAscending(): void {
		setSortDateDescending(!sortDateDescending);
	}

	function updateFilter(option: string): void {
		setLaunchYearFilterParameter(option);
	}

	return (
		<div className="app">
			<Header updateLaunches={updateLaunches} />
			<main className="app__main">
				<div className="app__filter-sort">
					<Filter launches={launches} updateFilter={updateFilter} />
					<Button onClick={toggleSortAscending}>
						Sort {sortDateDescending ? 'Ascending' : 'Descending'}
						<img className="header__logo-image" src={SortIcon} alt="Sort" />
					</Button>
				</div>
				<div className="app__left-column">
					<img className="app__main-image" src={LaunchImage} alt="A rocket launching" />
				</div>
				<div className="app__right-column">
					{loading ?
						<Loading />
						:
						<ResultsList
							launches={launches}
							sortDateDescending={sortDateDescending}
							launchYearFilterParameter={launchYearFilterParameter} />
					}
				</div>
			</main>
		</div>
	);
}