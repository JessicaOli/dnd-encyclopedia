import { Spell } from "@models/spell";
import SpellCardProperty from "./spellCardProperty";
import Image from 'next/image';

export default function SpellCard({ name, castingTime, range, components, duration, descriptions, level, school }: Spell) {
    return (
        <div className="bg-red-800 w-80 h-128 m-5 rounded-md flex flex-col relative">
            <div className="bg-white text-center text-black text-2xl m-5 font-semibold rounded-sm drop-shadow-lg">{name}</div>
            <div className="text-center font-bold">Level {level} {school.name}</div>
            <div className="flex flex-row flex-wrap m-3">
                <SpellCardProperty
                    propertyName='Casting Time'
                    propertyValue={castingTime}
                ></SpellCardProperty>
                <SpellCardProperty
                    propertyName='Range'
                    propertyValue={range}
                ></SpellCardProperty>
                <SpellCardProperty
                    propertyName='Components'
                    propertyValue={components}
                ></SpellCardProperty>
                <SpellCardProperty
                    propertyName='Duration'
                    propertyValue={duration}
                ></SpellCardProperty>
            </div>
            <div className="bg-white m-3 rounded-sm h-full overflow-auto divide-y-4  drop-shadow-lg">
                {descriptions.map((description: string,idx:number) => (
                    <div key={idx} className="text-black font-semibold p-3">{description}</div>
                ))}
            </div>
            <div className="my-3">
            <Image
                src='/assets/images/simplified-logo.png'
                alt='dnd logo'
                width={50}
                height={0}
                className='drop-shadow-md absolute right-3 bottom-1'
            >
            </Image>
            </div>
        </div>
    )
}