import SpellCardProperty from "./spellCardProperty";

export default function SpellCard({ name, castingTime, range, components, duration, descriptions, level, school }: any) {
    return (
        <div className="bg-red-800 w-80 h-128 m-5 rounded-md flex flex-col">
            <div className="bg-white text-center text-black text-2xl m-5 font-semibold rounded-sm">{name}</div>
            <div className="text-center font-bold">Level {level} {school}</div>
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
            <div className="bg-white m-3 rounded-sm h-full overflow-auto divide-y-4">
                {descriptions.map((description: string) => (
                    <div className="text-black font-semibold p-3">{description}</div>
                ))}
            </div>
        </div>
    )
}