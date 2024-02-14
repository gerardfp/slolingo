import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { sql } from '@vercel/postgres';
import { PostStream } from './ui/post-stream';


export default async () => {
  const { user } = await getSession() || { user: null};

  if (user) {

    const posts = (await sql`SELECT * FROM posts WHERE user_id = ${user.user_id}`).rows;
  }

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
    </>
    )
}
