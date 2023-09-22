import { Race } from "@models/race";
import fetchDndData from "@utils/fetchDndData";
import Races from "@components/races";
import React from "react"

export default async function Page() {

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

    const races: Race[] = fetchData.races;


    return (
        <section>
            <Races
                races={races}
            ></Races>
        </section>
    )
} 