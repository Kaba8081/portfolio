import React from 'react';
import { useMatches } from 'react-router';

interface BreadcrumbsProps {
    separator?: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
    separator= '/',
} : BreadcrumbsProps) => {
    const matches = useMatches();
    const crumbs: string[] = [];

    matches.forEach((match) => {
        const handle = (match.handle ?? {}) as { name?: string; breadcrumbPath?: string };

        if (handle.breadcrumbPath) {
            crumbs.push(...handle.breadcrumbPath);
        }
        if (handle.name) {
            crumbs.push(handle.name);
        }
    });

    return (
    <nav className=''>
        {crumbs.map((crumb, index) => (
            <span key={index}>
                {crumb}
                {index < crumbs.length - 1 && separator}
            </span>
        ))}
        {window.location.pathname !== '/' && (
        <button
            type="button"
            aria-label="Go back"
            onClick={() => window.history.back()}
            className='ml-2 bg-none border-none cursor-pointer'
            >
            &larr;
        </button>
        )}
    </nav>
    );
}

export default Breadcrumbs;