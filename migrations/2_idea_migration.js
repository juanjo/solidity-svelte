const IdeaContract = artifacts.require("Idea");

module.exports = function (deployer) {
  deployer.deploy(IdeaContract);
};
