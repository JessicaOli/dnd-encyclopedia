"use client"
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '../constants/routes';

export default function Navbar() {
    return (
        <>
            <nav className='sticky top-0 z-50 bg-black text-slate-200 flex-between w-full mb-16 pt-3 px-6'>
                <Link className='w-full' href='/'>
                    <Image
                        src='/assets/images/logo.png'
                        alt='dnd logo'
                        width={200}
                        height={0}
                        className='hover:animate-pulse'
                    />
                </Link>
                <ul className='flex justify-between w-1/4'>
                    {routes.map(route => (
                        <li key={route.label}>
                            <Link href={route.href} className='font-bold opacity-80 hover:opacity-100'>{route.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}