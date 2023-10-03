'use client'

import { ClassInfo } from '@models/classInfo'
import React, { useState } from 'react'
import Tab from './tab'
import Class from './class';

export default function Classes({ classes }: { classes: ClassInfo[] }) {
    const [selectedClass, setSelectedClass] = useState(classes[0].name);

    const handleTabChange = (className: string) => {
        setSelectedClass(className);
    }

    return (
        <>
            <div className="bg-black rounded-md w-full h-full">
                <div className="w-full flex-center flex-row">
                    {classes.map((classInfo: ClassInfo) => (
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
                <Class classInfo={classes.filter((classInfo: ClassInfo) => { return classInfo.name === selectedClass })[0]} />
            </div>
        </>
    )
}
