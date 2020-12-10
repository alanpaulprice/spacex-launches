import { ILaunchDataItem } from './interfaces/ILaunchDataItem';

export async function fetchLaunches()
{
	try {
		const response = await fetch('https:api.spacexdata.com/v3/launches');
		const json = await response.json();
		return json;
	} catch(error) {
		console.error(`Error fetching launches: ${error}`);
	}
}

export function sortLaunchesByDate(launches: Array<ILaunchDataItem>, descending: boolean): Array<ILaunchDataItem> {
	return descending ?
		launches.sort((a, b) => b.launch_date_unix - a.launch_date_unix)
		:
		launches.sort((a, b) => a.launch_date_unix - b.launch_date_unix);
}

export function filterLaunchesByYear(launches: Array<ILaunchDataItem>, year: string) {
	return year === 'All' ?
		launches
		:
		launches.filter((launch) => launch.launch_year === year);
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