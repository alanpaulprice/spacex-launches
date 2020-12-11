import React from 'react';
import { removeArrayDuplicates, sortNumbers } from '../Utilities';
import Select from './Select';
import SelectIcon from '../assets/icons/select@2x.png';
import { ILaunchDataItem } from '../interfaces/ILaunchDataItem';

interface IFilterProps {
	launches: Array<ILaunchDataItem>;
	updateFilter: (option: string) => void;
}

export default function Filter({ launches, updateFilter }: IFilterProps): JSX.Element {
	function buildFilterDropdownListOptions(launches: Array<ILaunchDataItem>): Array<string> {
		const years: Array<number> = launches.map((launch: ILaunchDataItem): number => parseInt(launch.launchYear));
		const unique: Array<number> = removeArrayDuplicates(years);
		const sorted: Array<number> = sortNumbers(unique, true);
		const strings: Array<string> = sorted.map((year: number): string => String(year));
		strings.unshift('All');
		return strings;
	}

	return (
		<Select
			dropdownListOptions={buildFilterDropdownListOptions(launches)}
			onOptionSelect={(option: string) => updateFilter(option)}>
			Filter by Year
			<img className="header__logo-image" src={SelectIcon} alt="Select" />
		</Select>
	);
}
