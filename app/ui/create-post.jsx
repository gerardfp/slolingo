import {sql} from '@vercel/postgres'
import { revalidatePath } from 'next/cache';
import { getSession } from '@auth0/nextjs-auth0';

export function CreatePost(){

    async function create(formData) {
        'use server';

        const { user } = await getSession() || { user: null};
        
        if (user) {
            await sql`INSERT INTO posts(content, user_id) VALUES(${formData.get('content')}, ${user.user_id})`

            revalidatePath('/');
        }
    }

    return <form action={create}>
        <input type="text" name="content" />
        <input type="submit" value="crear" />
    </form>
}