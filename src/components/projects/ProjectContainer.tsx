import React from 'react';
import { Link } from 'react-router';

interface ProjectContainerProps {
    title: string;
    thumbnail?: any;
    tech_stack?: string[]; // TODO: Add badges
    links?: {name: string, href: string}[];
    children?: React.ReactNode;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
    title,
    tech_stack,
    links,
    children,
}: ProjectContainerProps) => {
    return (
    <div className='flex flex-col gap-y-4'>
        {/* Title + Tech stack / Links */}
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
                <h2 className='text-3xl'>{title}</h2>
                <div className='flex flex-row text-xl opacity-75 '>
                {tech_stack?.map((el,i) => (
                    <p 
                        className='pr-3'
                        key={`tech_${i}`}
                    >
                        {el}
                    </p>
                ))}
                </div>
            </div>
            <div className='flex flex-row gap-x-2 text-xl pt-2'>
            {links?.map((el,i) => (
                <Link to={el.href} key={`link_${i}`}>
                    [{el.name}]
                </Link>
            ))}
            </div>
        </div>

        {/* Description */}
        {children}
    </div>
    );
}

export default ProjectContainer;