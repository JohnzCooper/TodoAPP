import React from 'react';

export interface ButtonProps {
    /**
    * Is this the principal call to action on the page?
    */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Button contents
     */
    label: string;
    /**
     * Button behaviour with form data
     */
    disabled?: boolean;
    /**
     * Button behaviour with form data
     */
    display?: boolean;
	/**
	 * What type should it be?
	 */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = ({ primary = false, backgroundColor, label, disabled= false, display=true, type="button", ...props }) => {
    const mode = primary ? 'bg-green text-white hover:text-white hover:bg-green-light' : 'bg-red text-white hover:text-white hover:bg-red-light';
    return (
        <button
            type={type}
            disabled={disabled}
            className={ display ? ['flex-no-shrink p-2 border-2 rounded text-teal border-teal', mode].join(' ') : 'hidden' }
            {...props}
        >
            {label}
        </button>
    );
};