import React from 'react';

interface TechIconProps {
    icon: string | React.ReactNode;
    alt?: string;
}

const TechIcon: React.FC<TechIconProps> = ({icon, alt}: TechIconProps) => {
    if (typeof icon === 'string') {
        return (
            <img 
                src={icon}
                alt={alt}
                className='tech-icon'
            />
        );
    }
    return <>{icon}</>;
}

export default TechIcon;