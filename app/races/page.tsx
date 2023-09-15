import { Race } from "@models/race";
import fetchDndData from "@utils/fetchDndData";
import React from "react"

export default async function Races() {
    const fetchData = await fetchDndData(`
    {
        races{
            name
            alignment
            size
            speed
           subraces {
             name
             desc
           }
           languages{
               name
               desc
               type
           }
         }
    }
    `);

    const races = fetchData.races;
    return (
        <section>
            <div className="w-full flex-center flex-row">
                {races.map((race: Race) => (
                    <div key={race.name} className='mb-10 w-full'>
                        <div className='text_btn'>{race.name}</div>
                    </div>
                ))}
            </div>
            <div className="text-center text-white">Work in progress</div>
        </section>
    )
} 