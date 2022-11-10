jest.mock("../models/todo");

const { list, show } = require("./todo");
const Todo = require("../models/todo");

// test("list respond data (Fake)", async () => {
//   const originalFind = Todo.find;
//   Todo.find = () =>
//     Promise.resolve([
//       { id: 1, title: "ABC" },
//       { id: 2, title: "DEF" },
//     ]);

//   const req = {};

//   const res = {
//     json: jest.fn(),
//   };

//   await list(req, res);

//   expect(res.json).toHaveBeenCalledWith([
//     { id: 1, title: "ABC" },
//     { id: 2, title: "DEF" },
//   ]);

//   Todo.find = originalFind;
// });

test("list respond data (Mock)", async () => {
  Todo.find.mockResolvedValue([
    { id: 1, title: "ABC" },
    { id: 2, title: "DEF" },
  ]);

  const req = {};

  const res = {
    json: jest.fn(),
  };

  await list(req, res);

  expect(res.json).toHaveBeenCalledWith([
    { id: 1, title: "ABC" },
    { id: 2, title: "DEF" },
  ]);
});

/* Exercice 2
Tester la fonction show
3 scénari à tester :
le cas où res.json est appelé
le cas où next()
le cas où next(err)
*/

test("show respond todo", async () => {
  Todo.findById.mockResolvedValue({ id: 123, title: "ABC" });

  const req = {
    params: {
      id: '123'
    }
  };

  const res = {
    json: jest.fn(),
  };

  await show(req, res);

  expect(res.json).toHaveBeenCalledWith({ id: 123, title: "ABC" });
});

test("show calls next", async () => {
  Todo.findById.mockResolvedValue(null);

  const req = {
    params: {
      id: '123124'
    }
  };

  const res = {};

  const next = jest.fn();

  await show(req, res, next);

  expect(next).toHaveBeenCalledWith();
});

test("show calls next with error", async () => {
  Todo.findById.mockRejectedValue(new Error('an error'));
  const req = {
    params: {
      id: '123124'
    }
  };

  const res = {};

  const next = jest.fn();

  await show(req, res, next);

  expect(next).toHaveBeenCalledWith(new Error('an error'));
});
