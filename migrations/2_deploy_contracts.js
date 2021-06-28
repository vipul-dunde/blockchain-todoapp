var TodoList = artifacts.require("./TodoList.sol");
// similar to changing the state of database
module.exports = function(deployer) {
  deployer.deploy(TodoList);
};
