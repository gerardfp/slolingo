'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export function Modal({ children }) {
    const router = useRouter();
    const dialogRef = useRef(null);

    useEffect(() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
        }
    }, []);

    function onDismiss() {
        router.back();
    }

    function closeModal(e) {
        if (e.target === dialogRef.current) {
            e.stopPropagation();
            onDismiss();
        }
    }

    return(
        <>
            <dialog className="backdrop:bg-gray-900 backdrop:opacity-50" ref={dialogRef} onClose={onDismiss} onClick={closeModal}>
                <button onClick={onDismiss} className=''>x</button>
                <div className="min-h-[200px] bg-red-500" >
                    {children}
                </div>
            </dialog>
        </>
   )
}