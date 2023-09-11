export default function SpellCardProperty({ propertyName, propertyValue }: any) {
    return (
        <div className="bg-white w-1/2 ">
            <div className="text-red-800 font-bold text-center text-xl">{propertyName}</div>
            <div className="text-black font-semibold text-center text-sm">{propertyValue}</div>
        </div>
    )
}