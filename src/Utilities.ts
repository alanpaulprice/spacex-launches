import { ILaunchDataItem } from './interfaces/ILaunchDataItem';

export async function fetchLaunches() {
	try {
		const response = await fetch('https://api.spacexdata.com/v3/launches');
		const json = await response.json();
		const mapped = json.map((item: any) => (
			{
				number: item.flight_number,
				name: item.mission_name,
				dateUnix: item.launch_date_unix,
				year: item.launch_year,
				rocket: item.rocket.rocket_name
			}
		));
		return mapped;
	} catch(error) {
		console.error(`Error fetching launches: ${error}`);
	}
}

export function sortLaunchesByDate(launches: Array<ILaunchDataItem>, descending: boolean): Array<ILaunchDataItem> {
	return descending ?
		launches.sort((a, b) => b.dateUnix - a.dateUnix)
		:
		launches.sort((a, b) => a.dateUnix - b.dateUnix);
}

export function filterLaunchesByYear(launches: Array<ILaunchDataItem>, year: string) {
	return year === 'All' ?
		launches
		:
		launches.filter((launch) => launch.year === year);
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