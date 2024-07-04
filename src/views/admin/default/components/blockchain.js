// blockchain.js
import { web3, contract } from './config';

export const storeMedicalRecord = async (patientAddress, medicalRecord) => {
  try {
    const accounts = await web3.eth.getAccounts();
    await contract.methods.storeRecord(patientAddress, medicalRecord).send({ from: accounts[0] });
    return true;
  } catch (error) {
    console.error("Error storing medical record: ", error);
    return false;
  }
};

export const getMedicalRecord = async (patientAddress) => {
  try {
    const record = await contract.methods.getRecord(patientAddress).call();
    return record;
  } catch (error) {
    console.error("Error fetching medical record: ", error);
    return null;
  }
};
