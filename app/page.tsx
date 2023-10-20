import Link from 'next/link'
import { getSession } from '@auth0/nextjs-auth0';

export default async function Home() {
  const { user } = await getSession() || { user: null};

  return (
    <nav>
      User: {user?.email}
    {(user ? (
        <>
          <li>
            <Link href="/profile">Client rendered profile</Link>
          </li>
          <li>
            <a href="/api/auth/logout">Logout</a>
          </li>
        </>
      ) : (
        <li>
          <a href="/api/auth/login">Login</a>
        </li>
      ))
    }
    </nav>
  )
}
