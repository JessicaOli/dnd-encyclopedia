import Spells from "@components/spells";
import { Spell } from "@models/spell";
import fetchDndData from "@utils/fetchDndData";
import React from "react"

export default async function Page() {
    const fetchData = await fetchDndData(`
    {
        spells(limit: 1000) {
            name,
            level,
            range,
            castingTime: casting_time,
            duration,
            descriptions:desc
            components
            school{
              name
            }
          }
    }
    `);

    const spells: Spell[] = fetchData.spells.sort((spellOne: Spell, spellTwo: Spell) => { return spellOne.level - spellTwo.level });

    return (
        <section className="w-full text-slate-200">
            <Spells spells={spells}></Spells>
        </section>
    )
} 