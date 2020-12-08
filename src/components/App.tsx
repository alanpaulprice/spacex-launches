import React, { useState, useEffect } from 'react';
import Header from './Header';
import Button from './Button';
import ResultsList from './ResultsList';
import { ILaunchDataItem } from '../interfaces/ILaunchDataItem';
import LaunchImage from '../assets/images/launch-home.png';
import SelectIcon from '../assets/icons/select.png';
import SortIcon from '../assets/icons/sort.png';

async function fetchLaunches()
{
	try {
		const response = await fetch('https:api.spacexdata.com/v3/launches');
		const json = await response.json();
		return json;
	} catch(error) {
		console.error(`Error fetching launches: ${error}`);
	}
}

export default function App(): JSX.Element {
	const [launches, setLaunches] = useState<Array<ILaunchDataItem>>([]);

	useEffect(() => {
		updateLaunches();
	}, []);

	function updateLaunches(): void {
		fetchLaunches().then((launches: Array<ILaunchDataItem>) => setLaunches([...launches]));
	}

	return (
		<div className="app">
			<Header updateLaunches={updateLaunches} />
			<main className="app__main">
				<div className="app__filter-sort">
					<Button onClick={() => null}>
						Filter by Year
						<img className="header__logo-image" src={SelectIcon} alt="Select" />
					</Button>
					<Button onClick={() => null}>
						Sort Descending
						<img className="header__logo-image" src={SortIcon} alt="Sort" />
					</Button>
				</div>
				<div className="app__left-column">
					<img className="app__main-image" src={LaunchImage} alt="A rocket launch in progress" />
				</div>
				<div className="app__right-column">
					<ResultsList launches={launches} />
				</div>
			</main>
		</div>
	);
}