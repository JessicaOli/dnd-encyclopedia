import fetchDndData from "@utils/fetchDndData";
import React from "react"

export default async function Page() {
    const fetchData = await fetchDndData(`
    {
        spells{
            name
            concentration
            attack_type
            level
            range
            casting_time
            duration
            desc
          }
    }
    `);

    const spells = fetchData.spells;

    return (
        <section className="w-full flex-center flex-col text-slate-200">
            <h1>Spells</h1>
            {spells.map((spell: any) => (
                <div className='mb-10 w-full'>
                    <div key={spell.name}>Name: {spell.name}</div>
                    <div key={spell.concentration}>Concentration: {spell.concentration ? 'Yes' : 'No'}</div>
                    <div key={spell.attack_type}>Attack Type: {spell.attack_type}</div>
                    <div key={spell.level}>Level: {spell.level}</div>
                    <div key={spell.range}>Range: {spell.range}</div>
                    <div key={spell.casting_time}>Casting Time: {spell.casting_time}</div>
                    <div key={spell.duration}>Duration: {spell.duration}</div>
                    <div key={spell.desc}>Description: {spell.desc}</div>
                </div>
            ))}
        </section>
    )
} 