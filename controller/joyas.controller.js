import {
  dbGetJoyas,
  dbGetJoya,
  dbJoyasFiltradas,
} from "../model/joyas.model.js";
import { prepHateoas } from "../utils/utils.js";

export const getJoyas = async (req, res) => {
  const query = req.query;

  try {
    const joyas = await dbGetJoyas(query);
    const HATEOAS = await prepHateoas(joyas);
    res.status(200).json(HATEOAS);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener joyas' })
  }
};

export const getJoya = async (req, res) => {
  const { id } = req.params;

  try {
    const joya = await dbGetJoya({id});

    if (joya.length === 0) {
      res.status(404).json({ message: 'Esta joya no existe'})
    }

    res.status(200).json(joya);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener joya' })
  }
};

export const getFilteredJoyas = async (req, res) => {
  const query = req.query;

  try {
    const joyas = await dbJoyasFiltradas(query);
    res.status(200).json(joyas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener joyas filtradas' })
  }
};
