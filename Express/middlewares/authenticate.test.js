const authenticate = require("./authenticate");

test('authenticate respond 401 if wrong token', () => {
  const req = {
    headers: {
      authorization: 'wrong-token'
    }
  };

  const res = {
    json: jest.fn(),
  }

  authenticate(req, res);

  expect(res.statusCode).toBe(401);
  expect(res.json).toHaveBeenCalledWith({ msg: 'Unauthorized' });
});

/* Exercice 1
Ajouter un test ici qui couvre la ligne 10
Vérifier que si le token est bon la fonction next est appelée
2 possibilité :
- soit utiliser le token par défaut 'd4973653-9895-4123-a7dd-3e1387d0fbde'
- soit insérer un token et tester ensuite (recommandé)
*/
