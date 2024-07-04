// stats.js
import React, { useState, useEffect } from 'react';
import { storeMedicalRecord, getMedicalRecord } from './blockchain';
import { Box, Button, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdShowChart, MdOutlineCalendarToday } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import { lineChartDataBloodPressure, lineChartOptionsBloodPressure, lineChartDataBloodSugar, lineChartOptionsBloodSugar } from "variables/charts";

export default function HealthCharts(props) {
  const { ...rest } = props;
  const [medicalRecord, setMedicalRecord] = useState(null);

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue({ bg: "secondaryGray.400" }, { bg: "whiteAlpha.50" });
  const bgFocus = useColorModeValue({ bg: "secondaryGray.300" }, { bg: "whiteAlpha.100" });

  useEffect(() => {
    async function fetchMedicalRecord() {
      const record = await getMedicalRecord('PATIENT_ADDRESS');
      setMedicalRecord(record);
    }

    fetchMedicalRecord();
  }, []);

  const handleStoreRecord = async () => {
    const success = await storeMedicalRecord('PATIENT_ADDRESS', medicalRecord);
    if (success) {
      alert('Record stored successfully');
    } else {
      alert('Failed to store record');
    }
  };

  return (
    <Card justifyContent="center" align="center" direction="column" w="100%" mb="0px" {...rest}>
      <Flex justify="space-between" ps="0px" pe="20px" pt="5px">
        <Flex align="center" w="100%">
          <Button bg={boxBg} fontSize="sm" fontWeight="500" color={textColorSecondary} borderRadius="7px">
            <Icon as={MdOutlineCalendarToday} color={textColorSecondary} me="4px" />
            This month
          </Button>
          <Button ms="auto" align="center" justifyContent="center" bg={bgButton} _hover={bgHover} _focus={bgFocus} _active={bgFocus} w="37px" h="37px" lineHeight="100%" borderRadius="10px" {...rest}>
            <Icon as={MdShowChart} color={iconColor} w="24px" h="24px" />
          </Button>
        </Flex>
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection="column" me="20px" mt="28px">
          <Text color={textColor} fontSize="34px" textAlign="start" fontWeight="700" lineHeight="100%">
            120/80 mmHg
          </Text>
          <Flex align="center" mb="20px">
            <Text color="secondaryGray.600" fontSize="sm" fontWeight="500" mt="4px" me="12px">
              Blood Pressure
            </Text>
            <Flex align="center">
              <Icon as={RiArrowUpSFill} color="green.500" me="2px" mt="2px" />
              <Text color="green.500" fontSize="sm" fontWeight="700">
                +2.45%
              </Text>
            </Flex>
          </Flex>
          <Flex align="center">
            <Icon as={IoCheckmarkCircle} color="green.500" me="4px" />
            <Text color="green.500" fontSize="md" fontWeight="700">
              Stable
            </Text>
          </Flex>
        </Flex>
        <Box minH="260px" minW="75%" mt="auto">
          <LineChart chartData={lineChartDataBloodPressure} chartOptions={lineChartOptionsBloodPressure} />
        </Box>
      </Flex>
      <Flex w="100%" flexDirection={{ base: "column", lg: "row" }} mt="20px">
        <Flex flexDirection="column" me="20px" mt="28px">
          <Text color={textColor} fontSize="34px" textAlign="start" fontWeight="700" lineHeight="100%">
            90 mg/dL
          </Text>
          <Flex align="center" mb="20px">
            <Text color="secondaryGray.600" fontSize="sm" fontWeight="500" mt="4px" me="12px">
              Blood Sugar
            </Text>
            <Flex align="center">
              <Icon as={RiArrowUpSFill} color="red.500" me="2px" mt="2px" />
              <Text color="red.500" fontSize="sm" fontWeight="700">
                +1.15%
              </Text>
            </Flex>
          </Flex>
          <Flex align="center">
            <Icon as={IoCheckmarkCircle} color="red.500" me="4px" />
            <Text color="red.500" fontSize="md" fontWeight="700">
              Slightly Elevated
            </Text>
          </Flex>
        </Flex>
        <Box minH="260px" minW="75%" mt="auto">
          <LineChart chartData={lineChartDataBloodSugar} chartOptions={lineChartOptionsBloodSugar} />
        </Box>
      </Flex>
    </Card>
  );
}