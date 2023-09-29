import { ClassInfo } from "@models/classInfo";
import Image from 'next/image';

export default function Class({ classInfo }: { classInfo: ClassInfo }) {
    return (
        <>
            <div className="bg-black rounded-md w-full">
                <div className="m-6">
                    <div className="text-center text-white text-2xl">{classInfo.name}</div>
                    <Image
                        src={'/assets/images/classes/' + classInfo.name + '.png'}
                        alt='class image'
                        width={1000}
                        height={0}
                    ></Image>
                </div>
            </div>
        </>
    )
}