const Engineer = require('../lib/Engineer');

test("creates an Engineer object", () => {
  const engineer = new Engineer('Steve', 1, 'steven.bendrick@gmail.com', 'SteveB29');

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));

  expect(engineer.getName()).toEqual('Steve');
  expect(engineer.getId()).toEqual(1);
  expect(engineer.getEmail()).toEqual('steven.bendrick@gmail.com');
  expect(engineer.getGithub()).toEqual('SteveB29')
  expect(engineer.getRole()).toEqual('Engineer');
});