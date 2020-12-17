import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (resquest, response) => {
  response.json({message: 'olaa'})
})


app.listen(3333, () => {
  console.log('server started on port 3333')
})