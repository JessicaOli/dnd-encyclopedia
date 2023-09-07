"use client"
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '../constants/routes';

export default function Navbar() {
    return (
        <>
            <div className='py-1 space-y-9 bg-black px-8 mx-auto text-slate-200 drop-shadow-2xl'>
                <nav className='flex-between w-full'>
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
                            <li>
                                <Link href={route.href} className='font-bold opacity-80 hover:opacity-100'>{route.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}