import { PORT } from "../index.js"

export const prepHateoas = (joyas) => {

    const res = joyas.map((j) => {
        return {
            name: j.nombre,
            href: `/api/joyas/joya/${j.id}`,
        }
    }).slice(0, 4)
    const total = joyas.length
    const HATEOAS = {
        total,
        res
    }
    return HATEOAS

}