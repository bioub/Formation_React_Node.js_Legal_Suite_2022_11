import express from 'express';

const app = express();

// enregistrer un middleware (plugin express)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<p>Home page</p>');
});

app.get('/hello/:name', (req, res) => {
  res.json({msg: 'Hello ' + req.params.name});
});

app.get('/api/json', (req, res) => {
  res.json({msg: 'Hello GET'});
});

app.post('/api/json', (req, res) => {
  console.log(req.body);
  res.json({msg: 'Hello POST '});
})

// Méthode HTTP d'un API REST
// GET -> lecture
// POST -> création
// PUT -> remplacer
// PATCH -> mettre à jour
// DELETE -> supprimer

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
