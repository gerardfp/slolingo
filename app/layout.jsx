import './globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';
import MainNav from './ui/main-nav';

export const metadata = {
  title: 'Slomics',
  description: 'Slo social network',
}

export default async function Layout({ children, create }) {
  const { user } = await getSession() || { user: null};

  return (
    <html lang="en" className="min-h-screen">
      <UserProvider>
        
        <body className=" min-h-screen">
          
          { user ?
          <>
            <>
            { create }
            </>
            <div className="flex min-h-screen">
              <MainNav user={user}></MainNav>
              <div className='p-8'>
                { children }
              </div>
            </div>
          </>
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
