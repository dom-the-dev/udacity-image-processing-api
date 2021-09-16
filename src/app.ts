import express from 'express';
import routes from "./routes/index";
const app = express();
const port = 3000;

app.use('/api', routes)

app.listen(port, () => console.log(`Listening on port ${port}`))

// ENDPOINT params filname, width, height
// search image in filesystem
// check if thumbail for given size is already available -> test if file exists  -> test if file not exist
// if not resize and create thumbnail
// is yes - response image

export default app