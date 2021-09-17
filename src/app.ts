import express from "express";
import routes from "./routes/index";
import path from "path";
const app = express();
const port = 3000;

// Api routes
app.use("/api", routes);

// Serve index.html on root
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
