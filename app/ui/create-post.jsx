'use client'

import createPost from '../ui/create-post';

export default () => {
    return (
        <form action={createPost} className='flex gap-2'>
            <input name="content" className='rounded p-2'/>    
            <input type="submit" value="Publicar" className="text-white rounded bg-blue-400 p-2" />
        </form>
    )
}