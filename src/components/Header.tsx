import React from 'react';
import Button from './Button';
import HeaderImage from '../assets/images/spacex-logo.png';
import ButtonIcon from '../assets/icons/refresh@3x.png';

export default function Header() {
	return (
		<header className="header">
			<div className="header__logo">
				<img className="header__logo-image" src={HeaderImage} alt="The SpaceX Logo" />
				Launches
			</div>
			<Button onClick={() => null} borderRadiusLeft>
				Reload Data
				<img src={ButtonIcon} alt="Refresh"/>
			</Button>
		</header>
	);
}
