import express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Api is running")
})

router.get('/image', ((req, res) => {
    res.send('your image')
}))

export default router;