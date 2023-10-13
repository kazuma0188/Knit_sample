const app = artifacts.require("todo");

module.exports = function (deployer) {
  deployer.deploy(app);
};
