import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (req,res) => {
    res.send('Добро пожаловать на наш сайт')
})

app.get('/all', (req,res) => {
    res.json({
        name: "Mirfozil",
        hobby: {
            1: "Programming",
            2: "Workout",
            3: "Learn"
        }
    })
})

export const handler = serverless(app);
