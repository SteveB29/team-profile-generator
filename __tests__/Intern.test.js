const Intern = require('../lib/Intern');

test("creates an Intern object", () => {
  const intern = new Intern('Steve', 1, 'steven.bendrick@gmail.com', "Uconn");

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("Runs Intern methods", () => {
  const intern = new Intern('Steve', 1, 'steven.bendrick@gmail.com', "Uconn");

  expect(intern.getName()).toEqual('Steve');
  expect(intern.getId()).toEqual(1);
  expect(intern.getEmail()).toEqual('steven.bendrick@gmail.com');
  expect(intern.getSchool()).toEqual('Uconn');
  expect(intern.getRole()).toEqual('Intern');
})