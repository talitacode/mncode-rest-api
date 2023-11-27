import * as express from 'express';
import Controller from './controllers/controller';
require("dotenv").config();

const PORT = process.env.NODE_DOCKER_PORT || 3000;
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).send("Ok")
})

app.get('/mncode-api/', (req, res) => {
res.status(200).json({
    status: 'success',
    message: 'API REST - MNCODE'
})
})

app.get('/mncode-api/healthy/', Controller.Healthy); 
app.get('/mncode-api/list-team/', Controller.ListTeam);



app.listen(PORT, () => {
console.log(`Server is listening on port ${PORT}`)
})