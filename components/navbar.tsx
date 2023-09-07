"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <>
            <div className='py-1 space-y-9 bg-black px-8 mx-auto text-slate-200 drop-shadow-2xl'>
                <nav className='flex-between w-full'>
                    <div className='w-full'>
                        <Image
                            src='/assets/images/logo.png'
                            alt='dnd logo'
                            width={200}
                            height={0}
                        />
                    </div>
                    <ul className='flex justify-between w-1/4'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/classes'>classes</Link>
                        </li>
                        <li>
                            <Link href='/races'>races</Link>
                        </li>
                        <li>
                            <Link href='/spells'>spells</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}