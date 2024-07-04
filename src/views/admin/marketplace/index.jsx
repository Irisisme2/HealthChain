import React, { useMemo, useEffect, useState } from "react";
import Web3 from "web3"; // Import biblioteki Web3.js
import visitData from "./variables/visitdata.json"; // Import danych z pliku JSON

import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";

export default function VisitTable() {
  const [web3, setWeb3] = useState(null);

  // Funkcja do konfiguracji połączenia z MetaMask
  const setupWeb3 = async () => {
    if (window.ethereum) {
      try {
        // Ładuj provider Web3 z MetaMask
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new Web3(window.ethereum);
        setWeb3(provider);
      } catch (error) {
        console.error("User denied account access or error occurred", error);
      }
    } else {
      console.error("MetaMask not detected");
    }
  };

  useEffect(() => {
    setupWeb3();
  }, []); // Wywołaj setupWeb3() tylko raz podczas montowania komponentu

  // Funkcja generująca wizyty z danych JSON
  const generateVisits = () => {
    return visitData;
  };

  const tableDataCheck = useMemo(() => generateVisits(), []);

  const columnsDataCheck = [
    {
      Header: "Doctor",
      accessor: "doctor",
    },
    {
      Header: "Place",
      accessor: "place",
    },
    {
      Header: "Details",
      accessor: "details",
    },
    {
      Header: "Diagnosis",
      accessor: "diagnosis",
    },
    {
      Header: "Recommendations",
      accessor: "recommendations",
    },
  ];

  const columns = useMemo(() => columnsDataCheck, []);

  const tableInstance = useTable(
    {
      columns,
      data: tableDataCheck,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");

  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Last visits and diagnosis
        </Text>
        <Menu />
      </Flex>
      <Table
        {...getTableProps()}
        variant="simple"
        color="gray.500"
        mb="24px"
      >
        <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row, index) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()} key={index}>
                {row.cells.map((cell, index) => {
                  let data = "";
                  if (cell.column.Header === "Recommendations") {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value.join(", ")}
                      </Text>
                    );
                  } else {
                    data = (
                      <Text color={textColor} fontSize="sm" fontWeight="700">
                        {cell.value}
                      </Text>
                    );
                  }
                  return (
                    <Td
                      {...cell.getCellProps()}
                      key={index}
                      fontSize={{ sm: "14px" }}
                      minW={{ sm: "150px", md: "200px", lg: "auto" }}
                      borderColor="transparent"
                    >
                      {data}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Card>
  );
}
