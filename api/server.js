import { config } from "dotenv";
config();
import mongoose, { connect } from "mongoose";
import express from 'express';
import { readFile } from 'fs';


const mongoUrl = process.env.MONGOURL;
connect(mongoUrl).then(() => console.log("I've connected to mongodb."))

const messageSchema = new mongoose.Schema({
    date: String,
    message: Array
});
const message = mongoose.model("messageData", messageSchema)
const app = express();

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
// Serve static files from the public directory
app.use('/dist', express.static('dist'));
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
    readFile(__dirname + '/index.html', (err, data) => {
        if (err) {
            res.status(500).send('Error loading HTML file');
        } else {
            res.set('Content-Type', 'text/html');
            res.send(data.toString());
        }
    });
});

app.use(express.json());

app.post('/api/server', async (req, res) => {
    try {
        console.log(req.body)
        const data = await message.findOne({ date: req.body.date });
        const filter = { date: req.body.date };
        data
            ? await message.updateOne(filter,
                {
                    $push: { message: req.body.message }
                }
            )
            : new message(
                {
                    date: req.body.date,
                    message: [req.body.message]
                }
            ).save();
        res.json({ message: 'Input saved successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving input' });
    }
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
