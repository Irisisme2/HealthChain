import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import RecordForm from './RecordForm'; // Upewnij się, że ścieżka jest poprawna
import Web3 from 'web3';

function RecordManagement() {
  const [showForm, setShowForm] = useState(false);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    setupWeb3();
  }, []);

  const setupWeb3 = async () => {
    if (window.ethereum) {
      try {
        // Ładuj provider Web3 z MetaMask
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new Web3(window.ethereum);
        setWeb3(provider);
      } catch (error) {
        console.error('User denied account access or error occurred', error);
      }
    } else {
      console.error('MetaMask not detected');
    }
  };

  const toggleForm = async () => {
    if (!web3) {
      console.error('Web3 provider not initialized');
      return;
    }

    setShowForm(!showForm);
  };

  return (
    <div>
      <Button colorScheme='blue' onClick={toggleForm} mb='24px'>
        {showForm ? 'Hide Form' : 'Add Medical Record'}
      </Button>
      {showForm && <RecordForm web3={web3} />}
    </div>
  );
}

export default RecordManagement;
