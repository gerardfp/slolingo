'use server'

import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export async function createPost(formData) {
    'user server'
    
    const { user } = await getSession() || { user: null};
    
    if (user && formData.get('content')) {
        const content = formData.get('content')?.toString();
        await sql`INSERT INTO posts(content, user_id) VALUES(${content}, ${user.user_id})`

        revalidatePath('/');
    }
}