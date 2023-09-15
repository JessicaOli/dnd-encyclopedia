import Link from 'next/link';
import Image from 'next/image';
import { routes } from '../constants/routes';

export default function Navbar() {
    return (
        <nav className='sticky top-0 z-10 bg-black'>
            <div className="w-full px-20">
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
                    <div className='flex space-x-4 text-slate-200'>
                        {routes.map(route => (
                            <div key={route.label}>
                                <Link href={route.href} className='text_btn text-xl'>{route.label}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}