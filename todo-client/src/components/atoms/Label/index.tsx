
import React from 'react';

export interface LabelProps {
	text?: string;
	tailwindClass?: string;
}

export const Label: React.FC<LabelProps> = ({ tailwindClass, text = '', ...props }) => {
	return (
		<label 
			className={[`${tailwindClass}`].join(' ')} 
			{...props} 
		>
		{text}
		</label>
	);
};