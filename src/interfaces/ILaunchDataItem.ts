export interface ILaunchDataItem {
	flight_number: number;
	mission_name: string;
	launch_date_utc: string;
	rocket: {
		rocket_name: string;
	}
}