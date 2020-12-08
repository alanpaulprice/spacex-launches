import React from 'react'

interface ButtonProps
{
	children: React.ReactNode;
	className?: string;
	onClick: () => void;
	borderRadiusLeft?: boolean;
}

export default function Button({ children, className, onClick, borderRadiusLeft }: ButtonProps): JSX.Element {
	return (
		<button
			className={`button ${className ? className : ''} ${borderRadiusLeft ? 'button--radius-left' : ''}`}
			onClick={() => onClick()}>
			{children}
		</button>
	);
}