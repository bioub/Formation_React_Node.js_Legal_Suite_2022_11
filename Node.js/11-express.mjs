import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<p>Home page</p>');
});

app.get('/api/json', (req, res) => {
  res.json({msg: 'Hello'});
});

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
