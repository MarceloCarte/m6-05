import { Router } from "express";
import { getFilteredJoyas, getJoya, getJoyas } from "../controller/joyas.controller.js";

const joyasRouter = Router()


joyasRouter.get('/joyas', getJoyas)
joyasRouter.get('/joyas/joya/:id', getJoya)
joyasRouter.get('/joyas/filtros', getFilteredJoyas)


export default joyasRouter