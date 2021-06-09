
import React from 'react';

export interface InputProps {
	/**
	 * ID of the input
	 */
	id : string;
	/**
	 * What placeholder should it be?
	 */
	placeholder?: string;
	/**
	 * What tailwind class should it be?
	 */
	tailwindClass?: string;
	/**
	 * What type should it be?
	 */
	type?: 'text' | 'email' | 'number' | 'password' | 'tel' | 'url' | 'hidden' | 'search';
    /**
     * Optional onChange handler
     */
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({id, placeholder = 'Type something', type = 'text', tailwindClass, ...props }) => {
	return (
		<input 
			id = {id}
			type={type} 
			placeholder={placeholder} 
			className={["shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker", `${tailwindClass}`].join(' ')} 
			{...props} 
		/>
	);
};