import pkg from 'pg'
const { Pool } = pkg

export const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "1234",
  database: "joyas",
  allowExitOnIdle: true,
});
