const Manager = require('../lib/Manager');

test('creates a manager object extended from Employee', () => {
  const manager = new Manager('Steve', 1, 'steven.bendrick@gmail.com', 12);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(Number));

  expect(manager.getName()).toEqual('Steve');
  expect(manager.getId()).toEqual(1);
  expect(manager.getEmail()).toEqual('steven.bendrick@gmail.com');
  expect(manager.getRole()).toEqual('Manager');
});