import e from "express";
import joyasRouter from "./routes/joyas.routes.js";
const app = e();
export const PORT = 3001;

app.use(e.json());

app.use("/api", joyasRouter);

app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`)
);
