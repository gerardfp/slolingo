import './globals.css'
import type { Metadata } from 'next'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';
import { MainNav } from './ui/main-nav';

export const metadata: Metadata = {
  title: 'Slomics',
  description: 'Slo social network',
}

export default async function Layout({ children, create, yeah }) {
  const { user } = await getSession() || { user: null};

  return (
    <html lang="en" className="min-h-screen">
      <UserProvider>
        
        <body className=" min-h-screen">
          <div>
            { create }
        { yeah }
        </div>
        { user ?
          <div className="flex min-h-screen">
            <MainNav user={user}></MainNav>
            <div className='p-8'>
              { children }
            </div>
          </div>
         :
         <>
          { children }
         </>
        }
        </body>
      </UserProvider>
    </html>
  )
}
