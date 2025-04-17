import format from "pg-format";
import { pool } from "../database/db.js";

export const dbGetJoyas = async ({
  limits = 5,
  order_by = "id_ASC",
  page = 1,
}) => {
  const [campo, direccion] = order_by.split("_");
  const offset = (page - 1) * limits;

  const query = format(
    "SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s",
    campo,
    direccion,
    limits,
    offset
  );

  const { rows: joyas } = await pool.query(query);
  return joyas;
};

export const dbGetJoya = async ({ id }) => {
  const query = "SELECT * FROM inventario WHERE id = $1";
  const { rows: joya } = await pool.query(query, [id]);
  return joya;
};

export const dbJoyasFiltradas = async ({
  precio_max,
  precio_min,
  categoria,
  metal,
}) => {
  let filters = [];
  const values = [];

  const addFilter = (campo, comparador, valor) => {
    values.push(valor);
    const { length } = filters;
    filters.push(`${campo} ${comparador} $${length + 1}`);
  };

  if (precio_max) addFilter("precio", "<=", precio_max);
  if (precio_min) addFilter("precio", ">=", precio_min);
  if (categoria) addFilter("categoria", "=", categoria);
  if (metal) addFilter("metal", "=", metal);

  let query = "SELECT * FROM inventario";

  if (filters.length > 0) {
    filters = filters.join(" AND ");
    query += ` WHERE ${filters}`;
  }

  try {
    const { rows: joyas } = await pool.query(query, values);
    return joyas;
  } catch (error) {
    console.error(error);
  }
};
