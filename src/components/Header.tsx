import React from 'react';
import Button from './Button';
import HeaderImage from '../assets/images/spacex-logo.png';
import ButtonIcon from '../assets/icons/refresh@3x.png';

interface IHeaderProps {
	updateLaunches: () => void;
}

export default function Header({ updateLaunches }: IHeaderProps): JSX.Element {
	return (
		<header className="header">
			<div className="header__logo">
				<img className="header__logo-image" src={HeaderImage} alt="The SpaceX Logo" />
				Launches
			</div>
			<Button onClick={updateLaunches} borderRadiusLeft>
				Reload Data
				<img src={ButtonIcon} alt="Refresh"/>
			</Button>
		</header>
	);
}
