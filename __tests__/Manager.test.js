const Manager = require('../lib/Manager');

test('creates a manager object extended from Employee', () => {
  const manager = new Manager('Steve', '1', 'steven.bendrick@gmail.com', '12');

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.office).toEqual(expect.any(String));
});

test("Runs the Manager methods", () => {
  const manager = new Manager('Steve', '1', 'steven.bendrick@gmail.com', '12');

  expect(manager.getName()).toEqual('Steve');
  expect(manager.getId()).toEqual('1');
  expect(manager.getEmail()).toEqual('steven.bendrick@gmail.com');
  expect(manager.getOffice()).toEqual('12');
  expect(manager.getRole()).toEqual('Manager');
})