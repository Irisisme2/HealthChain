// migrations/2_deploy_contract.js
const HealthRecordContract = artifacts.require("HealthRecordContract");
const PermissionContract = artifacts.require("PermissionContract");

module.exports = function (deployer) {
  deployer.deploy(HealthRecordContract);
  deployer.deploy(PermissionContract);
};
