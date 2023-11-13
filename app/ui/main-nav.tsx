import Link from "next/link";

export function MainNav({user}){
    return <nav>
        <li>
            <Link href="/profile">Profile de {user?.email}</Link>
        </li>
        <li>
            <a href="/api/auth/logout">Logout</a>
        </li>
    </nav>
}