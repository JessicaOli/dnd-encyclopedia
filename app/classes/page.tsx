import { Class } from "@models/class";
import fetchDndData from "@utils/fetchDndData";
import React from "react"

export default async function Classes() {
    const fetchData = await fetchDndData(`
    {
        classes {
            name
            startingEquipment: starting_equipment {
              equipment {
                name
                category: equipment_category {
                  name
                }
                weight
              }
            }
            spells{
              name
            }
            proficiencies {
              name
              type
            }
          }
    }
    `);

    const classes = fetchData.classes;
    return (
        <section className="w-full flex-center flex-row text-slate-200">
            {classes.map((classe: Class) => (
                <div className='mb-10 w-full'>
                    <div key={classe.name} className='text_btn'>{classe.name}</div>
                </div>
            ))}
        </section>
    )
} 