// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import { MdEvent } from "react-icons/md";

export default function Appointment(props) {
  const { doctor, date, time, location, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p='14px'>
      <Flex align='center' direction={{ base: "column", md: "row" }}>
        <Icon as={MdEvent} color='secondaryGray.500' h='24px' w='24px' me='20px' />
        <Box>
          <Text
            color={textColorPrimary}
            fontWeight='500'
            fontSize='md'
            mb='4px'>
            {doctor}
          </Text>
          <Text
            fontWeight='500'
            color={textColorSecondary}
            fontSize='sm'
            me='4px'>
            Date: {date} • Time: {time} • Location: {location}
          </Text>
        </Box>
      </Flex>
    </Card>
  );
}
