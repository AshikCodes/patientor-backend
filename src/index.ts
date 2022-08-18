import express from "express";
import diagnosesRouter from './routes/diagnoses';
const app = express();
app.use(express.json());

app.get('/api/ping', (_req,res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/diagnoses',diagnosesRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});