import Classes from "@components/classes";
import fetchDndData from "@utils/fetchDndData";
import React from "react"

export default async function Page() {
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
    <section className="h-full">
      <Classes
        classes={classes}
      ></Classes>
    </section>
  )
} 