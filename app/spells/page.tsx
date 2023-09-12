import SearchBar from "@components/searchBar";
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
        <section className="w-full text-slate-200">
            <SearchBar spells={spells}></SearchBar>
        </section>
    )
} 