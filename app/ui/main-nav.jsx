'use client'

import Link from "next/link";
import {
    MapIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    ChatBubbleLeftIcon,
    PlusCircleIcon
  } from '@heroicons/react/24/outline';
import { usePathname } from "next/navigation";
import clsx from "clsx";


export default ({ user }) => {
    
    const pathname = usePathname();
    console.log(pathname)

    const items = [
        { name: "Home", href: "/", icon: HomeIcon },
        { name: "Búsqueda", href: "/search", icon: MagnifyingGlassIcon },
        { name: "Explorar", href: "/explore", icon: MapIcon },
        { name: "Mensajes", href: "/messages", icon: ChatBubbleLeftIcon },
        { name: "Crear", href: "/create", icon: PlusCircleIcon }
    ]

    return (
        <nav className="flex flex-col bg-black border-e border-e-gray-600 min-h-full w-full max-w-[16rem] p-4">
            { items.map(item => {
                    return (
                    <Link 
                        key={item.name} 
                        href={item.href} 
                        className={clsx(
                            "flex justify-start text-white gap-4 p-3 hover:bg-gray-900 rounded-lg",{
                                "bg-gray-900 pointer-events-none": pathname === item.href
                        })}

                    >
                        <item.icon className="w-6"/>
                        <p className="block">{item.name}</p>
                    </Link>)
            })}
        </nav>
    )
}