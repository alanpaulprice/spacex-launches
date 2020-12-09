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