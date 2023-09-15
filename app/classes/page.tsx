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
    <section>
      <div className="w-full flex-center flex-row">
        {classes.map((classe: Class) => (
          <div key={classe.name} className='mb-10 w-full'>
            <div className='text_btn'>{classe.name}</div>
          </div>
        ))}
      </div>
      <div className="text-center text-white">Work in progress</div>
    </section>
  )
} 