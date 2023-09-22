'use client'

import { Class } from '@models/class'
import React, { useState } from 'react'
import Tab from './tab'

export default function Classes({classes}:{classes:Class[]}) {
    const [selectedClass, setSelectedClass] = useState('');

    const handleTabChange = (className: string) => {
        setSelectedClass(className);
    }

    return (
        <>
            <div className="w-full flex-center flex-row">
                {classes.map((classInfo: Class) => (
                    <div key={classInfo.name} className="w-full flex-center flex-row">
                        <Tab
                            active={selectedClass === classInfo.name}
                            selectTab={() => handleTabChange(classInfo.name)}
                        >
                            {classInfo.name}
                        </Tab>
                    </div>
                ))}
            </div>
            <div className="text-center text-white">{selectedClass}</div>
        </>
    )
}
