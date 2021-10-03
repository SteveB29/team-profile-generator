const Employee = require('../lib/Employee');

test("creates an Employee object", () => {
  const employee = new Employee('Steve', '1', 'steven.bendrick@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

test("Checks Emplyee methods", () => {
  const employee = new Employee('Steve', '1', 'steven.bendrick@gmail.com');

  expect(employee.getName()).toEqual('Steve');
  expect(employee.getId()).toEqual('1');
  expect(employee.getEmail()).toEqual('steven.bendrick@gmail.com');
  expect(employee.getRole()).toEqual('Employee');
})