import fetchDndData from "@utils/fetchDndData";
import React from "react"

export default async function Classes(){
    const fetchData = await fetchDndData(`
    {
        classes{
            name
          }
    }
    `);

    const classes = fetchData.classes;
    return(
        <section className="w-full flex-center flex-col text-slate-200">
            <h1>Classes</h1>
            {classes.map((classes: any) => (
                <div className='mb-10 w-full'>
                    <div key={classes.name}>Name: {classes.name}</div>
                </div>
            ))}
        </section>
    )
} 