import { ClassInfo } from "@models/classInfo";
import Image from 'next/image';
import { descriptions } from '../constants/classDescriptions';

export default function Class({ classInfo }: { classInfo: ClassInfo }) {

    const classDescription = descriptions.find(description => {
        return description.className === classInfo.name;
    });

    return (
        <>
            <div className="m-6">
                <div className="text-center text-white text-5xl">{classInfo.name}</div>
                <div className="flex items-center">
                    <Image
                        src={'/assets/images/classes/' + classInfo.name + '.png'}
                        alt='Class reference image'
                        width={800}
                        height={0}
                    ></Image>
                    <div className="flex flex-col">
                        <div className="text-slate-200 mb-6">
                            {classDescription?.description}
                        </div>
                        <div className="text-slate-200 text-2xl mb-6 underline underline-offset-8">Spells: </div>
                        {classInfo.spells.length > 0 ?
                            <ul className="ml-12 grid grid-rows-6 grid-flow-col gap-4">{
                                classInfo.spells.map((spell: any) => (
                                    <li className="text-slate-200">{spell.name}</li>
                                ))
                            }</ul>
                            :
                            <li className="text-slate-200 ml-12">None</li>
                        }
                        <div className="text-slate-200 my-6 underline underline-offset-8 text-2xl">Starting Equipment: </div>
                        {classInfo.startingEquipment.length > 0 ?
                            <ul className="text-slate-200">{
                                classInfo.startingEquipment.map((startingEquipment: any) => (
                                    <li className="ml-12 list-disc">
                                        <div className="text-slate-200 underline underline-offset-4 text-xl">{startingEquipment.equipment.name}</div>
                                        <div className="ml-6 mb-6">
                                            <li className="text-slate-200">{startingEquipment.equipment.category.name}</li>
                                            {startingEquipment.equipment.weight &&
                                                <li className="text-slate-200">{startingEquipment.equipment.weight}lb</li>
                                            }
                                        </div>
                                    </li>
                                ))
                            }</ul>
                            :
                            <li className="text-slate-200 ml-12">None</li>
                        }

                        <div className="text-slate-200 text-2xl mb-6 underline underline-offset-8">Proficiencies: </div>
                        {classInfo.proficiencies.length > 0 ?
                            <ul className="grid grid-rows-4 grid-flow-col gap-1 text-slate-200">{
                                classInfo.proficiencies.map((proficiency: any) => (
                                    <>
                                        <li className="ml-12 list-disc">
                                            <div className="text-slate-200 underline underline-offset-4 text-xl">{proficiency.name}</div>
                                            <div className="ml-6 mb-6">
                                                <li className="text-slate-200">Type: {proficiency.type}</li>
                                            </div>
                                        </li>
                                    </>
                                ))
                            }</ul>
                            :
                            <li className="text-slate-200 ml-12">None</li>
                        }
                    </div>
                </div>

            </div>
        </>
    )
}