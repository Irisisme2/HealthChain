/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import { MdBarChart, MdAttachMoney, MdAddTask, MdFileCopy, MdFavorite, MdLocalHospital, MdAccessibility } from 'react-icons/md';

import CheckTable from "views/admin/default/components/CheckTable";
import Stats from "views/admin/default/components/Stats";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import RecordManagement from "views/admin/default/components/RecordManagement";
export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
            <MiniStatistics
        startContent={
          <IconBox
            w='56px'
            h='56px'
            bg={boxBg}
            icon={
              <Icon w='32px' h='32px' as={MdFavorite} color={brandColor} />
            }
          />
        }
        name='Heart Rate'
        value='72 bpm'
      />
      <MiniStatistics
        startContent={
          <IconBox
            w='56px'
            h='56px'
            bg={boxBg}
            icon={
              <Icon w='32px' h='32px' as={MdLocalHospital} color={brandColor} />
            }
          />
        }
        name='Blood Pressure'
        value='120/80 mmHg'
      />
      <MiniStatistics
        startContent={
          <IconBox
            w='56px'
            h='56px'
            bg={boxBg}
            icon={
              <Icon w='32px' h='32px' as={MdAccessibility} color={brandColor} />
            }
          />
        }
        name='BMI'
        value='22.5'
      />
      <MiniStatistics
        startContent={
          <IconBox
            w='56px'
            h='56px'
            bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
            icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
          />
        }
        name='New Tasks'
        value='3'
      />
      <MiniStatistics
        startContent={
          <IconBox
            w='56px'
            h='56px'
            bg={boxBg}
            icon={
              <Icon w='32px' h='32px' as={MdFileCopy} color={brandColor} />
            }
          />
        }
        name='Total Appointments'
        value='12'
      />
      <MiniStatistics
        endContent={
          <Flex me='-16px' mt='10px'>
            <FormLabel htmlFor='metric'>
              <Avatar src='https://via.placeholder.com/150' /> {/* Przykładowy awatar */}
            </FormLabel>
            <Select
              id='metric'
              variant='mini'
              mt='5px'
              me='0px'
              defaultValue='bpm'>
              <option value='bpm'>bpm</option>
              <option value='mmHg'>mmHg</option>
              <option value='BMI'>BMI</option>
            </Select>
          </Flex>
        }
        name='Preferred Metric'
        value='bpm'
      />
    </SimpleGrid>


      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <Stats />
        <WeeklyRevenue />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />
        <RecordManagement />
      </SimpleGrid>
    </Box>
  );
}
