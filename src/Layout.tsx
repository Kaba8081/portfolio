import React from 'react';
import { Outlet } from 'react-router';


import { 
  Navigator,
  Footer,
  PageTransition,
} from './components';

const Layout: React.FC = () => {
  return (
    <div className='flex flex-col justify-start min-h-screen w-full overflow-x-hidden px-[5%] lg:px-[11.25%]'>
        <Navigator/>
        <main className='flex flex-col items-center justify-center w-full my-auto'>
            <PageTransition>
              <Outlet/>
            </PageTransition>
        </main>
        <Footer/>
    </div>
  ); 
}

export default Layout

