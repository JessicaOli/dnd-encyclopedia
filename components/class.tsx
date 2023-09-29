import { ClassInfo } from "@models/classInfo";
import Image from 'next/image';
import {descriptions} from '../constants/classDescriptions';

export default function Class({ classInfo }: { classInfo: ClassInfo }) {

    const classDescription = descriptions.find(description=>{
        return description.className === classInfo.name;
    });

    console.log(classInfo.name);

    return (
        <>
            <div className="bg-black rounded-md w-full">
                <div className="m-6">
                    <div className="text-center text-white text-2xl">{classInfo.name}</div>
                    <div className="flex">
                        <Image
                            src={'/assets/images/classes/' + classInfo.name + '.png'}
                            alt='Class reference image'
                            width={800}
                            height={0}
                        ></Image>
                        <div className="text-slate-200">
                            {classDescription?.description}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}