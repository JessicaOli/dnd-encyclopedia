export default function RaceInfo({ name, alignment, size, speed }: any) {
    return (
        <div className="bg-red-900 mb-3 rounded-md w-full">
            <div className="m-6">
                <div className="text-center text-white text-2xl">{name}</div>
                <div className="text-white">{alignment}</div>
                <div className="text-white">{size}</div>
                <div className="text-white">{speed}</div>
            </div>
        </div>
    )
}