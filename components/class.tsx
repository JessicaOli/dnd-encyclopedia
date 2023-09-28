import { ClassInfo } from "@models/classInfo";

export default function Class({ classInfo }: { classInfo: ClassInfo }) {
    return (
        <>
            <div className="bg-red-900 mb-3 rounded-md w-full">
                <div className="m-6">
                    <div className="text-center text-white text-2xl">{classInfo.name}</div>
                </div>
            </div>
        </>
    )
}