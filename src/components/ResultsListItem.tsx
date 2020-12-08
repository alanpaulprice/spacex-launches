import React from 'react';
import { format } from 'date-fns';

interface IResultsListItemProps
{
	number: number;
	launch: string;
	date: number;
	rocket: string;
}

export default function ResultsListItem({number, launch, date, rocket}: IResultsListItemProps): JSX.Element {
	return (
		<li className="results-list-item">
			<div className="results-list-item__number">
				#{number}
			</div>
			<div className="results-list-item__launch">
				{launch}
			</div>
			<div className="results-list-item__date-rocket">
				<div className="results-list-item__date">
					{format(new Date(date * 1000), "do MMM yyyy")}
				</div>
				<div className="results-list-item__rocket">
					{rocket}
				</div>
			</div>
		</li>
	);
}
