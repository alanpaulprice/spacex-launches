import React, { useState } from 'react';
import Button from './Button';

interface ISelectProps {
	children: React.ReactNode;
	dropdownListOptions: Array<string>
	onOptionSelect: (option: string) => void;
}

export default function Select({ children, dropdownListOptions, onOptionSelect }: ISelectProps): JSX.Element {
	const [optionsVisible, setOptionsVisible] = useState<boolean>(false);

	function toggleOptionsVisibility(): void {
		setOptionsVisible(!optionsVisible);
	}

	function onOptionClick(option: string): void {
		toggleOptionsVisibility();
		onOptionSelect(option);
	}

	function buildDropdownListOptions(options: Array<string>): Array<JSX.Element> {
		return options.map((option: string): JSX.Element => (
			<li
				className="select__option"
				key={option}>
				<Button className="select__option-button" onClick={() => onOptionClick(option)}>
					{option}
				</Button>
			</li>
		));
	}

	return (
		<div className="select">
			<Button className="select__button" onClick={toggleOptionsVisibility}>
				{children}
			</Button>
			{optionsVisible &&
				<ul className="select__options">
					{buildDropdownListOptions(dropdownListOptions)}
				</ul>
			}
		</div>
	);
}
