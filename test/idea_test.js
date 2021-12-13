const IdeaContract = artifacts.require("Idea");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Idea Contract", function (accounts) {
  it("should assert true", async function () {
    await IdeaContract.deployed();
    return assert.isTrue(true);
  });

  // Describe a function to get the idea
  describe("getIdea()", () => {
    // It should return 'My amazing idea!'
    it('should return "My amazing idea!"', async () => {
      const idea = await IdeaContract.deployed();
      const result = await idea.getIdea();
      const expected = "My amazing idea!";
      assert.equal(result, expected, "idea returned is 'My amazing idea!'");
    });
  });

  describe("owner()", () => {
    it("should return the owner", async () => {
      const idea = await IdeaContract.deployed();
      const result = await idea.owner();
      assert(result, "the current idea owner");
    });

    it("should return the owner address", async () => {
      const idea = await IdeaContract.deployed();
      const owner = await idea.owner();
      const expected = accounts[0];
      assert.equal(owner, expected, "matches the owner address");
    });
  });

  describe("setIdea()", () => {
    it("should update the idea", async () => {
      const idea = await IdeaContract.deployed();
      const new_idea = "An application to deal with DeathTech";
      await idea.setIdea(new_idea);
      const actual = await idea.getIdea();
      assert.equal(actual, new_idea, "idea is updated with new idea");
    });
  });
});
