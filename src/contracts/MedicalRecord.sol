pragma solidity ^0.8.0;

contract HealthRecordContract {
    struct MedicalRecord {
        bytes32 hash; // Hash danych medycznych
        address patient; // Adres pacjenta
        address doctor; // Adres lekarza
        bool permission; // Uprawnienie dostępu
    }

    mapping(address => MedicalRecord[]) public medicalRecords;

    function addMedicalRecord(bytes32 _hash, address _doctor, bool _permission) public {
        medicalRecords[msg.sender].push(MedicalRecord({
            hash: _hash,
            patient: msg.sender,
            doctor: _doctor,
            permission: _permission
        }));
    }
}
