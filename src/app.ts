import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Api is running")
})

app.listen(port, () => console.log(`Listening on port ${port}`))

// user request to api                   -> test if api responses
// get params                            ->
// search image in filesystem
// check if thumbail for given size is already available -> test if file exists  -> test if file not exist
// if not resize and create thumbnail
// is yes - response image

export default app