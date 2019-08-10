const User = require("./describe-it");

describe("Test USer", () => {
  it("retorna o nome", () => {
    const user = new User("React", 3, "SP");
    expect(user.getName()).toBe("React");
  });

  it("retorna a idade", () => {
    const user = new User("React", 3, "SP");
    expect(user.getAge()).toBe("3 anos de idade");
  });

  it("define uma profissao", () => {
    const user = new User("React", 3, "SP");
    user.profession = "Desenvolvedor";
    expect(user.profession).toBe("Desenvolvedor");
  });
});
