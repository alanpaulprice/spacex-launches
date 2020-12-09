export interface ILaunchDataItem {
	flight_number: number;
	mission_name: string;
	launch_date_unix: number;
	launch_year: string;
	rocket: {
		rocket_name: string;
	}
}