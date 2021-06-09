
import React from 'react';
import { HeaderTag } from '../../atoms'

export interface HeaderProps {
    titleText: string;
    description?: string;
}

export const Header: React.FC<HeaderProps> = ({ titleText, description }) => {
    return (
        <header>
            <div className="mb-4 overflow-hidden text-center bg-blue text-white">
                <HeaderTag tailwindClass="text-3xl font-bold text-white uppercase tracking-tight" text={titleText} />
                <p>{description}</p>
            </div>
            <hr className="mt-4" />
        </header>
    )
}
