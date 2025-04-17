import { dbGetJoyas, dbGetJoya, dbJoyasFiltradas } from "../model/joyas.model.js"
import { prepHateoas } from "../utils/utils.js"


export const getJoyas = async (req, res) => {
    const query = req.query
    const joyas = await dbGetJoyas(query)
    const HATEOAS = await prepHateoas(joyas)
    res.json(HATEOAS)
}

export const getJoya = async (req, res) => {
    const { id } = req.params
    const joya = await dbGetJoya(id)
    res.status(200).json(joya)
}

export const getFilteredJoyas = async (req, res) => {
    const query = req.query
    const joyas = await dbJoyasFiltradas(query)
    res.status(200).json(joyas)
}