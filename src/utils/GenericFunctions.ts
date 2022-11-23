import { faker } from '@faker-js/faker'

type cityCell = {city: string}

export const pinMaskValues = (pin: string): string[] => {
    return [pin[0], pin[1], pin[2], pin[3]]
}

export const CityFakeDataProvider = (): cityCell[]  => {
    const res: cityCell[] = []


    for (let i = 0; i < 30; i++) {
        const city: cityCell = {city: faker.address.city()}
        res.push(city)
    }

    return res
}