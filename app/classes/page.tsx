import Classes from "@components/classes";
import { Class } from "@models/class";
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
    <section>
      <Classes
        classes={classes}
      ></Classes>
    </section>
  )
} 