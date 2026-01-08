import React from 'react';
import type { ReactElement } from 'react';
import { Link } from 'react-router';

interface LinkContainerProps {
    separator?: string;
    children?: ReactElement<typeof Link> 
        | Array<ReactElement<typeof Link>>;
}

const LinkContainer: React.FC<LinkContainerProps> = ({
    separator = '-',
    children,
}: LinkContainerProps) => {
    if (!children) return null;
    const elements = Array.isArray(children) ? children : [children];

    return (
        <div className='flex flex-col gap-x-2 text-xl w-full items-center md:justify-between md:flex-row max-w-[720px] mx-auto'>
            {elements.map((element, idx) => (
                <React.Fragment key={idx}>
                    {element}
                    {idx < elements.length - 1 && (
                        <span className="mx-1 hidden md:block">{separator}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default LinkContainer;