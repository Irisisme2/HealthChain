/* eslint-disable */
import React, { useMemo } from "react";
import {
  Flex,
  Progress,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";

export default function PrescriptionTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={useColorModeValue("secondaryGray.900", "white")}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Prescription Table
        </Text>
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th key={index} borderColor="transparent">
                <Flex
                  justify="space-between"
                  align="center"
                  fontSize={{ sm: "10px", lg: "12px" }}
                  color="gray.400"
                >
                  {column.Header}
                </Flex>
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <Td key={colIndex} borderColor="transparent">
                  <Text
                    color={useColorModeValue("secondaryGray.900", "white")}
                    fontSize="sm"
                    fontWeight="700"
                  >
                    {row[column.accessor]}
                  </Text>
                </Td>
              ))}
              <Td>
                <button onClick={() => handleDownload(row.id)}>
                  Download
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Card>
  );
}