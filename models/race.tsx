export type Race = {
    name: string,
    alignment: string,
    size: string,
    speed: string,
    subraces: {
        name: string,
        desc: string
    },
    languages:{
        name: string,
        desc: string,
        type: string
    }
}