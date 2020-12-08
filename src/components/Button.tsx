import React from 'react'

interface IButtonProps
{
	children: React.ReactNode;
	className?: string;
	onClick: () => void;
	borderRadiusLeft?: boolean;
}

export default function Button({ children, className, onClick, borderRadiusLeft }: IButtonProps): JSX.Element {
	return (
		<button
			className={`button ${className ? className : ''} ${borderRadiusLeft ? 'button--radius-left' : ''}`}
			onClick={() => onClick()}>
			{children}
		</button>
	);
}