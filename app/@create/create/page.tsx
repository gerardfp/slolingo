'use client'

import { useRef } from 'react';
import { createPost } from '../../lib/db';

export default function CreatePost(){

    return <p>create page tsx</p>
    // const modalRef = useRef();

    // function handleClick(){
    //     modalRef.current.showModal();
    // }

    // return (
    //     <div>
    //         <button onClick={handleClick}>Crear</button>
    //         <dialog ref={modalRef} className='backdrop:bg-black backdrop:opacity-50 p-8 bg-neutral-800 rounded-lg'>
    //             <form action={createPost}>
    //                 <input type="text" name="content" className="text-black" />
    //                 <input type="submit" value="crear" className='text-white bg-blue-500 p-2 rounded-lg'/>
    //             </form>
    //         </dialog>
    //     </div>
    // )
}