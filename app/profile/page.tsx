import { getSession } from "@auth0/nextjs-auth0";

export default async function Profile(){
    const { user } = await getSession() || { user: null};

    return (
        <>
        { user ?
            <p>{JSON.stringify(user)}</p>
            
    :
            <p>Not logged in...</p>
    }
        </>
    )
}