import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';
import { MainNav } from './ui/main-nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Slomics',
  description: 'Slo social network',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const { user } = await getSession() || { user: null};

  return (
    <html lang="en" className="min-h-screen">
      <UserProvider>
        
        <body className=" min-h-screen">
        { user ?
          <div className="flex min-h-screen">
            <MainNav user={user}></MainNav>
            {children}
          </div>
         :
         <>
          {children}
         </>
        }
        </body>
      </UserProvider>
    </html>
  )
}
