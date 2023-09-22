'use client'

export default function Tab({ active, selectTab,children }: { active: boolean, selectTab: any,children:any}) {
    const tabClass = active ? 'opacity-100 font-bold' : 'text-btn'

    return (
        <div className={tabClass + ' text-slate-200 cursor-pointer'} onClick={selectTab}>
            {children}
        </div>
    )
}