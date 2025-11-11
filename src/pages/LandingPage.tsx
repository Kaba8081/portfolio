import React from 'react';
import { Link } from 'react-router';

import { LinkContainer, TechIcon } from '../components';
import { 
    PythonIcon,
    TypescriptIcon,
    PostgresqlIcon,
    DockerIcon,
    ReactIcon,
    DjangoIcon,
} from '../assets';

const LandingPage: React.FC = () => {
    let age = new Date().getTime() - new Date('04-12-2004').getTime();
    age = Math.floor(age / (1000 * 60 * 60 * 24 * 365.25));

    return (
    <div className='main-container'>
        <div className='flex flex-col gap-y-2 md:gap-y-4'>
            {/* Title & Subtitle */}
            <div className='flex flex-col gap-y-0 justify-start'>
                <h1>Kacper Baum-Azbum</h1>
                
                <h2>Software Engineer</h2>
            </div>

            {/* Description */}
            <div className='flex flex-row justify-start px-4 md:px-8'>
                <p>
Jestem {age} letnim studentem informatyki na Uniwersytecie Bielsko-Bialskim,<br/>
specjalizującym się w projektach w językach Python oraz Typescript<br/>
                </p>
            </div>
        </div>

        {/* Icons */}
        <div className='icon-container'>
            <TechIcon icon={PythonIcon} alt='Python icon'/>
            <TechIcon icon={TypescriptIcon} alt='Typescript icon'/>
            <TechIcon icon={DockerIcon} alt='Docker icon'/>
            <TechIcon icon={PostgresqlIcon} alt='PostgreSQL icon'/>
            <TechIcon icon={ReactIcon} alt='React.js icon'/>
            <TechIcon icon={DjangoIcon} alt='Django icon'/>
        </div>

        {/* Links */}
        <LinkContainer>
            <Link to='https://www.linkedin.com/in/kacper-baum-azbum/' target='_blank'>[Linkedin]</Link>
            <Link to='https://github.com/Kaba8081' target='_blank'>[Github]</Link>
            <Link to='/experience'>[Doświadczenie]</Link>
            <Link to='/projects'>[Projekty]</Link>
        </LinkContainer>
    </div>
    );
}

export default LandingPage;