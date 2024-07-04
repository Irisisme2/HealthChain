const HealthRecordContract = artifacts.require("HealthRecordContract");
const PermissionContract = artifacts.require("PermissionContract");

module.exports = function (deployer) {
  deployer.deploy(HealthRecordContract);
  deployer.deploy(PermissionContract);
};
