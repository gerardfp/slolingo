import { createApi } from 'unsplash-js';
import InputSearch from './InputSearch'

// app_id 567202
// access_key yiybjDVoNzQiEu8WgJAtk3WT189uI9kV89mEh5yXtHc
// secret_key h46Gzt5tuwFuklN6MXrUYCUMqVoI7ynj53prueVxNGo

export default async ({searchParams}) => {

    const query = searchParams?.query || '';
    
    let fotos = null;

    if (query) {
        const api = createApi({ accessKey: 'yiybjDVoNzQiEu8WgJAtk3WT189uI9kV89mEh5yXtHc',});
        fotos = await api.search.getPhotos({ query: query });
        console.log(fotos);
    }

    return (
        <>
        <InputSearch />
        { fotos && fotos?.response.results.map((foto) => {
            return <img key={foto.id} src={foto.urls.regular} alt={foto.alt_description} className='w-80'/>
        })
        }
        </>
    )
};