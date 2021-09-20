import express from "express";
import routes from "./routes/index";
import path from "path";
const app = express();
const port = 3000;

// Serve static files
app.use(express.static("public"));

// Api routes
app.use("/api", routes);

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
