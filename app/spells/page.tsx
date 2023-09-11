import SpellCard from "@components/spellCard";
import fetchDndData from "@utils/fetchDndData";
import React from "react"

export default async function Page() {
    const fetchData = await fetchDndData(`
    {
        spells{
            name
            level
            range
            casting_time
            duration
            desc
            components
            school {
                name
            }
          }
    }
    `);

    const spells = fetchData.spells;

    return (
        <section className="w-full flex-start flex-wrap flex-row text-slate-200">
            {spells.map((spell: any) => (
                <SpellCard
                name={spell.name}
                castingTime={spell.casting_time}
                range={spell.range}
                components={spell.components}
                duration={spell.duration}
                descriptions={spell.desc}
                level={spell.level}
                school={spell.school.name}
                ></SpellCard>
            ))}
        </section>
    )
} 