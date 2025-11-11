import React from 'react';
import { Outlet } from 'react-router';


import { 
  Navigator,
  Footer
} from './components';

const Layout: React.FC = () => {

  return (
    <div className='flex flex-col justify-start min-h-screen w-full overflow-x-hidden lg:px-[11.25%]'>
        <Navigator/>
        <main className='flex flex-col items-center justify-center w-full my-auto'>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  ); 
}

export default Layout

