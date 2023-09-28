export type Spell = {
    name: string,
    level: number,
    range: string,
    castingTime: string,
    duration: string,
    descriptions: string[],
    components: string,
    school: {name:string}
}