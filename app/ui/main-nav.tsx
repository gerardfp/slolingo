import Link from "next/link";

function NavItem({ children }){
    return <div className="flex justify-start gap-4 p-3 hover:text-blue-900 hover:bg-blue-900">
        {children}
    </div>
}

export function MainNav({ user }){
    
    return <nav className="flex flex-col bg-red-200 min-h-full w-full max-w-[16rem] p-4">
        <NavItem>
            <Link href="/">Home</Link>
        </NavItem>
        <NavItem>
            <Link href="/search">Búsqueda</Link>
        </NavItem>
        <NavItem>
            <Link href="/search">Explorar</Link>
        </NavItem>
        <NavItem>
            <Link href="/search">Mensajes</Link>
        </NavItem>
        <NavItem>
            <img className="rounded-full h-5 aspect-square" src={user?.picture} />
            <Link href="/profile">{user?.email}</Link>
        </NavItem>

        <NavItem>
            <a href="/api/auth/logout">Logout</a>
        </NavItem>
    </nav>
}