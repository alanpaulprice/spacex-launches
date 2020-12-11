import { ILaunchDataItem } from './interfaces/ILaunchDataItem';

export async function fetchLaunches()
{
	try {
		const response = await fetch('https://api.spacexdata.com/v3/launches');
		const json = await response.json();
		const mapped = json.map((item: any) => (
			{
				flightNumber: item.flight_number,
				missionName: item.mission_name,
				launchDateUnix: item.launch_date_unix,
				launchYear: item.launch_year,
				rocketName: item.rocket.rocket_name
			}
		));
		return mapped;
	} catch(error) {
		console.error(`Error fetching launches: ${error}`);
	}
}

export function sortLaunchesByDate(launches: Array<ILaunchDataItem>, descending: boolean): Array<ILaunchDataItem> {
	return descending ?
		launches.sort((a, b) => b.launchDateUnix - a.launchDateUnix)
		:
		launches.sort((a, b) => a.launchDateUnix - b.launchDateUnix);
}

export function filterLaunchesByYear(launches: Array<ILaunchDataItem>, year: string) {
	return year === 'All' ?
		launches
		:
		launches.filter((launch) => launch.launchYear === year);
}

export function removeArrayDuplicates<T>(array: Array<T>): Array<T> {
	return [...new Set(array)];
}
	
export function sortNumbers(array: Array<number>, descending: boolean): Array<number> {
	return descending ?
		array.sort((a, b) => b - a)
		:
	 	array.sort((a, b) => a - b);
}