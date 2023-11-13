import { handleAuth, handleCallback } from '@auth0/nextjs-auth0'
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';

export const GET = handleAuth({
    callback: handleCallback({
        afterCallback: async (req, session, state) => {
            const { nickname, name, picture, email } = session.user;

            const result = await sql`
                INSERT INTO users(nickname, name, picture, email) 
                VALUES (${nickname}, ${name}, ${picture}, ${email})
                ON CONFLICT(email) DO
                UPDATE SET nickname = ${nickname}, name = ${name}, picture = ${picture}
                RETURNING user_id
                `
            session.user.user_id = result.rows[0].user_id;
            console.log(`LOGGED IN ${session.user.name} ${session.user.user_id}`);
            return session;
        }
    })
})