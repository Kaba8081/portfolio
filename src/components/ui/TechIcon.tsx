import React from 'react';

interface TechIconProps {
    icon: string;
    alt?: string;
}

const TechIcon: React.FC<TechIconProps> = ({icon, alt}: TechIconProps) => {
    return (
        <img 
            src={icon}
            alt={alt}
            className='max-w-16 max-h-16'
        />
    );
}

export default TechIcon;