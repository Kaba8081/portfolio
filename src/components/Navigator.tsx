import React from 'react';

import Breadcrumbs from './ui/Breadcrumbs';
import LanguageSelector from './ui/LanguageSelector';


const Navigator: React.FC = () => {
    return (
        <header className='flex flex-row w-full py-4 justify-between'>
            <Breadcrumbs/>
            <LanguageSelector/>
        </header>
    );
}

export default Navigator
