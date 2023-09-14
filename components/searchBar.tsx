'use client'

import { AiOutlineSearch } from 'react-icons/ai'
import SpellCard from './spellCard'
import { useState } from 'react';
import { Spell } from '@models/spell';

export default function SearchBar( {spells}: {spells:Spell[]}) {
    const [currentSearch,setCurrentSearch] = useState(spells);

    const handleSearchChange = (e:any) => {
        if(e.target.value == ''){
            setCurrentSearch(spells);
            return false;
        }
        setCurrentSearch(spells.filter((spell:Spell) => spell.name.toLowerCase().includes(e.target.value)));
    }

    return (
        <form className="w-full relative">
            <div className="relative">
                <input type="search" placeholder="Search spell name" className="w-full p-4 rounded-full bg-black border border-red-800" onChange={(e)=>handleSearchChange(e)}/>
                <button className='absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-980 rounded-full'>
                    <AiOutlineSearch />
                </button>
            </div>
            <div className='absolute top-20 p-4 bg-black text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex justify-between flex-wrap flex-row gap-2'>
                {currentSearch.map((spell: Spell) => (
                    <SpellCard
                        name={spell.name}
                        castingTime={spell.castingTime}
                        range={spell.range}
                        components={spell.components}
                        duration={spell.duration}
                        descriptions={spell.descriptions}
                        level={spell.level}
                        school={spell.school}
                    ></SpellCard>
                ))}
            </div>
        </form>
    )
}