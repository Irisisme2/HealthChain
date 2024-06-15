import React, { useState, useEffect } from 'react';
import { Button, FormControl, FormLabel, Input, Textarea, Text, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import { contract } from './config';

function RecordForm() {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAddress: '',
    recordData: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleStoreRecord = async () => {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];

      await contract.methods.storeRecord(formData.recordData).send({ from: account });
      console.log('Record stored successfully!');
      alert('Record stored successfully!');
      setFormData({
        patientName: '',
        patientAddress: '',
        recordData: ''
      });
    } catch (error) {
      console.error('Error storing record:', error);
      alert('Failed to store record');
    }
  };

  useEffect(() => {
    const requestAccount = async () => {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
          console.error('User denied account access or error occurred', error);
        }
      } else {
        console.error('MetaMask not detected');
      }
    };

    requestAccount();
  }, []);

  const textColor = useColorModeValue("secondaryGray.900", "white");

  return (
    <Card>
      <Text
        color={textColor}
        fontSize='22px'
        fontWeight='700'
        mb='24px'
        lineHeight='100%'>
        Store Medical Record
      </Text>
      <FormControl>
        <FormLabel>Patient Name</FormLabel>
        <Input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Enter patient name..."
          mb='16px'
        />
      </FormControl>
      <FormControl>
        <FormLabel>Patient Address</FormLabel>
        <Input
          type="text"
          name="patientAddress"
          value={formData.patientAddress}
          onChange={handleChange}
          placeholder="Enter patient address..."
          mb='16px'
        />
      </FormControl>
      <FormControl>
        <FormLabel>Record Data</FormLabel>
        <Textarea
          name="recordData"
          value={formData.recordData}
          onChange={handleChange}
          placeholder="Enter medical record..."
          mb='24px'
        />
      </FormControl>
      <Button colorScheme='blue' onClick={handleStoreRecord}>Store Record</Button>
    </Card>
  );
}

export default RecordForm;
