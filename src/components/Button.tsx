import React from 'react'

interface ButtonProps
{
	children: React.ReactNode;
	onClick: () => void;
	borderRadiusLeft?: boolean;
}

export default function Button(props: ButtonProps) {
	const { children, onClick, borderRadiusLeft } = props;
	return (
		<button
			className={`button ${borderRadiusLeft && 'button--radius-left'}`}
			onClick={() => onClick()}>
			{children}
		</button>
	);
}