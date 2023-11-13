import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';

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
    <html lang="en">
      <UserProvider>
        
        <body className={inter.className}>
        { user ?
          <>
           {children}
          </>
         :
         <div>
          <p>This is the landing page</p>
          <a href="/api/auth/login">Login</a>
         </div>
        }
          
        </body>
      </UserProvider>
    </html>
  )
}
