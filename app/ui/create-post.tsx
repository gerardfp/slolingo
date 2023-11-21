import {sql} from '@vercel/postgres'
import { revalidatePath } from 'next/cache';
import { getSession } from '@auth0/nextjs-auth0';

export function CreatePost(){

    async function create(formData: FormData) {
        'use server';

        console.log(formData.get('content'));

        const { user } = await getSession() || { user: null};
        
        if (user && formData.get('content')) {
            const content = formData.get('content')?.toString();
            await sql`INSERT INTO posts(content, user_id) VALUES(${content}, ${user.user_id})`

            revalidatePath('/');
        }
    }

    return <form action={create}>
        <input type="text" name="content" className="text-black" />
        <input type="submit" value="crear" />
    </form>
}