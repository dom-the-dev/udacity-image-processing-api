import express from "express";
import routes from "./routes/index";
const app = express();
const port = 3000;

// Serve static files
app.use(express.static("public"));

// Api routes
app.use("/api", routes);

// Run server on port 3000
app.listen(port, () => console.log(`Listening on port ${port}\nVisit: http://localhost:3000`));

export default app;
