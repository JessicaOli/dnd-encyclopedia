export type ClassInfo = {
    name: string,
    startingEquipment: [{
        equipment: {
            name: string,
            category: {
                name: string
            }
            weight: string
        }
    }],
    spells: [
        {
            name: string
        }
    ],
    proficiencies: [{
        name: string,
        type: string
    }]
}