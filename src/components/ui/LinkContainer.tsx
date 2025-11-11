import React from 'react';
import type { ReactElement } from 'react';
import { Link } from 'react-router';

import LinkElement from './LinkElement';

interface LinkContainerProps {
    separator?: string;
    children?: ReactElement<typeof Link> 
        | ReactElement<typeof LinkElement> 
        | Array<ReactElement<typeof Link> 
        | ReactElement<typeof LinkElement>>;
}

const LinkContainer: React.FC<LinkContainerProps> = ({
    separator = '-',
    children,
}: LinkContainerProps) => {
    if (!children) return null;
    const elements = Array.isArray(children) ? children : [children];

    return (
        <div className='flex flex-row gap-x-2 text-xl justify-between w-full'>
            {elements.map((element, idx) => (
                <React.Fragment key={idx}>
                    {element}
                    {idx < elements.length - 1 && (
                        <span className="mx-1">{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default LinkContainer;