pragma solidity ^0.8.0;

contract PermissionContract {
    struct Permission {
        address patient;
        address doctor;
        bool permission;
    }

    mapping(address => mapping(address => Permission)) public permissions;

    function grantPermission(address _doctor, bool _permission) public {
        permissions[msg.sender][_doctor] = Permission(msg.sender, _doctor, _permission);
    }

    function checkPermission(address _patient, address _doctor) public view returns (bool) {
        return permissions[_patient][_doctor].permission;
    }
}
