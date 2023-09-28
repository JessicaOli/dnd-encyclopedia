'use client'

import React, { useState } from 'react'
import Tab from './tab'
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '../constants/routes';
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
    const [selectedTab, setSelectedTab] = useState('Home');

    const handleTabChange = (tabName: string) => {
        setSelectedTab(tabName);
    }

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
                            onClick={() => handleTabChange('Home')}
                        />
                    </Link>
                    <ul className='sm:flex hidden space-x-4'>
                        {routes.map(route => (
                            <Tab
                                key={route.label}
                                active={selectedTab === route.label}
                                selectTab={() => handleTabChange(route.label)}
                            >
                                <li>
                                    <Link href={route.href}>{route.label}</Link>
                                </li>
                            </Tab>

                        ))}
                    </ul>
                    <div className='sm:hidden flex'>
                        <GiHamburgerMenu className='text-slate-200 w-6' size={100} />
                    </div>
                </div>
            </div>
        </nav>
    )
}