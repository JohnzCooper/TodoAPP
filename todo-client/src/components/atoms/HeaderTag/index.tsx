
import React from 'react';

export interface HeaderTagProps {
	text?: string;
	tailwindClass?: string;
}

export const HeaderTag: React.FC<HeaderTagProps> = ({ tailwindClass, text = "", ...props }) => {
	return (
		<h1 
			className={[`${tailwindClass}`].join(' ')} 
			{...props} 
		>
		{text}
		</h1>
	);
};