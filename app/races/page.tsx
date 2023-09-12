import RaceInfo from "@components/raceInfo";
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
        <section className="w-full flex-center flex-col text-slate-200">
            {races.map((race: any) => (
                <RaceInfo
                    name={race.name}
                    alignment={race.alignment}
                    size={race.size}
                    speed={race.speed}
                ></RaceInfo>
                // <div key={race.name} className='mb-10 w-full'>
                //     <div>Name: {race.name}</div>
                //     <div>Alignment: {race.alignment}</div>
                //     <div>Size: {race.size}</div>
                //     <div>Speed: {race.speed}</div>
                //     <div>Subraces</div>

                //     {race.subraces.map((subrace: any) => (
                //         <div className="ml-6 mb-6">
                //             <div>Name: {subrace.name}</div>
                //             <div>Description: {subrace.desc}</div>
                //         </div>
                //     ))}

                //     <div>Languages</div>

                //     {race.languages.map((language: any) => (
                //         <div className="ml-6 mb-6">
                //             <div>Name: {language.name}</div>
                //             <div>Description: {language.desc}</div>
                //             <div>Type: {language.type}</div>
                //         </div>
                //     ))}

                // </div>
            ))}
        </section>
    )
} 