const User = require("./before-after-all");

let user = {};
describe("Test USer", () => {
  beforeAll(() => {
    user = new User("React", 3, "SP");
  });

  it("retorna o nome", () => {
    expect(user.getName()).toBe("React");
  });

  it("retorna a idade", () => {
    expect(user.getAge()).toBe("3 anos de idade");
  });

  it("define uma profissao", () => {
    user.profession = "Desenvolvedor";
    expect(user.profession).toBe("Desenvolvedor");
  });
});
