import Link from 'next/link';
import Image from 'next/image';
import { routes } from '../constants/routes';

export default function Navbar() {
    return (
        <>
            <nav className='z-50 bg-black flex-between w-full pb-16 pt-3 px-20'>
                <Link className='w-full' href='/'>
                    <Image
                        src='/assets/images/logo.png'
                        alt='dnd logo'
                        width={200}
                        height={0}
                        className='hover:animate-pulse'
                    />
                </Link>
                <ul className='flex justify-between w-1/5'>
                    {routes.map(route => (
                        <li key={route.label}>
                            <Link href={route.href} className='text_btn text-xl'>{route.label}</Link>
                        </li>
                    ))}
                </ul> 
            </nav>
        </>
    )
}