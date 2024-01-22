import { sql } from '@vercel/postgres';
import { Modal } from '/app/components/modal';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getSession } from '@auth0/nextjs-auth0';

export default function create(){
    async function publicar(data){
        'use server'

        const { user } = await getSession() || { user: null};

        await sql`insert into posts(content, user_id) values(${data.get('content')}, ${user.user_id})`

        revalidatePath('/');
        redirect('/');
    }

    return (
    <Modal>
        <form action={publicar}>
            <input name="content" className='rounded p-2'/>    
            <input type="submit" value="Publicar" className="text-white rounded bg-blue-400 p-2" />
        </form>
    </Modal>
    )
}