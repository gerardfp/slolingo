'use client'

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

export default () => {
    // modifica la URL per a afegir la query 
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams);

        if (e.target.value) {
          params.set('query', e.target.value);
        } else {
          params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
        
      },300);

    return <input type="text" placeholder="Search" onChange={handleSearch} className='text-black' defaultValue={searchParams.get('query')?.toString()}/>
}