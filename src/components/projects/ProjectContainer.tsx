import React from 'react';
import { Link } from 'react-router';

interface ProjectContainerProps {
    title: string;
    thumbnail?: null;
    tech_stack?: string[]; // TODO: Add badges
    links?: {name: string, href: string, new_tab?: boolean}[];
    children?: React.ReactNode;
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({
    title,
    tech_stack,
    links,
    children,
}: ProjectContainerProps) => {
    return (
    <div className='project-container'>
        {/* Title + Tech stack / Links */}
        <div className='project-title-bar'>
            <div className='flex flex-col'>
                <h2 className='text-3xl'>{title}</h2>
                <div className='flex flex-wrap md:flex-row text-xl opacity-75'>
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
            <div className='project-links flex flex-row gap-x-2 text-xl pt-2'>
            {links?.map((el,i) => (
                <Link to={el.href} key={`link_${i}`} target={el.new_tab? '_blank' : undefined}>
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