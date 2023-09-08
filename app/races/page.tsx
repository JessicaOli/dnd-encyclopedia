import fetchDndData from "@utils/fetchDndData";
import React from "react"

export default async function Races(){
    const fetchData = await fetchDndData(`
    {
        races{
            name
          }
    }
    `);

    const races = fetchData.races;
    return(
        <section className="w-full flex-center flex-col text-slate-200">
            <h1>Races</h1>
            {races.map((race: any) => (
                <div className='mb-10 w-full'>
                    <div key={race.name}>Name: {race.name}</div>
                </div>
            ))}
        </section>
    )
} 