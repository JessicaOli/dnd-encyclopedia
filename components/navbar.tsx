import Link from 'next/link';
import Image from 'next/image';
import { routes } from '../constants/routes';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    return (
        <nav className='sticky top-0 z-10 bg-black'>
            <div className="w-full">
                <div className="flex items-center justify-between">
                    <Link className='w-full' href='/'>
                        <Image
                            src='/assets/images/logo.png'
                            alt='dnd logo'
                            width={200}
                            height={0}
                            className='hover:animate-pulse'
                        />
                    </Link>
                    <ul className='sm:flex hidden space-x-4 text-slate-200 '>
                        {routes.map(route => (
                            <li key={route.label}>
                                <Link href={route.href} className='text_btn text-xl'>{route.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='sm:hidden flex'>
                        <GiHamburgerMenu className='text-slate-200 w-6' size={100}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}