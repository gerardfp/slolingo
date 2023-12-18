import Link from 'next/link'
import { getSession } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';
import { PostStream } from './ui/post-stream';
import { CreatePost } from './@create/create/page';
import { MainNav } from './ui/main-nav';
import { InputDev} from './ui/input-dev';

export default async function Home() {
  const { user } = await getSession() || { user: null};

  const posts = (await sql`SELECT * FROM posts JOIN users USING(user_id)`).rows;

  return (
    <>
    { user ?
      <>
      <div className="flex flex-col gap-8 min-h-screen">
        <PostStream posts={posts}></PostStream>
      </div>
      </>
    :
    <div>
          <p>This is the landing page</p>
          <a href="/api/auth/login">Login</a>
      </div>
    }
    <InputDev></InputDev>
    </>
    )
}
