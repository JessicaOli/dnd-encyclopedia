'use client'

import { Race } from '@models/race'
import React, { useState } from 'react'
import Tab from './tab'

export default function Races({races}:{races:Race[]}) {
    const [selectedRace, setSelectedRace] = useState('');

    const handleTabChange = (raceName: string) => {
        setSelectedRace(raceName);
    }

    return (
        <>
            <div className="w-full flex-center flex-row">
                {races.map((race: Race) => (
                    <div key={race.name} className="w-full flex-center flex-row">
                        <Tab
                            active={selectedRace === race.name}
                            selectTab={() => handleTabChange(race.name)}
                        >
                            {race.name}
                        </Tab>
                    </div>
                ))}
            </div>
            <div className="text-center text-white">{selectedRace}</div>
        </>
    )
}
